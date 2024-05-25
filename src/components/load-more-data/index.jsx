import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const url = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`;
      const response = await fetch(url);
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setIsLoading(false);
      }
      console.log(result.products);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  return (
    <div className="lmd-container">
      <div className="lmd-wrapper">
        <div className="lmd-card-wrapper">
          {products.map((product) => (
            <div className="lmd-card-container" key={product.id}>
              <div className="lmd-head">
                <img src={product.thumbnail} alt="product" />
              </div>
              <div className="lmd-body">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lmd-btn-wrapper">
          {isLoading ? <div className="loader "></div> : ""}
          <button disabled={disableBtn} onClick={() => setCount((prevCount) => prevCount + 1)}>
            get data
          </button>
          {disableBtn ? <p>You have reached to 100 products</p> : null}
        </div>
      </div>
    </div>
  );
}
