export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 flex items-center justify-center">
      <div className="text-center px-6 max-w-3xl">
        {/* Title & Tagline */}
        <h1 className="text-6xl font-extrabold tracking-tight">
          Welcome to <span className="text-yellow-400">OpenMarts</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Explore a world of exclusive products, carefully curated for you at unbeatable prices. 
          Shop smarter, live better.
        </p>
      </div>
    </div>
  );
}
