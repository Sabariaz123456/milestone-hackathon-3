import Head from "next/head";
import React from "react";

type Category = {
  icon: string;
  title: string;
  desc: string;
};

const categories: Category[] = [
  {
    icon: "fas fa-spa",
    title: "Spa & Wellness",
    desc: "Relax and rejuvenate with luxurious spa and wellness services.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Makeup & Artistry",
    desc: "Discover the latest trends in makeup and artistic beauty.",
  },
  {
    icon: "fas fa-heart",
    title: "Self-Care",
    desc: "Embrace the art of self-care with premium beauty products.",
  },
  {
    icon: "fas fa-gem",
    title: "Jewelry & Accessories",
    desc: "Enhance your elegance with exquisite jewelry and accessories.",
  },
  {
    icon: "fas fa-cut",
    title: "Hair Styling",
    desc: "Explore hairstyles that define your personality and beauty.",
  },
  {
    icon: "fas fa-camera-retro",
    title: "Photography & Glamour",
    desc: "Capture your best moments with professional photography.",
  },
];

type CategoryCardProps = {
  icon: string;
  title: string;
  desc: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, desc }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 w-full text-left mb-6 mx-auto transition-transform transform hover:scale-105">
    <div className="p-4 rounded-full inline-block mb-4 bg-pink-100">
      <i className={`${icon} text-pink-500 text-3xl`}></i>
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-700 mt-2">{desc}</p>
  </div>
);

const BeautyCity: React.FC = () => {
  return (
    <>
      <Head>
        <title>Welcome to Beauty City</title>
        <meta
          name="description"
          content="Explore Beauty City's enchanting categories tailored for elegance and style."
        />
      </Head>

      <div className="relative min-h-screen bg-pink-100 p-6">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-pink-600">
              Welcome to <span className="text-gray-800">Beauty City</span>
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Discover a world where elegance meets innovation.
            </p>
          </div>

          {/* Categories Flexbox Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                desc={category.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyCity;
