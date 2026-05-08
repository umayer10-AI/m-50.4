import ModalTask from "@/component/ModalTask";
import TableTask from "@/component/TableTask";
import { deleteUser } from "@/lib/action";
import { getUser } from "@/lib/data";
import React from "react";

const page = async () => {
  const data = await getUser();

  return (
    <div>
      <div className="flex justify-center gap-2 items-center my-5">
        <h2>Data: {data.length}</h2>
        <ModalTask></ModalTask>
      </div>
      <TableTask p={data} deleteUser={deleteUser}></TableTask>
    </div>
  );
};

export default page;
