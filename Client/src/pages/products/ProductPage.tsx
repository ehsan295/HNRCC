import data from "./product-list/data/tasks.json";
import ProductList from "./product-list/page";
function ProductPage() {
  return (
    <div className="w-full mt-4">
      <ProductList data={data} />
    </div>
  );
}

export default ProductPage;
