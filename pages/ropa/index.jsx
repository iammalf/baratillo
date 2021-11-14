import Image from "next/image";
import Layout from "../../components/Layout";

const callouts = [
  {
    name: "Ropa para Mujer",
    description: "Work from home accessories",
    imageSrc: "/images/products/women1.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Ropa para Hombre",
    description: "Journals and note-taking",
    imageSrc: "/images/products/man1.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Ropa para niños",
    description: "Daily commute essentials",
    imageSrc: "/images/products/women2.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "/images/products/women1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "/images/products/women2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "/images/products/man1.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "/images/products/man2.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function index() {
  return (
    <Layout
      title="Baratillo Cusco Online Motos Venta"
      description="Baratillo Cusco Motos Venta. Conozca las últimas publicaciones en Baratillo Cusco"
    >
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Baratillo Cusco Online
                  </span>{" "}
                  <span className="block text-green-500 xl:inline">
                    Venta de Ropa para Hombre y Mujer
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anuncios clasificados de Venta de Ropa para Hombre y Mujer
                  dentro de la cuidad del Cusco. Estos son los avisos más
                  recientes publicados sobre departamentos en Baratillo Cusco
                  Online.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Deseo Publicar
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/page/baratillo-cusco-motos.jpg"
            alt="Baratillo cusco Motos Venta y Alquiler"
            height={800}
            width={800}
            layout="intrinsic"
          />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Categorías
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      width={500}
                      height={900}
                      layout="intrinsic"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h2 className="text-lg mr-auto font-semibold cursor-pointer text-red-500 hover:text-purple-500 truncate">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h2>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Últimas Publicaciones
          </h2>

          <div className=" mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={500}
                    height={800}
                    layout="intrinsic"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-red-500 whitespace-nowrap mr-3">
                    4.60
                  </span>
                  <span className="mr-2 text-red-500">India</span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer font-semibold text-gray-900 hover:text-purple-500 truncate ">
                    {product.name}
                  </h2>
                  <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    INSTOCK
                  </div>
                </div>

                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {product.price}
                </p>

                <div className="lg:flex  py-4  text-sm text-gray-600">
                  <div className="flex-1 inline-flex items-center  mb-3">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul className="flex flex-row justify-center items-center space-x-2">
                        <li className="">
                          <span className="block p-1 border-2 border-blue-400 hover:border-blue-600 rounded-full transition ease-in duration-300">
                            <a
                              href="#blue"
                              className="block w-3 h-3 bg-blue-600 rounded-full"
                            ></a>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-yellow-400 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                            <a
                              href="#yellow"
                              className="block w-3 h-3  bg-yellow-400 rounded-full"
                            ></a>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-red-300 hover:border-red-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#red"
                              className="block w-3 h-3  bg-red-500 rounded-full"
                            ></a>
                          </span>
                        </li>
                        <li className="">
                          <span className="block p-1 border-2 border-green-300 hover:border-green-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#green"
                              className="block w-3 h-3  bg-green-500 rounded-full"
                            ></a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1 inline-flex items-center mb-3">
                    <span className="text-secondary whitespace-nowrap mr-3">
                      Tallas
                    </span>
                    <div className="cursor-pointer text-gray-400 ">
                      <span className="hover:text-purple-500 p-1 py-0">S</span>
                      <span className="hover:text-purple-500 p-1 py-0">M</span>
                      <span className="hover:text-purple-500 p-1 py-0">L</span>
                      <span className="hover:text-purple-500 p-1 py-0">XL</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                    <span>Add Cart</span>
                  </button>
                  <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
