import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export async function POST(request: Request){

    try{
    const body = await request.json();

    const {gid,hours} = body


    const res = await prisma.group.update({
        where :{
            id:gid
        },

        data:{
            groupTotal: {increment: hours}
        },

        include : {
            GroupGoals:true
        }

    })

    return new Response(JSON.stringify(res),
        {status:201}
    )

    }

    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error Updating Group"}),
        {status:500}
        )
    }

    

}
