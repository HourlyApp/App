
async function UpdateGroup(group ,hours){
    const response = await fetch(`api/UpdateGroup`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            gid: group.id,
            hours: hours
        })
    }) 
   
    
    const newGroup = await response.json()
    console.log(newGroup)

    newGroup.GroupGoals.forEach(element => {

        if (element.completed == false){
        element.Hours =  element.Hours - hours
        }

        if (element.Hours <= 0){
            element.completed = true
        }
    });

    
    const res = await fetch(`api/GroupGoals`,{
        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Goals:newGroup.GroupGoals
        })
    }) 
    
    return res

 }


 export default UpdateGroup