import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export async function GET(request:Request){
    try{
        const data = await prisma.group.findMany()

        return new Response(JSON.stringify(data),{

        status:200,
        headers: {'Content-Type': 'application/json'}
        })

    }

    catch(error){

        console.log("error in the database")

         return new Response(JSON.stringify({"error": error}),{

        status:500,
        headers: {'Content-Type': 'application/json'}
        })
    }


}