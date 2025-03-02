import { useRef, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ProductComponent from "./components/ProductComponent";
import './App.css'

function App() {
  const sliderRef = useRef(null);
  const scrollAmount = 300;
  const destaqueRef = useRef(null);
  const [popUpVisible, setPopUpVisible] = useState(true);

  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (destaqueRef.current) {
        event.preventDefault();
        destaqueRef.current.scrollBy({
          left: event.deltaY < 0 ? -200 : 200,
          behavior: "smooth",
        });
      }
    };

    const destaqueDiv = destaqueRef.current;
    if (destaqueDiv) {
      destaqueDiv.addEventListener("wheel", handleWheelScroll);
    }
    return () => {
      if (destaqueDiv) {
        destaqueDiv.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  const scroll = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "auto" });
        }
      }, 5000);
    }
  };

  useEffect(() => {
    const interval = setInterval(scroll, 5000);
    return () => clearInterval(interval);
  }, []);

  function popUpVisibillity() {
    setPopUpVisible(false)
  };

  return (
    <div>
      <NavBar />
      {popUpVisible && (
        <div className="popUp flex justify-center">
          <div className="fixed w-72 bg-dark-bg-3 bottom-4 z-20 border p-2 border-borderColor rounded-lg flex items-center" style={{ height: "72px" }}>
            <span
              className="closePopUpIcon material-symbols-outlined text-gray-400 absolute right-0.5 top-0.5 cursor-pointer"
              onClick={popUpVisibillity}
            >
              close
            </span>
            <span className="entregaIcon material-symbols-outlined text-white border border-gray-500 bg-dark-bg-4 p-2 rounded">
              delivery_truck_speed
            </span>
            <p className="text-white font-thin text-lg leading-tight ml-3">
              <span className="font-medium">Entrega grátis</span> em toda Nova Friburgo!
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="mt-14">
          <p className="text-white font-regular text-4xl text-center p-8" style={{ lineHeight: "0.75" }}>
            <span className="font-thin text-2xl">Tudo o que você precisa,</span>
            <br />
            em um só clique!
          </p>
          <div className="relative mt-2">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 no-scrollbar px-7 pb-4"
            >
              <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
              <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
              <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="buttonHover">
              <img src="./images/celulares.png" className="w-20" />
              <div className="flex justify-center mt-1">
                <p className="text-white text-center font-thin absolute">Celulares</p>
              </div>
            </div>
            <div className="buttonHover">
              <img src="./images/eletronicos.png" className="w-20" />
              <div className="flex justify-center mt-1">
                <p className="text-white text-center font-thin absolute">Eletrônicos</p>
              </div>
            </div>
            <div className="buttonHover">
              <img src="./images/capas.png" className="w-20" />
              <div className="flex justify-center mt-1">
                <p className="text-white text-center font-thin absolute">Capinhas</p>
              </div>
            </div>
            <div className="buttonHover">
              <img src="./images/smartwatches.png" className="w-20" />
              <div className="flex justify-center mt-1">
                <p className="text-white text-center font-thin absolute">Smartwatches</p>
              </div>
            </div>
          </div>
          <div className="mt-10 p-5">
            <p className="text-white text-xl font-regular">Destaques</p>
            <div className="mt-4">
              <ProductComponent
                src={"./images/product1.jpg"}
                product={"Apple IPhone 16 Pro Max (128GB) - Titânio natural"}
                price={"R$ 8.499,00"}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border-borderColor mt-8 pb-8" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
