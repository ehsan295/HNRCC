import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import tasks from "./data/tasks.json";

export default function TaskPage() {
  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
}
