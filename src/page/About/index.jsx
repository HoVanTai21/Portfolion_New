import SVG1 from "../../assets/VectorTeamWork (2).svg";
import SVG2 from "../../assets/VectorTeamWork (3).svg";
import SVG3 from "../../assets/VectorProjectManager.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <section className="my-8 mb-12 p-10 px-6 md:px-12">
      <h2
        data-aos="fade-right"
        className="text-3xl dark:text-white text-center md:text-start sm:text-4xl md:text-5xl font-semibold text-red-900 mb-10"
      >
        Công nghệ và kỹ năng của tôi
      </h2>

      <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 gap-4">
        {/* Khối giới thiệu */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="order-1 md:order-2 p-2 md:p-4 text-center md:text-left"
        >
          <h3 className="text-xl dark:text-slate-700 text-blue-700 font-medium my-4">
            Giới thiệu nhanh
          </h3>
          <hr
            data-aos="fade-right"
            className="h-1 w-1/3 bg-black border-none  mx-auto md:mx-0 md:ml-0 md:mr-auto mb-6 rounded shadow-lg"
          />

          <p className="text-base md:text-xl font-medium text-gray-600 dark:text-black">
            Mình là một lập trình viên Frontend yêu thích React và Vite, đồng
            thời có kinh nghiệm với Node.js và MySQL. Ngoài kỹ thuật, mình còn
            quan tâm đến kỹ năng teamwork, giao tiếp và quản lý thời gian. Khi
            rảnh, mình thích đọc sách, nghe nhạc và tìm hiểu các công nghệ mới.
          </p>
        </div>

        {/* Khối hình ảnh */}
        <div className="grid grid-flow-dense gap-2 order-2 md:order-1 overflow-hidden">
          <div
            data-aos="fade-right"
            className="col-span-1 bg-blue-100 p-2 md:p-4 rounded-lg"
          >
            <img
              className="w-full h-48 object-contain"
              src={SVG1}
              alt="Teamwork"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="col-span-1 bg-green-100 p-2 md:p-4 rounded-lg"
          >
            <img
              className="w-full h-48 object-contain"
              src={SVG2}
              alt="Teamwork 2"
            />
          </div>
          <div
            data-aos="fade-right"
            className="col-span-2 bg-yellow-100 p-2 md:p-4 rounded-lg"
          >
            <img
              className="w-full h-48 object-contain"
              src={SVG3}
              alt="Project Manager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
