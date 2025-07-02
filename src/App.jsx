import { useEffect, useState } from "react";

const ProductItems = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};
function App() {
  const [products, setProducts] = useState([]);

  const fetchApi = async () => {
    const url = await fetch("https://dummyjson.com/products?limit=200");
    const jsonData = await url.json();
    setProducts(jsonData.products);
  };

  console.log(products);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="App">Pagination</div>
      <div>
        {products.map((p) => (
          <ProductItems key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </>
  );
}

export default App;
