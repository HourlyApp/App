

async function DeleteLog(log){

     const response = await fetch(`api/Log?id=${log.id}`,{

        method: "DELETE",
        headers:{
                  "Content-Type": "application/json",
        },
    })

    const data = await response.json()

    console.log(data)
}

export default DeleteLog