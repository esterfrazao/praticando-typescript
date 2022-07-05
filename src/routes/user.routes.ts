import { Router } from "express";

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";

const userRoutes = Router()

userRoutes.post('/signup', userCreateController)
userRoutes.get('/', userListController)

export default userRoutes