import TaskPage from "@/components/crm-components/list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";
function ProductPage() {
  return (
    <div className="m-6 w-4/5">
      <TaskPage data={Tasks} title="Products" />
    </div>
  );
}

export default ProductPage;
