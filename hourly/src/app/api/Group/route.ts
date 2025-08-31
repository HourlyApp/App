import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


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
