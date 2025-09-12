"use client";
import React, { useState } from "react";
import Google from '../images/googlelogo.webp'
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import GetUserData from "../../User/GetUser.js";
import CreateUser from "../../User/CreateUser";
import { useRouter } from "next/navigation"; // Import useRouter





export default function Login() {


    const { data: session, status } = useSession();
  const [count, setCount] = useState(1);
  const [user,setUser] = useState(null) 
    const router = useRouter(); // Initialize router

  //const [signed,setSigned] = useState(false)
  //const { data: session } = useSession()  //Get info of logged in user
   const isSigned = status === "authenticated";
  
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
            if (userEmailList.includes(user.email)){  // if user is in the db
                const data = await GetUserData(user)
                console.log("data" ,data)
                router.push('/')
              }

            else{
                CreateUser(user)
              }
      }
   
      allUsers()
  }
  },[user,setUser])


  

      const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
      
    return (
        <div className=" bg-[#292929] rounded-[3vw] mt-[5%] ml-[32%] h-150 w-120 drop-shadow-2xl">
          <div className="text-center pt-15 text-8xl  text-[#D9D9D9] font-bold">Hourly</div>
           <p className="text-[#D9D9D9] pt-5 text-center  text">Every. second. counts.</p>


           <button  onClick={ () => {signIn("google") ,setSigned(true)}} className="flex ml-[15%] h-[15%] w-[70%] mt-45 text-black bg-[#D9D9D9] rounded-2xl">
            
            <Image src={Google} alt="Google Logo" className="w-15  h-20 ml-3 pt-3"/>

             <p className="w-full  pt-[8%] font-bold text-[1.4vw] text-[#292929] pr-3 ">Continue with Google</p>
           
            
           </button>
         
        </div>
    );
}

