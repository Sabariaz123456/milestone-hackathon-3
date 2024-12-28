'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import image1 from '../../../../../Pictures/132657894658.jpg';
import image2 from '../../../../../Pictures/skin-care-tips-for-summer.jpg';
import image3 from '../../../../../Pictures/Different-types-of-Shampoo-870x563.jpg';
import image4 from '../../../../../Pictures/Forever-Mesmerizing-Fragrances-in-Pakistan.webp';
import image5 from '../../../../../Pictures/everything-you-need-know-about-fitness-1440x810.jpg';
import image6 from '../../../../../Pictures/light-brown-hair-with-blue-eyes.jpg';

const blogs = [
  {
    id: 1,
    image: image1,
    category: 'BEAUTY CITY',
    title: 'Makeup Magic',
    description: 'Discover the art of makeup and enhance your natural beauty.',
  },
  {
    id: 2,
    image: image2,
    category: 'BEAUTY CITY',
    title: 'Radiant Skincare',
    description: 'Glow like never before with expert skincare tips and routines.',
  },
  {
    id: 3,
    image: image3,
    category: 'BEAUTY CITY',
    title: 'Lustrous Haircare',
    description: 'Revitalize your hair with treatments and styles that shine.',
  },
  {
    id: 4,
    image: image4,
    category: 'BEAUTY CITY',
    title: 'Signature Fragrance',
    description: 'Find your signature scent to leave a lasting impression.',
  },
  {
    id: 5,
    image: image5,
    category: 'BEAUTY CITY',
    title: 'Elegant Fitness',
    description: 'Achieve wellness and beauty with tailored fitness regimens.',
  },
  {
    id: 6,
    image: image6,
    category: 'BEAUTY CITY',
    title: 'Timeless Glamour',
    description: 'Embrace timeless elegance and charm with expert tips.',
  },
];

type Blog = {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
};

const Page: React.FC = () => {
  const { id } = useParams();
  const [filteredProduct, setFilteredProduct] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      const product = blogs.find((item) => item.id === Number(id));
      setFilteredProduct(product || null);
    }
  }, [id]);

  if (!filteredProduct) {
    return <div>No blog found for the given ID.</div>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt={filteredProduct.title}
              src={filteredProduct.image}
              height={500}
              width={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {filteredProduct.title}
            </h1>
            <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              {filteredProduct.category}
            </h3>
            <p className="mb-8 leading-relaxed">{filteredProduct.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
