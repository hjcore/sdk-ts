import { RelayerTypes, CryptoTypes } from '@walletconnect/types'

import {
  ErrorResponse as CommonErrorResponse,
  JsonRpcError,
  JsonRpcRequest,
  JsonRpcResponse,
  JsonRpcResult,
} from '@walletconnect/jsonrpc-utils'
import { AuthClientTypes, IAuthClient } from './client'
import { JsonRpcTypes } from './jsonrpc'

export interface RpcOpts {
  req: RelayerTypes.PublishOptions
  res: RelayerTypes.PublishOptions
}

export declare namespace AuthEngineTypes {
  interface EventCallback<T extends JsonRpcRequest | JsonRpcResponse> {
    topic: string
    payload: T
  }

  // https://github.com/ChainAgnostic/CAIPs/pull/74
  interface RequestParams {
    aud: string
    domain: string
    messageData: string
    statement?: string
  }

  interface PayloadParams {
    aud: string
    domain: string
    messageData: string
    statement?: string
  }

  interface CacaoPayload {
    signerAddress: string
    domain: string
    aud: string
    messageData: string
  }

  interface CacaoHeader {
    t?: 'cosmos'
  }

  interface CacaoSignature {
    t?: 'cosmos'
    s: string
    m?: string
  }

  interface Cacao {
    h: CacaoHeader
    p: CacaoPayload
    s: CacaoSignature
  }

  interface PendingRequest {
    id: number
    requester: {
      publicKey: string
      metadata: AuthClientTypes.Metadata
    }
    cacaoPayload: CacaoPayload
    message: string
  }

  interface ResultResponse {
    id: number
    signature: CacaoSignature
  }

  interface ErrorResponse {
    id: number
    error: CommonErrorResponse
  }

  type RespondParams = ResultResponse | ErrorResponse
}

export abstract class IAuthEngine {
  // eslint-disable-next-line no-empty-function
  constructor(public client: IAuthClient) {}

  public abstract init(): void

  public abstract request(
    params: AuthEngineTypes.RequestParams,
    opts?: { topic?: string },
  ): Promise<{ uri: string; id: number }>

  public abstract respond(params: AuthEngineTypes.RespondParams): Promise<void>

  public abstract getPendingRequests(): Record<
    number,
    AuthEngineTypes.PendingRequest
  >

  // ---------- Protected Helpers --------------------------------------- //

  protected abstract sendRequest<M extends JsonRpcTypes.WcMethod>(
    topic: string,
    method: M,
    params: JsonRpcTypes.RequestParams[M],
    encodeOpts?: CryptoTypes.EncodeOptions,
  ): Promise<number>

  protected abstract sendResult<M extends JsonRpcTypes.WcMethod>(
    id: number,
    topic: string,
    result: JsonRpcTypes.Results[M],
    encodeOpts?: CryptoTypes.EncodeOptions,
  ): Promise<number>

  protected abstract sendError(
    id: number,
    topic: string,
    error: AuthEngineTypes.ErrorResponse,
    opts?: CryptoTypes.EncodeOptions,
  ): Promise<number>

  protected abstract setExpiry(topic: string, expiry: number): Promise<void>

  // ---------- Protected Relay Event Methods ----------------------------------- //

  protected abstract onRelayEventRequest(
    event: AuthEngineTypes.EventCallback<JsonRpcRequest>,
  ): void

  protected abstract onRelayEventResponse(
    event: AuthEngineTypes.EventCallback<JsonRpcResponse>,
  ): Promise<void>

  // ---------- Protected Relay Event Handlers --------------------------------- //

  protected abstract onAuthRequest(
    topic: string,
    payload: JsonRpcRequest<JsonRpcTypes.RequestParams['wc_authRequest']>,
  ): Promise<void>

  protected abstract onAuthResponse(
    topic: string,
    payload:
      | JsonRpcResult<JsonRpcTypes.Results['wc_authRequest']>
      | JsonRpcError,
  ): void
}
