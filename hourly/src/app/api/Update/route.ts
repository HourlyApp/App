import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export async function POST(request: Request){

    try{
        const body = await request.json()
        const {name, email,totalHours,uid,groupId} = body
    
    
        if (!email){
            return new Response(
                JSON.stringify("must enter valid email"),
                {status:200}
            )
        }

        const newUser = await prisma.user.update({
            where:{
            id:uid,
        },

            data:{
            name,
            email,
            totalHours,
            },

            include:{
                Goals:true,

                 
            Memberships: {
                include: {
                    group: {
                        include :{

                            GroupGoals :true
                        }
                    }
                }
            }     


            }

        })

        return new Response(JSON.stringify(newUser),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error Updating u"}),
        {status:500}
        )
    }

    

}
