"use client"

async function GetUserData(user){
    const response = await fetch(`api/user?email=${user.email}`)

    user = await response.json()

    return user
 }


 export default GetUserData