import * as grpc from "@grpc/grpc-js";
import { UserServiceClient } from "./protos/users_grpc_pb";
import { Empty, User, UserList } from "./protos/users_pb";
const GRPC_HOST = "localhost:5051";

const client = new UserServiceClient(
  GRPC_HOST,
  grpc.credentials.createInsecure() //todo verificar a forma de credenciamento segura
);

const newUser = new User();
newUser.setName("Deanzinho");
newUser.setAge(10);
newUser.setTest(false);

client.create(newUser, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user.toObject());
    showList();
  }
});

const showList = () => {
  client.list(new Empty(), (error, users) => {
    if (error) {
      console.error(error);
    } else {
      const userList = users.toObject().usersList;
      console.log(userList);
    }
  });
};
