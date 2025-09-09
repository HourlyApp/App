


async function AllGroups(){

try{
response =  await fetch(`/api/Groups`)
data = await reponse.json()
console.log(data)
return data
}

catch(error){

    console.log("Can't retrieve groups from database")
}


}


export default AllGroups