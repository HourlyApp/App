"use client"

async function UpdateUserGroup(user,gid){
    const response = await fetch(`api/Update`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            totalHours: user.totalHours,
            uid: user.id,
            groupId:gid
        })
    })

    user = await response.json()

    console.log(user)
    return user
 }


 export default UpdateUserGroup