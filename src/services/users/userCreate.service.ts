// import users from "../../database";
// import { IUser, IUserCreate } from "../../interfaces/users";
// import * as bcrypt from "bcrypt";

// const userCreateService = async ({ name, email, password }: IUserCreate) => {
//   const emailAlreadyExists = users.find((user) => user.email === email);

//   if (emailAlreadyExists) {
//     throw new Error("Email Already Exists");
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser: IUser = {
//     id: users.length + 1,
//     name,
//     email,
//     password: hashedPassword,
//   };

//   users.push(newUser);

//   return { ...newUser, password: undefined };
// };

// export default userCreateService;
