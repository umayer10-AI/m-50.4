import TableTask from '@/component/TableTask';
import { getUser } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            <h2>Data: {data.length}</h2>
            <TableTask p={data}></TableTask>
        </div>
    );
};

export default page;