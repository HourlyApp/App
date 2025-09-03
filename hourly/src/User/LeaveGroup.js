
import UpdateGroup from "../Group/UpdateGroup";

async function LeaveGroup(user ,group){
   //console.log(user.id, group.Members[1].userId)
   console.log(user.id)

   const newGroup = group.Members.filter((element) =>{
       return element.userId != user.id
    })

    console.log(newGroup)
 }


 export default LeaveGroup