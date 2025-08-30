"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";



export default function Navbar() {

useEffect(()=>{
const func = async () =>{
 const response= await fetch('/api/user')
    

    const output = await response
    console.log(output.text())}

  func()
},[])

    

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {console.log(session.user)}
        Signed in as {session.user.email} <br />
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