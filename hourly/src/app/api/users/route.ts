import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(request: Request){
    console.log("reached")
    try{
    const data = await prisma.user.findMany()
    return new Response(JSON.stringify(data),{
        status:200,
        headers: {'Content-Type': 'application/json'}
    })}

    catch (err) {
    console.error(err)
    return new Response(JSON.stringify([]), { // return empty array on error
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
}

}