import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "/images/products/man1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "/images/products/man2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "/images/products/women1.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/products/women2.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Home() {
  return (
    <Layout
      title="Baratillo Cusco Online - Página de Compra y Venta"
      description="Bienvenidos a Baratillo Cusco Online. Sitio web de compra y venta en General"
    >
      <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-7xl">
                Baratillo Cusco Online
              </h1>
              <p className="mt-4 text-xl text-white">
                El mejor sitio web de compra y venta de artículos en general.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/products/portada1.jpg"
                            alt=""
                            width={180}
                            height={300}
                            layout="intrinsic"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Baratillo Cusco Autos</span>
            <span className="block text-yellow-400">
              Compra y Venta de Vehículos.
            </span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco Autos.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500"
              >
                Ver Más...
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={350}
                    height={450}
                    layout="intrinsic"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h2 className="mt-4 text-gray-900 text-base font-semibold">
                  {product.name}
                </h2>
                <p className="mt-1 text-2xl font-bold text-red-400">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Baratillo Cusco Motos</span>
            <span className="block text-green-400">
              Compra y Venta de Motos.
            </span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco Motos.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-600"
              >
                Ver Más...
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={350}
                    height={450}
                    layout="intrinsic"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h2 className="mt-4 text-gray-900 text-base font-semibold">
                  {product.name}
                </h2>
                <p className="mt-1 text-2xl font-bold text-red-400">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
