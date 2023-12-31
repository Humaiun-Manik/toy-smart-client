import { useEffect, useState } from "react";
import Product from "../../../components/shared/product/Product";
import Loading from "../../../components/shared/loading/Loading";

const Products = () => {
  const [activeTab, setActiveTab] = useState("feature");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/productsByCategory?category=${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
          setLoading(false);
        }
      });
  }, [activeTab]);

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">We Love Trends</h2>
        <p className="text-[#70be4e] text-lg">Featured Products</p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="my-10 ">
          <div className="flex flex-col md:flex-row justify-center">
            <button
              onClick={() => {
                setActiveTab("feature");
                setLoading(true);
              }}
              className={
                activeTab === "feature"
                  ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                  : "py-2 px-7 text-lg"
              }
            >
              Featured
            </button>
            <button
              onClick={() => {
                setActiveTab("best-sellers");
                setLoading(true);
              }}
              className={
                activeTab === "best-sellers"
                  ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                  : "py-2 px-7 text-lg"
              }
            >
              Best Sellers
            </button>
            <button
              onClick={() => {
                setActiveTab("new-arrivals");
                setLoading(true);
              }}
              className={
                activeTab === "new-arrivals"
                  ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                  : "py-2 px-7 text-lg"
              }
            >
              New Arrivals
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
