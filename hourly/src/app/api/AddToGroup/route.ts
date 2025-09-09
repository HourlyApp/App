import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()


export async function POST(request:Request){
    const body = await request.json();
    const {groupId ,userId} = await body
    console.log("reached")

    try{
    const Membership = await prisma.GroupMember.create({
        data:{
          userId,
          groupId
        }
    })
    
          return new Response(JSON.stringify({finished:'Membership Created',Membership}),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })}

    catch(error){
        console.log(error)
        return new Response(JSON.stringify({error:'Failed to create membership'}))

    }
}