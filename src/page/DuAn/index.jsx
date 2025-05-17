import { useState } from "react";

function DuAn() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const getRotation = (factor = 140) => {
    const x =
      ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) *
      factor;
    const y =
      -((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * factor;

    return `rotateX(${x}deg) rotateY(${y}deg)`;
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden "
      onMouseMove={handleMouseMove}
      style={{ perspective: "10000px" }}
    >
      {/* Khối 1 - dùng tailwind cho vị trí % và kích thước rem */}
      <div
        className="absolute mt-20  top-[10%] left-[5%]  opacity-70 w-44 h-44 sm:w-64 sm:h-64 will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="300"
          data-aos="zoom-in"
          className="w-full h-full  bg-purple-600  rounded-2xl"
        />
      </div>

      {/* Khối 2 */}
      <div
        className="absolute mt-20 bottom-[15%] left-[25%] opacity-60 w-44 h-44 sm:w-60 sm:h-60 will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="400"
          data-aos="zoom-in"
          className="w-full h-full bg-pink-500  rounded-2xl"
        />
      </div>

      {/* Khối 3 */}
      <div
        className="absolute mt-20 top-[50%] left-[50%] opacity-50 w-44 h-44  will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="500"
          data-aos="zoom-in"
          className="w-full h-full bg-yellow-400  rounded-2xl"
        />
      </div>

      {/* Khối 4 */}
      <div
        className="absolute mt-20 top-[5%] right-[5%] opacity-60  w-64 h-64 will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="600"
          data-aos="zoom-in"
          className="w-full h-full bg-green-400  rounded-2xl"
        />
      </div>

      {/* Nội dung section */}
      <section className="relative  max-w-screen-md mx-auto  sm:px-10 py-10 text-white">
        <h1 className="text-3xl dark:text-white sm:text-4xl md:text-5xl font-semibold text-red-900 mb-4">
          Dự Án
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          libero dignissimos reiciendis sunt aspernatur...
        </p>
      </section>
    </div>
  );
}

export default DuAn;
