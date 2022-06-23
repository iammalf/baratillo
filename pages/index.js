import Image from "next/image";
import Hero from "../components/Hero";

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
      <Hero />

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

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Baratillo Cusco Departamentos</span>
            <span className="block text-red-400">Venta y Alquileres.</span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco sobre venta y
            alquiler de Departamentos.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-600"
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
            <span className="block">Baratillo Cusco Celulares</span>
            <span className="block text-pink-400">Venta de Celulares.</span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco sobre venta
            celulares.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600"
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
            <span className="block">Baratillo Cusco Muebles</span>
            <span className="block text-purple-500">
              Venta de Muebles en General.
            </span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco sobre venta
            Muebles.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600"
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
            <span className="block">Baratillo Cusco Inmubles y Terrenos</span>
            <span className="block text-blue-500">
              Venta de Inmubles y Terrenos en Cusco.
            </span>
          </h2>
          <p className="text-base font-semibold">
            Estas son las últimas publicaciones de Baratillo Cusco sobre venta
            de Inmubles y Terrenos.
          </p>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
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
