import Head from "next/head";
import Image from "next/image";
import image2 from "../../../Pictures/360_F_607882860_sdl34yRos3YxVL1REdsvLbbCKsOd0uxl.jpg";

export default function AuthorCard() {
  return (
    <>
      <Head>
        <title>Author Cards</title>
        <meta name="description" content="Author Cards Example using Tailwind CSS in Next.js" />
      </Head>

      <div className="relative min-h-screen bg-gradient-to-r from-teal-500 to-coral-500 p-6">
        <div className="absolute top-0 left-0 p-6 w-full">
          {/* Author Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full text-left mb-6 max-w-lg mx-auto transition-transform transform hover:scale-105">
            {/* Author Card Content */}
            <div className="flex items-start gap-6">
              {/* Author Image */}
              <Image
                className="w-24 h-32 rounded-full border-4 border-teal-500 shadow-xl"
                src={image2}
                alt="Jane Smith Photo"
                height={500}
                width={400}
              />

              {/* Author Info */}
              <div>
                <h2 className="text-3xl font-semibold text-teal-700 hover:text-teal-900 transition-colors">
                  Saba Muhammad Riaz
                </h2>
                <p className="text-gray-700 mt-2 mb-4">
                  &quot;Technology is my passion, and coding is my craft. From building dynamic websites to developing robust applications, I enjoy bringing ideas to life with elegant, reliable code.&quot;
                </p>

                {/* Social Links */}
                <div className="flex gap-6">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-700 transition-colors"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
