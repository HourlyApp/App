
async function DeleteGroupGoal(Goal){

     const response = await fetch(`api/GroupGoal?id=${Goal.id}`,{

        method: "DELETE",
        headers:{
                  "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    console.log(data)
}

export default DeleteGroupGoal