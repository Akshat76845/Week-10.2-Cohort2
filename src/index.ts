import {PrismaClient}from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams{
    name:string;
    lastName:string
}
async function updateUser(username:string,{
    name,
    lastName
}:UpdateParams){
    const res = await prisma.user.update({
        where:{email:username},
        data:{
            name,
            lastName
        }
    })
    console.log(res)
}
updateUser("ak@gmail.com",{
    name:"Aqp",
    lastName:"Gp"
})