import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */

export interface QueryAllowanceRequest {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */

export interface QueryAllowanceRequestSDKType {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */

  grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */

export interface QueryAllowanceResponse {
  /** allowance is a allowance granted for grantee by granter. */
  allowance: Grant;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */

export interface QueryAllowanceResponseSDKType {
  /** allowance is a allowance granted for grantee by granter. */
  allowance: GrantSDKType;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */

export interface QueryAllowancesRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */

  pagination?: PageRequest;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */

export interface QueryAllowancesRequestSDKType {
  grantee: string;
  /** pagination defines an pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */

export interface QueryAllowancesResponse {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponse;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */

export interface QueryAllowancesResponseSDKType {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: GrantSDKType[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponseSDKType;
}

function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
  return {
    granter: "",
    grantee: ""
  };
}

export const QueryAllowanceRequest = {
  encode(message: QueryAllowanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  }

};

function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
  return {
    allowance: undefined
  };
}

export const QueryAllowanceResponse = {
  encode(message: QueryAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Grant.fromPartial(object.allowance) : undefined;
    return message;
  }

};

function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}

export const QueryAllowancesRequest = {
  encode(message: QueryAllowancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
  return {
    allowances: [],
    pagination: undefined
  };
}

export const QueryAllowancesResponse = {
  encode(message: QueryAllowancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};