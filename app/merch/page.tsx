"use client";

type Product = {
  name: string;
  price: string;
};

const products: Product[] = [
  {
    name: "IE Nightmares Hoodie",
    price: "$60",
  },
  {
    name: "IE Nightmares Jersey",
    price: "$75",
  },
  {
    name: "IE Nightmares Shorts",
    price: "$40",
  },
  {
    name: "IE Nightmares T-Shirt",
    price: "$30",
  },
  {
    name: "IE Nightmares Hat",
    price: "$35",
  },
  {
    name: "Arrogant Mindz Apparel",
    price: "Coming Soon",
  },
];

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}

      <section className="bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            TEAM STORE
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Official IE Nightmares merchandise.
          </p>

        </div>

      </section>

      {/* Products */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.name}
              className="card overflow-hidden"
            >

              <div className="flex h-80 items-center justify-center bg-zinc-800">

                <span className="text-gray-500 text-lg">
                  Product Image
                </span>

              </div>

              <div className="p-8">

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-3 text-cyan-400 text-xl font-bold">
                  {product.price}
                </p>

                <button className="btn-primary mt-8 w-full">
                  Coming Soon
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}