"use client"

async function UpdateUser(user ,hours){
    const response = await fetch(`api/Update`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            totalHours: hours + user.totalHours,
            uid: user.id,
            gid: user.groupId
        })
    })

    user = await response.json()

    console.log(user)
    //return user
 }


 export default UpdateUser