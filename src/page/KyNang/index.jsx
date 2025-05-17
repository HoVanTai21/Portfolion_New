import { skillList } from "../../assets/assetList";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function KyNang() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);
  return (
    <section className="my-8 mb-12 p-10 px-4 md:px-10">
      <h2
        data-aos="fade-right"
        data-aos-delay="300"
        className="text-3xl dark:text-white text-center md:text-start sm:text-4xl md:text-5xl font-semibold text-red-900 mb-10"
      >
        Các kỹ năng của tôi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full overflow-hidden">
        {skillList.map((item) =>
          item.isNested ? (
            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              key={item.id}
              className={`${item.colSpan} grid gap-4`}
            >
              <a
                href=""
                className="group relative overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-600/25 to-gray-800/5">
                  <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {item.name}
                  </h3>
                </div>
              </a>
              <div
                data-aos="zoom-in-up"
                data-aos-delay="600"
                className="grid gap-4 grid-cols-2"
              >
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href=""
                    className="group relative overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={child.image}
                      alt={child.name}
                      className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-600/25 to-gray-800/5">
                      <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        {child.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              data-aos="zoom-in-up"
              key={item.id}
              href=""
              className={`group relative overflow-hidden rounded-lg px-4 pb-4 pt-40 ${item.colSpan}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute overflow-hidden inset-0 bg-gradient-to-b from-gray-600/25 to-gray-800/5">
                <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {item.name}
                </h3>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default KyNang;
