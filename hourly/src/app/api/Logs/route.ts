import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request){

    const { searchParams } = new URL(request.url)
    const uid = searchParams.get("id")

    const data = await prisma.log.findMany({
        where: {userId: uid}
    })
    return new Response(JSON.stringify(data),{

        status:200,
        headers: {'Content-Type': 'application/json'}
    })

}
