import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import './home.css'
import { useRef, useState, useEffect } from "react";
import SmartphonesComponent from '../../components/SmartphonesComponent';
import Footer from '../../components/Footer';

const data = {
    destaques: [
        {
            link: "/smartphones/apple/iphone15",
            src: "/images/smartphones/apple/iphone15.jpg",
            product: "Apple iPhone 15",
            price: "R$ 4.830,00",
        },
        {
            src: "/images/smartphones/realme/note60.png",
            product: "Realme Note 60",
            price: "R$ 899,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
    ],
    novidades: [
        {
            src: "/images/smartphones/apple/iphone15.jpg",
            product: "Apple iPhone 15",
            price: "R$ 4.830,00",
        },
        {
            src: "/images/smartphones/realme/note60.png",
            product: "Realme Note 60",
            price: "R$ 899,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
    ],
    prontaEntrega: [
        {
            src: "/images/smartphones/motorola/motog30.png",
            product: "Moto G30",
            price: "R$ 599,00",
        },
        {
            src: "/images/smartphones/realme/note60.png",
            product: "Realme Note 60",
            price: "R$ 899,00",
        },
        {
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.160,00",
        },
    ],
};

const categorias = [
    { nome: "Smartphones", img: "/images/celulares.png", link: "/smartphones" },
    { nome: "Fones", img: "/images/fones.png", link: "/fones" },
    { nome: "Carregadores", img: "/images/carregadores.png", link: "/carregadores" },
    { nome: "Acessórios", img: "/images/capas.png", link: "/acessorios" },
    { nome: "Smartwatches", img: "/images/smartwatches.png", link: "/smartwatches" },
    { nome: "Som", img: "/images/som.png", link: "/som" },
    { nome: "Eletrônicos", img: "/images/eletronicos.png", link: "/eletronicos" },
    { nome: "Chaveiros", img: "/images/chaveiros.png", link: "/chaveiros" }
];

function Home() {
    const sliderRef = useRef(null);
    const scrollAmount = 300;
    const destaqueRef = useRef(null);
    const [popUpVisible, setPopUpVisible] = useState(true);
    const [colunas, setColunas] = useState(4);

    useEffect(() => { //Responsividade
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 610) setColunas(4);
            else if (width < 740) setColunas(5);
            else if (width < 820) setColunas(6);
            else if (width < 910) setColunas(7);
            else setColunas(8);
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const grupos = [];
    for (let i = 0; i < categorias.length; i += colunas) {
        grupos.push(categorias.slice(i, i + colunas));
    }

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
                            <img src="./images/banner1.jpg" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
                            <img src="./images/banner1.jpg" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
                            <img src="./images/banner1.jpg" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8 space-y-9">
                        {grupos.map((grupo, index) => (
                            <div key={index} className="flex justify-center space-x-4">
                                {grupo.map((categoria) => (
                                    <Link to={categoria.link} key={categoria.nome}>
                                        <div className="buttonHover">
                                            <img src={categoria.img} className="w-[70px]" />
                                            <div className="flex justify-center mt-1">
                                                <p className="text-white text-center font-thin absolute">{categoria.nome}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-14">
                        <div className="space-y-2">
                            <p className="text-white text-xl font-regular">Destaques</p>
                            {Array.isArray(data["destaques"]) && data["destaques"].length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                                    {data["destaques"].map((item, idx) => (
                                            <SmartphonesComponent
                                                key={item.id || idx}
                                                src={item.src}
                                                product={item.product}
                                                price={
                                                    item.storage && Array.isArray(item.storage) && item.storage.length > 0
                                                        ? Math.min(
                                                            ...item.storage.map(s => {
                                                                const price = Number(s.price.replace("R$ ", "").replace(".", "").replace(",", "."));
                                                                return isNaN(price) ? Infinity : price;
                                                            })
                                                        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                        : item.price
                                                }
                                                link={item.link}
                                            />
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <div className="space-y-2">
                            <p className="text-white text-xl font-regular">Novidades</p>
                            {Array.isArray(data["novidades"]) && data["novidades"].length > 0 ? (
                                <div className="grid grid-cols-3 gap-1.5">
                                    {data["novidades"].map((item, idx) => (
                                        <SmartphonesComponent
                                            key={item.id || idx}
                                            src={item.src}
                                            product={item.product}
                                            price={
                                                item.storage && Array.isArray(item.storage) && item.storage.length > 0
                                                    ? Math.min(
                                                        ...item.storage.map(s => {
                                                            const price = Number(s.price.replace("R$ ", "").replace(".", "").replace(",", "."));
                                                            return isNaN(price) ? Infinity : price;
                                                        })
                                                    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                    : item.price
                                            }
                                        />
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <div className="space-y-2">
                            <p className="text-white text-xl font-regular">Pronta-entrega</p>
                            {Array.isArray(data["prontaEntrega"]) && data["prontaEntrega"].length > 0 ? (
                                <div className="grid grid-cols-3 gap-1.5">
                                    {data["prontaEntrega"].map((item, idx) => (
                                        <SmartphonesComponent
                                            key={item.id || idx}
                                            src={item.src}
                                            product={item.product}
                                            price={
                                                item.storage && Array.isArray(item.storage) && item.storage.length > 0
                                                    ? Math.min(
                                                        ...item.storage.map(s => {
                                                            const price = Number(s.price.replace("R$ ", "").replace(".", "").replace(",", "."));
                                                            return isNaN(price) ? Infinity : price;
                                                        })
                                                    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                    : item.price
                                            }
                                        />
                                    ))}
                                </div>
                            ) : null}
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
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home