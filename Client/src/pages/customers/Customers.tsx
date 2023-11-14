import List from "@/components/crm-components/list/page";
import Tasks from "@/components/crm-components/list/data/tasks.json";
function Customers() {
  return (
    <div className="w-full mt-4">
      <List data={Tasks} title="Customers" />
    </div>
  );
}

export default Customers;
