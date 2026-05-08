"use server"

import { revalidatePath } from "next/cache"

export const createUser = async (formData) => {

    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)

    // const res = await fetch(`http://localhost:5000/user`,{
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     body: JSON.stringify(newUser)
    // })
    // const data = await res.json()
    // // if(data.deletedCount > 0){
    // //     revalidatePath("/user")
    // // }
    // return data
}

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