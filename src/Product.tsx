export default function Product({ products }: any) {
  console.log("from hereree", products);
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
