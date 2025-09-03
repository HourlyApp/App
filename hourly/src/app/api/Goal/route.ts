
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



export async function DELETE(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id")

    try{
        await prisma.UserGoal.delete({
            where : {
                id: id
            }
        })


          return new Response(JSON.stringify({finished:'delete complete'}),{
            status:200,
            headers: {"Content-Type": "application/json"}
        })

    }

    catch(error){
        console.log(error)
        
        return new Response(JSON.stringify( { error: 'Internal server error - delete ' }),
        { status: 500 })
}

}