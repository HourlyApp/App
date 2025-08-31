"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import GetUserData from "./GetUser";
import CreateUser from "./CreateUser";
import CreateLog from "./CreateLog";
import GetLogs from "./ViewLogs";
import UpdateUser from "./UpDate";

const prisma = new PrismaClient()



export default function Navbar() {
const [user,setUser] = useState(null) 
const { data: session } = useSession()  //Get info of logged in user
  


  useEffect(() =>{
    if (session){
    setUser(session.user)
    }
  },[session])


  useEffect(() =>{
    if (user){
     
      const allUsers = async () => {
        const response = await fetch('/api/users')
        const EveryUser = await response.json()
        
          const userEmailList = []
          
          EveryUser.forEach(element => {
            userEmailList.push(element.email)
          });
              

        
            if (userEmailList.includes(user.email)){  // if user is in th db
                const data = await GetUserData(user)
                console.log(data)
              }

            else{
                CreateUser(user)
              }
      }
   
      allUsers()
  }
  },[user,setUser])



  if (user) {
    return (
      <>
        Signed in as {user.name} <br />
        <button onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
    </>
  )
}