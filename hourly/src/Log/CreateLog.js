"use client"

async function CreateLog(user, log){
    const response = await fetch(`api/Log`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            hours: log.hours,
            desc: log.desc,
            userId: user.id
        })
    })

    const data = await response.json()

    console.log(data)
 }


 export default CreateLog