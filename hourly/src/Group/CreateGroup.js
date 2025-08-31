"use client"

async function CreateGroup(GroupData){
    const response = await fetch(`/api/Group`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: GroupData.name,
            total: 0,
        })
    })

    const Group = await response.json()

    console.log(Group)
 }


 export default CreateGroup