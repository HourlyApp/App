
import UpdateGroup from "../Group/UpdateGroup";

async function LeaveGroup(user ,group){

    console.log(user.id,group.id)
    const response = await fetch(`api/LeaveGroup?uid=${user.id}&gid=${group.id}`,{

        method: "DELETE",
        headers:{
                  "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    console.log(data)
    }

 export default LeaveGroup