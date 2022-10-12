import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";
import { IUser } from "../UseCase/IUser";
import { User } from "../UseCase/User";

class UserController{
    
 async create(req:Request,res:Response){
   const { nome } = req.body;
   console.log("Nome: <", nome, ">");
   const userdb = await  UserModel.create({
       nome
   });
   console.log('criou');
   userdb.save();
   console.log('salvou');
   const user = new User(nome);
   const resultado = user.teste('ghghg');
   console.log(resultado);
   console.log('executou');

   // const user = await  this.IIUser.crateUser(req.body)
   return res.status(201).json(user)
 };

 async findAll(req:Request, res:Response){
    const users = await UserModel.findAll();
    return (users.length>0)
      ? res.status(200).json(users)//sucesso
      : res.status(204).send(); //nao sucesso
 }
  async findOne(req:Request,res:Response){
   const {userid}= req.params;
    const user = await UserModel.findOne({
        where:{
            id:userid
        },
    });
     return user ? res.status(200).json(user)
     :res.status(204).send();
  }
  
 async update(req:Request,res:Response){
    const {userid}= req.params;
    await UserModel.update(req.body,{
        where:{
            id:userid
        },
    });
    return res.status(204).send()
 }

 async destroy(req:Request,res:Response){
    const {userid}= req.params;
    await UserModel.destroy({where:{id:userid}});
    return res.status(204).send;

 }

}

export default new UserController()
