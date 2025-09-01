
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export async function POST(request: Request){

    try{
        const body = await request.json()
        const {endDate ,Hours ,Name,userId} = body
    

        const newGoal = await prisma.UserGoal.create({
            data:{
                endDate,
                Hours,
                Name,
                userId,
            },

        })

        return new Response(JSON.stringify(newGoal),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error creating new goal"}),
        {status:500}
        )
    }

    

}
