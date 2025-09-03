"use client"

async function CreateGroupGoal(Goal,group){
    const response = await fetch(`api/GroupGoal`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            endDate: Goal.Date,
            Hours: Goal.Hours,
            Name: Goal.Name,
            groupId: group.id
        })
    })

    const goal = await response.json()
    console.log(goal)

    return goal
 }


 export default CreateGroupGoal




 