import { fetchProducts } from "./fetchProducts";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isError, isLoading, data } = useQuery(["products"], fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <>{data && <Product products={data} />}</>;
}

export default App;
