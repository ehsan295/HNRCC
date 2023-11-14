import TaskPage from "@/components/crm-components/list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";
function ProductPage() {
  return (
    <div className="w-full mt-6">
      <TaskPage data={Tasks} title="Products" />
    </div>
  );
}

export default ProductPage;
