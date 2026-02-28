import { useEffect, useState } from "react";
import { Links, useParams } from "react-router-dom";
import { getProductsDeteils } from "../../api/products";

const ProductDeteils = () => {
  const [productDeteils, setProductDeteils] = useState(null);
  const [current, setCurrent] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    getProductsDeteils(id).then((data) => {
      setProductDeteils(data);
      setCurrent(0);
    });
  }, [id]);

  if (!productDeteils) return <p>Loading...</p>;

  const images = productDeteils.images || [];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" mx-auto p-4 mt-10">
      <div className="relative w-full mx-auto overflow-hidden rounded-xl shadow-lg flex justify-center">
        <img
          src={images[current]}
          alt="product"
          className="w-full max-w-125 object-cover transition-all duration-500"
        />
        <p>Hello</p>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 rounded-full shadow-md cursor-pointer"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 rounded-full shadow-md cursor-pointer"
        >
          ❯
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-indigo-600 scale-125" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
      <div className="mt-6 ">
        <h2 className="text-2xl font-bold">{productDeteils.title}</h2>
        <p>
          <strong>Category: </strong> {productDeteils.category}
        </p>
        <p>
          <strong>Price: </strong> {productDeteils.price}
        </p>
        <p className="mt-2 text-gray-600">{productDeteils.description}</p>
      </div>
    </div>
  );
};

export default ProductDeteils;
