import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Avatarimg from "../../assets/Avatar.jpg";

function Hero() {
  const textArray = ["Front-end Developer", "UX/UI Designer", "Creative Coder"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const socialIcons = [
    { icon: "fa-brands fa-github", color: "text-black" },
    { icon: "fa-regular fa-envelope", color: "text-yellow-900" },
    { icon: "fa-brands fa-facebook", color: "text-blue-700" },
    { icon: "fa-brands fa-instagram", color: "text-pink-700" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // tùy chỉnh thời gian animation nếu thích
      once: false, // chỉ chạy animation 1 lần khi scroll đến
    });
  }, []);

  useEffect(() => {
    const currentText = textArray[index];
    const updatedText = currentText.substring(0, charIndex);
    setText(updatedText);

    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex === currentText.length) {
          setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % textArray.length);
        } else {
          setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <>
      {/* Gradient Squares Background */}
      <div id="home" className="absolute inset-0 z-1 overflow-hidden">
        {/* Square 1 */}
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72  opacity-50 rounded-[20%] left-[3%] top-[-21%] animate-moveX">
          <div
            data-aos-delay="800"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500  rounded-3xl  "
          />
        </div>
        {/* Square 2 */}
        <div className="absolute w-44 h-44 sm:w-96 sm:h-96 opacity-40 rounded-[20%] right-[-5%] top-[-12%] animate-moveX-slow">
          <div
            data-aos-delay="700"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-pink-500 to-yellow-500  rounded-3xl  "
          />
        </div>
        {/* Square 3 */}
        <div className="absolute w-24 h-24 sm:w-48 sm:h-48  opacity-20 rounded-[20%] left-[50%] top-[10%] animate-moveX-fast">
          <div
            data-aos-delay="500"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-purple-800 to-green-500  rounded-3xl  "
          />
        </div>
        <div className="absolute w-24 h-24  sm:w-48 sm:h-48  opacity-20 rounded-[20%] left-[20%] top-[20%] animate-moveX-fast">
          <div
            data-aos-delay="400"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-purple-800 to-green-500  rounded-3xl  "
          />
        </div>

        <div className="absolute w-44 h-44 sm:w-80 sm:h-80  opacity-20 rounded-[20%] right-10 bottom-0 animate-moveX-fast">
          <div
            data-aos-delay="400"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-pink-900 to-green-700  rounded-3xl  "
          />
        </div>
        <div className="absolute w-24 h-24 sm:w-48 sm:h-48  opacity-20 rounded-[20%] left-0 bottom-0 animate-moveX-fast">
          <div
            data-aos-delay="300"
            data-aos="zoom-in"
            className="w-full h-full bg-gradient-to-tr from-pink-700 to-purple-700  rounded-3xl  "
          />
        </div>
      </div>
      <section
        id="home"
        className="flex-1 z-2 flex flex-col-reverse md:flex-row  px-6 sm:px-10 md:px-16 py-12 mt-8 mb-10"
      >
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-start">
          <h1
            data-aos="fade-right"
            className="text-3xl dark:text-white sm:text-4xl md:text-5xl font-semibold text-red-900 mb-4"
          >
            Xin chào, tôi là
          </h1>
          <span
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-red-900 dark:text-white text-3xl font-bold block mb-2"
          >
            HỒ VĂN TÀI
          </span>

          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-2xl font-semibold text-indigo-600 mb-4 dark:text-slate-500"
          >
            Và là một {text}
            <span className=" animate-pulse">|</span>
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="600"
            className="text-base md:text-xl pb-4 mb-4 font-medium text-gray-600 dark:text-black"
          >
            Chào bạn, tôi là Hồ Văn Tài — lập trình viên đam mê công nghệ và
            thiết kế. Tôi có kinh nghiệm vững về Front-end, UX/UI Design, cùng
            với ReactJS và NodeJS. Tôi luôn tìm kiếm cơ hội thử thách bản thân
            qua những dự án mới, không ngừng học hỏi và nâng cao kỹ năng. Ngoài
            công việc, tôi yêu thích sáng tạo giải pháp thiết thực, tối ưu trải
            nghiệm người dùng và nâng cao giá trị sản phẩm.
          </p>

          {/* icon */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="grid grid-cols-4  gap-x-4"
          >
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                className="grid place-items-center bg-stone-200 py-3 rounded-lg shadow-xl border border-transparent cursor-pointer transition duration-500 hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:outline-black hover:translate-y-2"
              >
                <i className={`${item.icon} text-4xl ${item.color}`}></i>
              </a>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 ">
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              href="#"
              className="text-red-900 dark:text-white text-lg font-semibold transition-all transform hover:scale-110  hover:text-zinc-200 dark:hover:text-zinc-900  backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.26)] to-transparent rounded-md py-4 px-10 shadow hover:shadow-zinc-400 dark:hover:shadow-zinc-900 duration-600 "
            >
              Liên hệ
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div
          data-aos="zoom-in"
          className="md:w-1/2 flex justify-center mb-6 md:mb-0"
        >
          <img
            src={Avatarimg}
            alt="Profile"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
