import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request){

    const { searchParams } = new URL(request.url)
    const userEmail = searchParams.get("email")

    const data = await prisma.user.findUnique({
        where: {email: userEmail },
        include:{
            Memberships: {
                include: {
                    group: true
                }
            }     
        }
    })
    return new Response(JSON.stringify(data),{

        status:200,
        headers: {'Content-Type': 'application/json'}
    })

}





export async function POST(request: Request){

    try{
        const body = await request.json()
        const {name, email,totalHours} = body
    
    
        if (!email){
            return new Response(
                JSON.stringify("must enter valid email"),
                {status:200}
            )
        }

        const newUser = await prisma.user.create({
            data:{
            name : name || null,
            email,
            totalHours,
            },

        })

        return new Response(JSON.stringify(newUser),{
            status:201,
            headers: {"Content-Type": "application/json"}
        })
    }


    catch(error){
        console.log(error)

        return new Response(JSON.stringify({error:"Error creating new user"}),
        {status:500}
        )
    }

    

}
