"use client"

async function CreateGoal(user,Goal){
    const response = await fetch(`api/Goal`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            endDate: Goal.Date,
            Hours: Goal.Hours,
            Name: Goal.Name,
            userId: user.id
        })
    })

    const goal = await response.json()
    console.log(goal)

    return goal
 }


 export default CreateGoal