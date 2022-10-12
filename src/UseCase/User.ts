import { UserModel } from "../database/models/UserModel";
import { IUser } from "./IUser";

export class User implements IUser{
   nome: string;

   constructor(nome:string){
    this.nome = nome
   }
   teste(n: string): string {
       return n
   }
}