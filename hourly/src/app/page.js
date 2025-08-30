"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import GetUserData from "./GetUser";
import CreateUser from "./CreateUser";

const prisma = new PrismaClient()



export default function Navbar() {
const [user,setUser] = useState(null)
const { data: session } = useSession()
  


  useEffect(() =>{
    if (session){
    setUser(session.user)
    }
  },[session])


  useEffect(() =>{
    if (user){
     
      const allUsers = async () => {
        const response = await fetch('/api/users')
        const output = await response.json()
        
          const userList = []
          output.forEach(element => {
            userList.push(element.email)
          });
              
          
          
            if (userList.includes(user.email)){
                GetUserData(user)
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