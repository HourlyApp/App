import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export async function POST(request: Request){

    try{
    const { Goals } = await request.json();


    const updatePromises = Goals.map(element => {
        
       return prisma.GroupGoal.update({
        where: {
            id: element.id
        },

        data:{
            Hours: element.Hours,
            completed:element.completed
        }

       })
        

        
    })
    prisma.$transaction(updatePromises);

        return new Response(JSON.stringify(updatePromises),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error Updating Group Goals"}),
        {status:500}
        )
    }

    

}
