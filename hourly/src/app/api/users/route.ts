import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(request: Request){
    const data = await prisma.user1.findMany()
    return new Response(JSON.stringify(data),{

        status:200,
        headers: {'Content-Type': 'application/json'}
    })

}