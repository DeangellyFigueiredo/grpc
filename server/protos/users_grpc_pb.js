// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserList(arg) {
  if (!(arg instanceof users_pb.UserList)) {
    throw new Error('Expected argument of type UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserList(buffer_arg) {
  return users_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  list: {
    path: '/UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.UserList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_UserList,
    responseDeserialize: deserialize_UserList,
  },
  create: {
    path: '/UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_User,
    requestDeserialize: deserialize_User,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
