import { revalidatePath } from "next/cache"
import { auth, currentUser } from '@clerk/nextjs/server'

type MockUser = {
    id:number,
    name:string
}

export default async function MockUsers(){

    // await new Promise((resolve) => setTimeout(resolve, 1000)) // une pause de 2 sec
    const authObj = await auth()
    const userObj = await currentUser()

    console.log({
        userObj,
        authObj
    })
    const response = await fetch("https://673c76d796b8dcd5f3fa2c3f.mockapi.io/users")
    const users = await response.json() 

    // ceci ajoute l'utilisateur mais ne met pas le composant à jour
    async function addUser(formData : FormData) {
        "use server"  // pour qu'elle soit executer du côté serveur
        const name = formData.get("name")
        const res = await fetch('https://673c76d796b8dcd5f3fa2c3f.mockapi.io/users',
            {
                method:'POST',
                headers:{   
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name})
            }
        )
        const newUser = await res.json()
        revalidatePath("/mock-users")  // chemin à mettre à jour
        console.log(newUser)
    }

    return (
        <div className="py-10">
            <form action={addUser}>
                <input type="text" name="name" required className="border p-2 mr-2 rounded" />
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded">
                    Add User
                </button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user:MockUser)=>(
                    <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </li>
                ))}
            </div>
        </div>
    )
}