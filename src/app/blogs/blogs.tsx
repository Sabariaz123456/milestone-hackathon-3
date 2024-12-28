// import Image from "next/image";
// import image1 from "../../../../Pictures/132657894658.jpg";
// import image2 from "../../../../Pictures/skin-care-tips-for-summer.jpg";
// import image3 from "../../../../Pictures/Different-types-of-Shampoo-870x563.jpg";
// import image4 from "../../../../Pictures/Forever-Mesmerizing-Fragrances-in-Pakistan.webp";
// import image5 from "../../../../Pictures/everything-you-need-know-about-fitness-1440x810.jpg";
// import image6 from "../../../../Pictures/light-brown-hair-with-blue-eyes.jpg";

// const blogs = [
//   {
//     image: image1,
//     category: "BEAUTY CITY",
//     title: "Makeup Magic",
//     description: "Discover the art of makeup and enhance your natural beauty.",
//   },
//   {
//     image: image2,
//     category: "BEAUTY CITY",
//     title: "Radiant Skincare",
//     description: "Glow like never before with expert skincare tips and routines.",
//   },
//   {
//     image: image3,
//     category: "BEAUTY CITY",
//     title: "Lustrous Haircare",
//     description: "Revitalize your hair with treatments and styles that shine.",
//   },
//   {
//     image: image4,
//     category: "BEAUTY CITY",
//     title: "Signature Fragrance",
//     description: "Find your signature scent to leave a lasting impression.",
//   },
//   {
//     image: image5,
//     category: "BEAUTY CITY",
//     title: "Elegant Fitness",
//     description: "Achieve wellness and beauty with tailored fitness regimens.",
//   },
//   {
//     image: image6,
//     category: "BEAUTY CITY",
//     title: "Timeless Glamour",
//     description: "Embrace timeless elegance and charm with expert tips.",
//   },
// ];

// export default function Blog() {
//   return (
//     <section className="relative min-h-screen bg-pink-100 p-6">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-pink-600">
//             Welcome to <span className="text-gray-800">Beauty City Blogs</span>
//           </h1>
//           <p className="text-lg text-gray-700 mt-4">
//             Explore our curated beauty insights, trends, and tips.
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="p-4 md:w-1/3">
//               <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//                 <Image
//                   className="w-full h-48 object-cover"
//                   src={blog.image}
//                   alt={blog.title}
//                   width={400}
//                   height={300}
//                 />
//                 <div className="p-6">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
//                     {blog.category}
//                   </h2>
//                   <h1 className="text-xl font-semibold text-gray-800 mb-3">
//                     {blog.title}
//                   </h1>
//                   <p className="leading-relaxed mb-4 text-gray-600">{blog.description}</p>
//                   <div className="flex items-center justify-between">
//                     <a
//                       className="text-pink-500 inline-flex items-center font-medium hover:text-pink-700 transition-colors"
//                       href="#"
//                     >
//                       Learn More
//                       <svg
//                         className="w-4 h-4 ml-2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </a>
//                     <div className="text-gray-500 text-sm">
//                       <span>1.2K views</span> &bull; <span>6 comments</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import image1 from "../../../Pictures/132657894658.jpg";
import image2 from "../../../Pictures/skin-care-tips-for-summer.jpg";
import image3 from "../../../Pictures/Different-types-of-Shampoo-870x563.jpg";
import image4 from "../../../Pictures/Forever-Mesmerizing-Fragrances-in-Pakistan.webp";
import image5 from "../../../Pictures/everything-you-need-know-about-fitness-1440x810.jpg";
import image6 from "../../../Pictures/light-brown-hair-with-blue-eyes.jpg";
import Link from "next/link";

const blogs = [
  {
    id:1,
    image: image1,
    category: "BEAUTY CITY",
    title: "Makeup Magic",
    description: "Discover the art of makeup and enhance your natural beauty.",
  },
  {
    id:2,
    image: image2,
    category: "BEAUTY CITY",
    title: "Radiant Skincare",
    description: "Glow like never before with expert skincare tips and routines.",
  },
  {
    id:3,
    image: image3,
    category: "BEAUTY CITY",
    title: "Lustrous Haircare",
    description: "Revitalize your hair with treatments and styles that shine.",
  },
  {
    id:4,
    image: image4,
    category: "BEAUTY CITY",
    title: "Signature Fragrance",
    description: "Find your signature scent to leave a lasting impression.",
  },
  {
    id:5,
    image: image5,
    category: "BEAUTY CITY",
    title: "Elegant Fitness",
    description: "Achieve wellness and beauty with tailored fitness regimens.",
  },
  {
    id:6,
    image: image6,
    category: "BEAUTY CITY",
    title: "Timeless Glamour",
    description: "Embrace timeless elegance and charm with expert tips.",
  },
];

export default function Blog() {
  return (
    <section className="relative min-h-screen bg-pink-100 p-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600">
            Welcome to <span className="text-gray-800">Beauty City Blogs</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Explore our curated beauty insights, trends, and tips.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog, index) =>{
            console.log("blog Data===> ", blog);
            
            return  (
              <div key={index} className="p-4 md:w-1/3">
                {/* Removed invalid Post component reference */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                  <Image
                    className="w-full h-48 object-cover"
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
                      {blog.category}
                    </h2>
                    <h1 className="text-xl font-semibold text-gray-800 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-4 text-gray-600">{blog.description}</p>
                    <div className="flex items-center justify-between">
                     <Link href={`/post/${blog.id}`}> 
                     
                    
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                     
  
                     </Link>
                      <div className="text-gray-500 text-sm">
                        <span>1.2K views</span> &bull; <span>6 comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}




{/* <a
className="text-pink-500 inline-flex items-center font-medium hover:text-pink-700 transition-colors"
href="#"
> */}