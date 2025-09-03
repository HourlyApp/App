
import UpdateGroup from "../Group/UpdateGroup";

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
   


    const new_user = await response.json()

    //console.log(new_user.Memberships)

    //console.log(hours, "AS")

    new_user.Memberships.forEach(element => {
        UpdateGroup(element.group, hours)
    });



    new_user.Goals.forEach(element => {
        if (element.completed == false){ 
        element.Hours = element.Hours - hours
        }
        if (element.Hours <= 0){
            element.completed = true
        }

    })


    const res = await fetch(`api/Goals`,{

        method: "POST",
        headers:{
                  "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Goals:new_user.Goals
        })
    }) 
    
    return res
 }


 export default UpdateUser