import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./page/About";
import DuAn from "./page/DuAn";
import Hero from "./page/Hero";
import KyNang from "./page/KyNang";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400); // Thay đổi thời gian delay nếu cần

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" dark:bg-coffee-gradient text-black dark:text-white">
          <Header />
          <Hero />
          <About />
          <KyNang />
          <DuAn />
        </div>
      )}
    </>
  );
}

export default App;
