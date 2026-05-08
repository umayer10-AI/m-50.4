"use server"

import { revalidatePath } from "next/cache"

export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        revalidatePath("/user")
    }
    return data
}