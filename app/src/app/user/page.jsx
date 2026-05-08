import TableTask from '@/component/TableTask';
import { deleteUser } from '@/lib/action';
import { getUser } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            <div>
                <h2>Data: {data.length}</h2>
                
            </div>
            <TableTask p={data} deleteUser={deleteUser}></TableTask>
        </div>
    );
};

export default page;