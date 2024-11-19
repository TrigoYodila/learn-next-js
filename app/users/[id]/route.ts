import { users } from "../route";

export async function GET(
    _request:Request,  // _request signifie qu'on ne l'a pas utilisé
    {params}:{params:{id:string}})
{

    const { id } = await params
    const user = users.find(item => item.id === parseInt(id))

    return Response.json(user)
}

export async function PATCH(
    request:Request,
    {params}:{params:{id:string}}
){
    const { id } = await params
    const user = await request.json()

    const userId = users.findIndex(item => item.id === parseInt(id))

    if(userId === -1){
        return new Response(JSON.stringify({ error: "User not found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404
        })
    }
    users[userId].name = user.name

    return new Response(JSON.stringify(users[userId]), {
        headers:{
            "Content-Type":"application/json"
        },
        status:200
    })
}


export async function DELETE(
    _request:Request,
    {params}:{params:{id:string}}
){
    const { id } = await params

    const userId = users.findIndex(item => item.id === parseInt(id))
    // const user = users.find(item => item.id === parseInt(id))

    if(userId === -1){
    // if(!user){
        return new Response(JSON.stringify({ error: "User not found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404
        })
    }

    const deletedUser = users.splice(userId, 1)[0]
    // users = users.filter(item => item.id !== parseInt(id))

    return new Response(JSON.stringify(deletedUser), {
    // return new Response(JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
    
}