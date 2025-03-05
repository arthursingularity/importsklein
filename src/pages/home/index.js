import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import './home.css'
import { useRef, useState, useEffect } from "react";
import SmartphonesComponent from '../../components/SmartphonesComponent';

const data = {
    Apple: [
        {
            src: "/images/smartphones/iphone13.jpg",
            product: "Apple IPhone 13 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 3.632,00" },
            ]
        },
        {
            src: "/images/smartphones/iphone14.jpg",
            product: "Apple IPhone 14 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 4.304,00" },
            ]
        },
        {
            src: "/images/smartphones/iphone15.jpg",
            product: "Apple IPhone 15 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 4.830,00" },
            ]
        },
    ]
};

function Home() {
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
                    sliderRef.current &&
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
                        <img
                            src='/images/icons/close.svg'
                            className='absolute right-0.5 top-0.5 cursor-pointer w-6'
                            onClick={popUpVisibillity}
                        />
                        <img src='/images/icons/entrega.svg' className='border border-gray-500 bg-dark-bg-4 p-2 rounded w-16' />
                        <p className="text-white font-thin text-lg leading-tight ml-3">
                            <span className="font-medium">Entrega grátis</span> em toda Nova Friburgo!
                        </p>
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                <div className="mt-12">
                    <p className="text-white font-regular text-3xl text-center p-8" style={{ lineHeight: "0.75" }}>
                        <span className="font-thin text-xl">Tudo o que você precisa,</span>
                        <br />
                        em um só clique!
                    </p>
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 no-scrollbar px-7 pb-4"
                        >
                            <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
                            <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
                            <img src="./images/banner1.jpg" className="buttonHover w-96 border border-borderColor rounded-xl snap-center" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 space-x-4">
                        <Link to="/produtos/smartphones">
                            <div className="buttonHover">
                                <img src="./images/celulares.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Smartphones</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/fones">
                            <div className="buttonHover">
                                <img src="./images/fones.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Fones</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/carregadores">
                            <div className="buttonHover">
                                <img src="./images/carregadores.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Carregadores</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/acessorios">
                            <div className="buttonHover">
                                <img src="./images/capas.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Acessórios</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-8 space-x-4">
                        <Link to="/produtos/smartwatches">
                            <div className="buttonHover">
                                <img src="./images/smartwatches.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Smartwatches</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/som">
                            <div className="buttonHover">
                                <img src="./images/som.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Som</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/eletronicos">
                            <div className="buttonHover">
                                <img src="./images/eletronicos.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Eletrônicos</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/produtos/chaveiros">
                            <div className="buttonHover">
                                <img src="./images/chaveiros.png" style={{ width: '70px' }} />
                                <div className="flex justify-center mt-1">
                                    <p className="text-white text-center font-thin absolute">Chaveiros</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-16">
                        <div className="space-y-2">
                            <p className="text-white text-xl font-regular">Destaques</p>
                            {Object.keys(data).map((brand, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        {data[brand].map((item, idx) => (
                                            <SmartphonesComponent
                                                key={idx}
                                                src={item.src}
                                                product={item.product}
                                                price={
                                                    item.storage
                                                        ? Math.min(...item.storage.map(s => Number(s.price.replace("R$ ", "").replace(".", "").replace(",", ".")))).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                        : item.price
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="flex justify-center text-white rounded-2xl py-4 bg-dark-bg-2" style={{ width: '340px' }}>
                            <div>
                                <p className="text-center text-xl font-light mt-1">Quem compra, <span className="font-medium">confia!</span></p>
                                <div className="stars flex justify-center">
                                    <img src='/images/icons/star.svg' />
                                    <img src='/images/icons/star.svg' />
                                    <img src='/images/icons/star.svg' />
                                    <img src='/images/icons/star.svg' />
                                    <img src='/images/icons/star.svg' />
                                </div>
                                <div className="flex space-x-3 mt-6">
                                    <img src="./images/cliente1.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente2.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente3.jpg" className="w-24 rounded-lg border border-borderColor" />
                                </div>
                                <div className="flex space-x-3 mt-3">
                                    <img src="./images/cliente4.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente5.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente6.jpg" className="w-24 rounded-lg border border-borderColor" />
                                </div>
                                <div className="flex space-x-3 mt-3">
                                    <img src="./images/cliente7.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente8.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente9.jpg" className="w-24 rounded-lg border border-borderColor" />
                                </div>
                                <div className="flex space-x-3 mt-3">
                                    <img src="./images/cliente10.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente11.jpg" className="w-24 rounded-lg border border-borderColor" />
                                    <img src="./images/cliente12.jpg" className="w-24 rounded-lg border border-borderColor" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-white mt-4 bg-dark-bg-2 py-3 mt-5 rounded-2xl" style={{ width: '340px' }}>
                            <p className="text-center text-xl font-regular mt-1">Formas de pagamento</p>
                            <div className="space-y-3 mt-5">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-dark-bg-3 p-2 rounded-lg leading-tight" style={{ width: '313px', height: "70px" }}>
                                        <img src="./images/maquininha.png" className="w-12" />
                                        <p className="font-light">Cartão de débito ou crédito em até 18x</p>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-3">
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center bg-dark-bg-3 space-x-2 rounded-lg leading-tight" style={{ width: '124px', height: "60px" }}>
                                            <img src="./images/pixIcon.svg" className="w-7" />
                                            <p className="font-light">Pix</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center bg-dark-bg-3 space-x-3 rounded-lg leading-tight" style={{ width: '177px', height: "60px" }}>
                                            <img src="./images/cash-icon.svg" className="w-8" />
                                            <p className="font-light">Dinheiro</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <div className="flex justify-center items-center bg-dark-bg-3 pl-3 pr-1 rounded-lg leading-tight" style={{ width: '314px', height: "70px" }}>
                                        <img src="./images/aparelhoEntrada.png" className="w-8" />
                                        <p className="font-light ml-3">Aceitamos o seu aparelho android ou iOS como entrada</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-dark-bg-2 w-full mt-6">
                        <p className="text-white font-regular pt-6 ml-6">Redes sociais</p>
                        <div className="flex space-x-3 mt-2 ml-6">
                            <a href="https://www.instagram.com/imports_klein/">
                                <img src="./images/instagram.png" className="w-6 filter invert cursor-pointer" />
                            </a>
                            <a href="https://w.app/mr6vfw">
                                <img src="./images/whatsapp.png" className="w-6 h-6 filter invert cursor-pointer" />
                            </a>
                        </div>
                        <p className="text-white text-sm font-thin pt-6 text-center">© 2025 Imports Klein. Todos os direitos reservados.</p>
                        <p className="text-white text-sm font-thin text-center">Nova Friburgo, RJ</p>
                        <div className="linha flex justify-center mt-6">
                            <hr className="border-borderColor" style={{ width: "90%" }} />
                        </div>
                        <div></div>
                        <p className="text-white font-thin text-center mt-6 pb-6 text-sm">Desenvolvido por <span className="font-regular">Arthur Alves</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home