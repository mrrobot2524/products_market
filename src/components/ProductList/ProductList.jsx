import { useEffect } from "react";
import { useState } from "react";
import {
  getByCategoryProducts,
  getProducts,
  sortByCategoryProducts,
} from "../../api/products";
import ProductItem from "../ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const cat = searchParams.get("cat");

  useEffect(() => {
    setLoading(true);
    if (!cat) {
      getProducts()
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch((e) => setError(e));

      getByCategoryProducts().then((data) => {
        setCategory(data);
        setLoading(false);
      });
    } else {
      sortByCategoryProducts(cat).then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
    }
  }, [cat]);

  const categoriesMap = categories.reduce((acc, cur) => {
    acc[cur.slug] = cur;
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          category={categoriesMap[product.category]}
        />
      ))}
    </div>
  );
};

export default ProductList;
