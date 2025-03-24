import ProductCard from "./productCard";
import product1 from "../assets/image/laptop.png";
import product2 from "../assets/image/smartwatch.png";
import product3 from "../assets/image/mechanicalKeyboard.png";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 600,
    image: product1,
    desc: "Power up your productivity with this sleek and powerful laptop, featuring a high-performance Intel Core i9 processor, 32GB RAM, and a 512GB SSD for seamless multitasking. The stunning 15.6-inch Full HD display offers crisp visuals, perfect for work, entertainment, and gaming. With an ultra-slim design and long-lasting battery life, this laptop is your ultimate companion for both office and personal use.",
  },
  {
    id: 2,
    name: "Digital Smartwatch",
    price: 200,
    image: product2,
    desc: "Stay connected and track your health with this stylish smartwatch featuring a vibrant AMOLED display, heart rate monitoring, and multiple sports modes. Designed for everyday wear, it boasts an IP68 water-resistant rating and a long-lasting battery. Get notifications, monitor sleep, and control your music directly from your wrist with a sleek and modern design.",
  },
  {
    id: 3,
    name: "Fully Mechanical Keyboard",
    price: 100,
    image: product3,
    desc: "Elevate your typing and gaming experience with this RGB mechanical keyboard, featuring tactile switches for precise keystrokes and customizable backlighting. Built with a durable aluminum frame, it ensures longevity and stability. Equipped with anti-ghosting technology and programmable keys, this keyboard is perfect for gamers and professionals alike.",
  },
];

export default function ProductList({ onSelect }) {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <ProductCard product={product} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
