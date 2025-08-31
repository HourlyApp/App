
async function GetLogs(uid){
    try{
    const response = await fetch(`/api/Logs?id=${uid}`)

    const data = await response.json()

    console.log(data)
}

catch(error){
    console.log("can retrieve logs")

}
}

export default GetLogs