export default function MenuItem() {
  return (
    <div className="bg-gray-200 rounded-lg p-4 text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        {" "}
        lorem impasj kdjjkbds a asas as kas fkbaksf{" "}
      </p>
      <button className="bg-primary mt-4 rounded-full px-8 py-2 text-white group  hover:shadow-md hover:shadow-black/25 transition-all">
        Add to Cart $12
      </button>
    </div>
  );
}
