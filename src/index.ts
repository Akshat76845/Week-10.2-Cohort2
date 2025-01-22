import {PrismaClient}from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username:string,password:string,name:string,lastName:string){
    const res = await prisma.user.create({
        data:{
            email:username,
            password,
            name,
            lastName
        },
        select:{
            id:true,
            password:true,
            name:true
        }
    })
    console.log(res);
}
insertUser("ak@gmail.com","password","Ak","G")