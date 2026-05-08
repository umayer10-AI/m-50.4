import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)

    return (
        <div className='rounded-xl shadow-lg space-y-2 shadow-cyan-500 w-fit p-5 m-10'>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Role: {data.role}</h2>
        </div>
    );
};

export default page;