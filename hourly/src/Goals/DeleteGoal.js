
async function DeleteGoal(Goal){

     const response = await fetch(`api/Goal?id=${Goal.id}`,{

        method: "DELETE",
        headers:{
                  "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    console.log(data)
}

export default DeleteGoal