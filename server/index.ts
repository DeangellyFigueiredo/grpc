import * as grpc from "@grpc/grpc-js";
import { Empty, UserList, User } from "./protos/users_pb";
import { UserServiceService } from "./protos/users_grpc_pb";

let userList = new UserList();
const user = new User();
user.setId(1);
user.setName("John Doe");
user.setAge(30);
user.setTest(true);
userList.addUsers(user);
userList.addUsers(user);

const listUser = async (
  call: grpc.ServerUnaryCall<Empty, UserList>,
  callback: grpc.sendUnaryData<UserList>
) => {
  callback(null, userList);
};

const createUser = async (
  call: grpc.ServerUnaryCall<User, User>,
  callback: grpc.sendUnaryData<User>
) => {
  const user = call.request;
  userList.addUsers(user);
  callback(null, user);
};

const app = new grpc.Server();
app.addService(UserServiceService, { list: listUser, create: createUser });

const credential = grpc.ServerCredentials.createInsecure();

export { app, credential };

app.bindAsync("localhost:5051", credential, () => {
  console.log(`gRPC server listening at http://localhost:5051`);
  app.start();
});
