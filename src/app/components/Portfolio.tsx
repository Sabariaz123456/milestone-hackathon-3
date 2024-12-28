import React from "react";

const Portfolio: React.FC = () => {
  return (
    <main>
      <div
        className="transition-rotate bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/IkCkm4f8AJMbnJSPPq_2ErenkiydUEgFthtLPrRoyWoXcIbUCjaVX66e2clnl973nb6kxoZWeu3Hl7R5yIhUPHBCMg=w1000')",
        }}
      >
        <div className="text-center px-6">
          <h3 className="font-extrabold text-4xl py-6">
            <span className="text-gray-800">BEAUTY</span> CITY
          </h3>
          <h6 className="text-2xl text-white mt-2">
            &quot;BeautyCity: Where Elegance Meets Innovation.&quot;
          </h6>
          <p className="text-white text-base leading-relaxed mt-4">
            Welcome to BeautyCity, a vibrant hub where beauty blossoms and
            self-expression knows no bounds. <br />
            In BeautyCity, every corner radiates charm, offering the latest
            trends, timeless elegance, and a sanctuary for self-care. <br />
            BeautyCity isn’t just a place; it’s a lifestyle—a commitment to
            celebrating individuality and embracing the art of looking and
            feeling your best.
          </p>
        </div>

        <div className="p-2 flex justify-center">
          {/* <Image height={500} width={600} 
            src="./Pictures/360_F_607882860_sdl34yRos3YxVL1REdsvLbbCKsOd0uxl.jpg"
            className="h-64 w-64 rounded-full object-cover border-4 border-white  transition-transform transform hover:scale-105`"}
            alt="BeautyCity"
          /> */}
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-2 px-6 rounded"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
