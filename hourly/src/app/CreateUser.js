"use client"

async function CreateUser(user){
    const response = await fetch(`api/user`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            totalHours: 0,
        })
    })

    user = await response.json()

    console.log(user)
 }


 export default CreateUser