import { useState } from "react";
import { assetList } from "../../assets/assetList";
// import { assetList } from "../../assets/assetList";

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
      id="projects"
      className="relative w-full min-h-screen overflow-hidden "
      onMouseMove={handleMouseMove}
      style={{ perspective: "10000px" }}
    >
      {/* Khối 1 - dùng tailwind cho vị trí % và kích thước rem */}
      <div
        className="absolute   mt-20  top-[10%] left-[5%]  opacity-70 w-44 h-44 sm:w-64 sm:h-64 will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="300"
          data-aos="zoom-in"
          className="w-full h-full shadow-2xl  bg-purple-600  rounded-2xl"
        >
          <img src="" alt="" />
        </div>
      </div>

      {/* Khối 2 */}
      <div
        className="absolute mt-20 bottom-[15%] left-[5%] sm:left-[25%] opacity-60 w-44 h-44 sm:w-60 sm:h-60  will-change-transform transition-transform duration-500 ease-out"
        style={{ transform: getRotation(-75) }}
      >
        <div
          data-aos-delay="400"
          data-aos="zoom-in"
          className="w-full h-full shadow-2xl bg-pink-500  rounded-2xl"
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
          className="w-full h-full shadow-2xl bg-yellow-400  rounded-2xl"
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
          className="w-full h-full shadow-2xl bg-green-400  rounded-2xl"
        />
      </div>

      <section className="my-8 text-center mb-12 p-10 px-6 md:px-12">
        <div className="w-full mx-auto py-10 px-4 md:px-8">
          <div data-aos="zoom-in" className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl dark:text-white sm:text-4xl md:text-5xl font-semibold text-red-900 mb-4">
              Dự Án
            </h2>
            <p className="text-base md:text-xl font-medium text-gray-600 dark:text-black">
              Một vài dự án nhỏ mình thực hiện để nâng cao kỹ năng lập trình và
              thiết kế web. Tất cả đều được phát triển bằng Boostrap 5, Html,
              Css, Js
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative flex h-80 flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
            >
              <img
                src={assetList.MilkTeaShop}
                alt=""
                class="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href=""
              >
                Làm trang web bán trà sữa
              </a>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative flex h-80 flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
            >
              <img
                src={assetList.DatMonTaiBan}
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href=""
              >
                Làm trang web đặt món tại bàn
              </a>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative flex h-80 flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
            >
              <img
                src={assetList.foolDev}
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href=""
              >
                Làm trang web foolDev
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DuAn;
