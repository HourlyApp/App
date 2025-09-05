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
import DeleteLog from "../Log/DeleteLog";
import DeleteGoal from "../Goals/DeleteGoal";
import DeleteGroupGoal from "../GroupGoals/DeleteGroupGoal";
import LeaveGroup from "../User/LeaveGroup";
import AddToGroup from "../User/AddToGroup";
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


            const Log = {
              hours: 4,
              desc: "idek"
            }

            const Group = {
              Name: "shuddup",
              id:"group1",
            }
            if (userEmailList.includes(user.email)){  // if user is in the db
                const data = await GetUserData(user)

               
                console.log(data)
                
                //console.log(data, data.Memberships[0].group)
                //LeaveGroup(data, data.Memberships[0].group)

                //DeleteGroupGoal(data.Memberships[0].group.GroupGoals[0])
                 //DeleteGoal(data.Goals[0])
                //DeleteLog(data.logs[0])
                //const groupGoal =  await CreateGroupGoal(goal,data.Memberships[0].group)
                //console.log(groupGoal)
                //console.log(data.Memberships[0].group.GroupGoals)
                //UpdateUser(data,3)
                //await CreateGoal(exampleuser,goal)
                //UpdateUser(data,data.Goals[0].id,4)
                await AddToGroup(data,Group)
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