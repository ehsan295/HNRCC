import { Tabs, TabsContent } from "@/components/ui/tabs";
import TaskPage from "./list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";

export default function CRMPage() {
  return (
    <>
      <div className="hidden flex-col md:flex w-full">
        <div className="flex-1 space-y-4 mt-4 w-full">
          <Tabs defaultValue="overview" className="space-y-4" dir="rtl">
            <TabsContent value="overview" dir="rtl" className=" flex">
              <div className="flex flex-col w-full gap-4">
                <TaskPage data={Tasks} title="Overview" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
