"use client"

async function GetUserData(user){
    const response = await fetch(`api/user?email=${user.email}`)

    user = await response.json()

    console.log(user.name +"123")
 }


 export default GetUserData