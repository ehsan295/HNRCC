import { columns } from "@/components/crm-components/list/components/columns";
import { DataTable } from "@/components/crm-components/list/components/data-table";
import tasks from "@/components/crm-components/list/data/tasks.json";

export default function TaskPage() {
  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
}
