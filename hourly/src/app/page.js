"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import GetUserData from "../User/GetUser";
import CreateUser from "../User/CreateUser";
import CreateLog from "../Log/CreateLog";
import GetLogs from "../Log/ViewLogs";
import UpdateUser from "../User/UpDateHours";
import CreateGroup from "../Group/CreateGroup";
import UpdateUserGroup from "../User/AddToGroup";
import FindGroupUsers from "../User/FindUsersByGroup";
import CreateGoal from "../Goals/CreateGoal";
import CreateGroupGoal from "../GroupGoals/CreateGroupGoal";

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
              
            const goal = {
              
                Date : new Date("2025-09-03T10:30:00"),
                Hours : 100,
                Name : "python",
              }
            if (userEmailList.includes(user.email)){  // if user is in the db
                const data = await GetUserData(user)

               // console.log(data)

                //const groupGoal =  await CreateGroupGoal(goal,data.Memberships[0].group)
                //console.log(groupGoal)
                //console.log(data.Memberships[0].group.GroupGoals)
                //UpdateUser(data,3)
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