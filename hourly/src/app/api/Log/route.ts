import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



export async function POST(request: Request){

    try{
        const body = await request.json()
        const {hours, desc,userId} = body
    
    
        if (!hours){
            return new Response(
                JSON.stringify("must enter valid amount of hours"),
                {status:200}
            )
        }

        const newLog = await prisma.log.create({
            data:{
            Hours : hours,
            Description: desc,
            userId: userId
            },

        })

        return new Response(JSON.stringify(newLog),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error creating new Log"}),
        {status:500}
        )
    }

    

}
