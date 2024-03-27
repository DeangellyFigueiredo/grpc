// package: 
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as users_pb from "./users_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IUserServiceService_IList;
    create: IUserServiceService_ICreate;
}

interface IUserServiceService_IList extends grpc.MethodDefinition<users_pb.Empty, users_pb.UserList> {
    path: "/UserService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UserList>;
    responseDeserialize: grpc.deserialize<users_pb.UserList>;
}
interface IUserServiceService_ICreate extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: "/UserService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<users_pb.Empty, users_pb.UserList>;
    create: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
}

export interface IUserServiceClient {
    list(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    list(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    list(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    create(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    create(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    create(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public list(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public list(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public create(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}
