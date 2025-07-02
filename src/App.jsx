import { useEffect, useState } from "react";
import "./App.css";

const ProductItems = ({ image, title }) => {
  return (
    <div className="Products-list">
      <img
        src={image}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
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
      <div className="Products">
        {products.slice(0, 10).map((p) => (
          <ProductItems key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </>
  );
}

export default App;
