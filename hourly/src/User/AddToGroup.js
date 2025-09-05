"use client"

async function AddToGroup(user,group){
    console.log("reached")
     const response = await fetch(`api/AddToGroup`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userId: user.id,
          groupId: group.id  
        })
    })

    const data = await response.json()

    return data
 }


 export default AddToGroup