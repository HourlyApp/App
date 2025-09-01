"use client"

async function FindGroupUsers(user){
    const response = await fetch(`api/Group?gid=${user.groupId}`)

    const data = await response.json()

    
    return data
 }


 export default FindGroupUsers