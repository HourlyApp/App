import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient()


export async function DELETE(request:Request){
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("uid")
    const groupId = searchParams.get("gid")

    console.log(groupId,userId)

    try{
    const Membership = await prisma.GroupMember.findFirst({
        where : {
            userId: userId,
            groupId: groupId
        }
    })


    await prisma.GroupMember.delete({
       where:{
         id: Membership.id
       }
    })

    
          return new Response(JSON.stringify({finished:'delete complete'}),{
            status:200,
            headers: {"Content-Type": "application/json"}
        })}

    catch(error){
        console.log(error)
        return new Response(JSON.stringify({error:'Failed to delete membership'}))

    }
}