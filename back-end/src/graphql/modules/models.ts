import { getModelForClass } from "@typegoose/typegoose";

// Classes
import { Preparation } from "./Preparations/Preparation.model";
import { PreparationTodo } from "./PreparationTodos/PreparationTodo.model";
import { User } from "./User/User.model";

export const UserModel = getModelForClass(User);
export const PreparationModel = getModelForClass(Preparation);
export const PreparationTodoModel = getModelForClass(PreparationTodo);
