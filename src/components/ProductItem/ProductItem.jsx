import { Link, useSearchParams } from "react-router-dom";

const ProductItem = ({ product, category }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get("cat");
  return (
    <>
      <div className="w-full max-w-87.5 border-2 border-y-teal-700 rounded-2xl hover:shadow-2xl transition-all bg-gray-50">
        <div className="flex justify-center items-center">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="p-2">
          <Link
            to={`/products/${product.id}`}
            className="text-xl text-blue-900 font-bold pt-4 pb-4"
          >
            {product.title}
          </Link>
          <p className="text-xl">{product.description}</p>
          <div>
            <strong>Category: </strong>
            <button
              className={`border py-0.2 px-3 rounded-2xl cursor-pointer transition border-blue-500 ${category?.slug === currentCat ? " bg-blue-100" : " hover:bg-blue-100"}`}
              onClick={() =>
                currentCat === category?.slug
                  ? setSearchParams((prev) => prev.delete("cat"))
                  : setSearchParams({ cat: category.slug })
              }
            >
              {" "}
              {category?.name}
            </button>
          </div>
          <p>Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
