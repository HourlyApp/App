import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



export async function GET(request: Request){

    const { searchParams } = new URL(request.url)
    const gid = searchParams.get("gid")

    const Members = await prisma.user.findMany({
        where: {groupId: gid}
    })

        return new Response(JSON.stringify(Members),{

        status:200,
        headers: {'Content-Type': 'application/json'}
    })
    
   
}




export async function POST(request: Request){

    try{
        const body = await request.json()
        const {name,total} = body
    
    
        if (!name){
            return new Response(
                JSON.stringify("must enter valid group name"),
                {status:200}
            )
        }

        const newGroup = await prisma.group.create({
            data:{
            groupName : name || null,
            groupTotal: total,
            },

        })

        return new Response(JSON.stringify(newGroup),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error creating newoup"}),
        {status:500}
        )
    }

    

}
