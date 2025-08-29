import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers() {

  const newUser = await prisma.user1.create({
    data:{
    name: "Favour",
    email:"Fvour@email.com",
    totalHours : 3
    }

  })

  const userList = await prisma.user1.findMany()

  return userList;
}

export default async function Home() {
  const user = await getUsers();
  console.log(user)
  return (
    <div> 
      Hello
    </div>
  );
}