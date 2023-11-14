import List from "./list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";

export default function CRMPage() {
  return (
    <>
      <div className="hidden flex-col md:flex w-full">
        <div className="flex-1 space-y-4 mt-4 w-full">
          <div className="flex flex-col w-full gap-4">
            <List data={Tasks} title="Overview" />
          </div>
        </div>
      </div>
    </>
  );
}
