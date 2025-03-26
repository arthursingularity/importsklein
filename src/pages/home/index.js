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
    ],
    apple: [
        {
            link: "/smartphones/apple/iphone13",
            src: "/images/smartphones/apple/iphone13.jpg",
            product: "Apple iPhone 13",
            price: "R$ 3.632,00",
        },
        {
            link: "/smartphones/apple/iphone15",
            src: "/images/smartphones/apple/iphone15.jpg",
            product: "Apple iPhone 15",
            price: "R$ 4.830,00",
        },
        {
            link: "/smartphones/apple/iphone16",
            src: "/images/smartphones/apple/iphone16verde.jpg",
            product: "Apple iPhone 16",
            price: "R$ 5.102,00",
        },
        {
            link: "/tablets/apple/ipad10",
            src: "/images/tablets/ipad10azul.png",
            product: "Apple iPad 10",
            price: "R$ 2.879,00",
        },
        {
            link: "/musica/apple/airpods3",
            src: "/images/musica/airpods3.png",
            product: "Apple AirPods 3",
            price: "R$ 1.499,00",
        },
        {
            link: "/smartwatches/apple/applewatchse2",
            src: "/images/smartwatches/applewatchse2estelar.jpg",
            product: "Apple Watch SE 2",
            price: "R$ 1.999,00",
        },
    ],
    prontaEntrega: [
        {
            link: "/smartphones/xiaomi/redmi14c",
            src: "/images/smartphones/xiaomi/redmi14c.png",
            product: "Redmi 14C",
            price: "R$ 1.120,00",
        },
        {
            link: "/smartphones/xiaomi/redminote14pro",
            src: "/images/smartphones/xiaomi/redminote14pro.png",
            product: "Redmi Note 14 Pro 4G",
            price: "R$ 1.850,00",
        },
        {
            link: "/smartphones/realme/realmec61",
            src: "/images/smartphones/realme/realmec61.png",
            product: "Realme C61 com NFC",
            price: "R$ 1.199,00",
        },
        {
            link: "/smartphones/realme/note60",
            src: "/images/smartphones/realme/note60.png",
            product: "Realme Note 60",
            price: "R$ 899,00",
        },
        {
            link: "/acessorios/capinha/capinhasiliconeapple",
            src: "/images/acessorios/capinhasiliconeapple.png",
            product: "Capa de silicone para iPhone",
            price: "R$ 35,00",
        },
        {
            link: "/eletronicos/padrao/videogameretro",
            src: "/images/eletronicos/videogameretro.png",
            product: "Video game retrô (10.000 jogos)",
            price: "R$ 109,90",
        },
    ],
};

const categorias = [
    { nome: "Smartphones", img: "/images/celulares.png", link: "/smartphones" },
    { nome: "Tablets", img: "/images/tablets.png", link: "/tablets" },
    { nome: "Música", img: "/images/fones.png", link: "/musica" },
    { nome: "Carregadores", img: "/images/carregadores.png", link: "/carregadores" },
    { nome: "Acessórios", img: "/images/acessorios.png", link: "/acessorios" },
    { nome: "Smartwatches", img: "/images/smartwatches.png", link: "/smartwatches" },
    { nome: "Eletrônicos", img: "/images/eletronicos.png", link: "/eletronicos" },
    { nome: "Chaveiros", img: "/images/chaveiros.png", link: "/chaveiros" }
];

function Home() {
    const sliderRef = useRef(null);
    const scrollAmount = 300;
    const destaqueRef = useRef(null);
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

    return (
        <div>
            <NavBar />
            <div className="flex justify-center">
                <div className="mt-[85px]">
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
                            <img src="./images/banners/banneriphone16.png" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
                            <img src="./images/banners/banneriphone14.jpg" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
                            <img src="./images/banners/bannersamsung.jpg" className="buttonHover  border border-borderColor rounded-xl snap-center" style={{ width: "500px" }} />
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
                            <p className="text-white text-xl font-regular">Apple</p>
                            {Array.isArray(data["apple"]) && data["apple"].length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                    {data["apple"].map((item, idx) => (
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
                    <div className="flex justify-center mt-8 hidden">
                        <div className="space-y-2">
                            <p className="text-white text-xl font-regular">Destaques</p>
                            {Array.isArray(data["destaques"]) && data["destaques"].length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
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
                            <p className="text-white text-xl font-regular">Pronta-entrega</p>
                            {Array.isArray(data["prontaEntrega"]) && data["prontaEntrega"].length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
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
                                            link={item.link}
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
                                    <img src="./images/cliente11.jpg" className="w-24 rounded-lg border border-borderColor" />
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