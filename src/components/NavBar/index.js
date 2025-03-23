import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // Hook para obter a rota atual

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const categories = [
        { name: "Smartphones", path: "/smartphones", icon: "/images/icons/smartphone.svg" },
        { name: "Tablets", path: "/tablets", icon: "/images/icons/smartphone.svg" },
        { name: "Música", path: "/musica", icon: "/images/icons/musica.svg" },
        { name: "Carregadores", path: "/carregadores", icon: "/images/icons/carregadores.svg" },
        { name: "Acessórios", path: "/acessorios", icon: "/images/icons/acessorios.png" },
        { name: "Smartwatches", path: "/smartwatches", icon: "/images/icons/smartwatch.svg" },
        { name: "Eletrônicos", path: "/eletronicos", icon: "/images/icons/eletronicos.svg" },
        { name: "Chaveiros", path: "/chaveiros", icon: "/images/icons/chaveiro.svg" }
    ];

    return (
        <div className='fixed z-50 w-full'>
            <p className='bg-dark-bg font-light text-white text-center py-1'>
                <span className='font-medium'>Frete grátis</span> para Nova Friburgo!
            </p>
            <div className="bg-dark-bg-2 p-3 flex justify-center items-center w-full border-b border-borderColor">
                <Link to="/">
                    <img src="/images/importsKleinLogo.png" style={{ width: 75 }} className='buttonHover' />
                </Link>
                <img
                    src='/images/icons/menu.svg'
                    className='searchNavBarIcon buttonHover absolute text-white right-4 w-9 cursor-pointer'
                    onClick={toggleSidebar}
                />
                <ul>
                    <li className='space-x-4 hidden'>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Página inicial
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Smartphones
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Tablets
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Música
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Carregadores
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Smartwatches
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Eletrônicos
                        </Link>
                        <Link to="/" className='text-white font-light buttonHover'>
                            Chaveiros
                        </Link>
                    </li>
                </ul>
                <div>
                    <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
                </div>
                <Link to="/">
                    <img src='/images/icons/home.svg' className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4 top-[45px] w-8' />
                </Link>
            </div>
            <div className="WhatsAppPopUp flex justify-center">
                <a
                    href="https://wa.me/5522996122610?text=Olá,%20visitei%20a%20loja%20Imports%20Klein%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed w-[50px] bottom-4 right-4 z-20 p-1.5 bg-[#40c351] rounded-full"
                >
                    <img src='/images/icons/whatsapp.svg' alt="WhatsApp" />
                </a>
            </div>
            <div
                className={`fixed top-0 right-0 rounded-tl-xl rounded-bl-xl p-3 h-full w-64 bg-dark-bg-3 border border-r-0 border-borderColor text-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <Link to="/">
                    <img src="/images/importsKleinLogo.png" className='buttonHover w-[65px] mt-1 ml-1' />
                </Link>
                <button
                    className="absolute top-3 right-3 text-xl text-white"
                    onClick={toggleSidebar}
                >
                    <img src='/images/icons/close.svg' className='w-[35px]' />
                </button>
                <hr className='border-1 mt-4 border-borderColor' />
                <ul className="mt-4">
                    {categories.map((category, index) => {
                        const isActive = location.pathname.startsWith(category.path);

                        return (
                            <Link to={category.path} onClick={toggleSidebar} key={index}>
                                <div
                                    className={`flex items-center space-x-3 p-3 rounded cursor-pointer 
                    ${isActive ? 'bg-dark-bg-4 text-blue-500' : 'hover:bg-dark-bg-4'}`}
                                >
                                    <img
                                        src={category.icon}
                                        className='w-[25px]'
                                        alt={category.name}
                                        style={isActive ? { filter: 'invert(64%) sepia(23%) saturate(3894%) hue-rotate(188deg) brightness(98%) contrast(99%' } : {}}
                                    />
                                    <li className="font-light text-[18px]">
                                        {category.name}
                                    </li>
                                </div>
                            </Link>
                        );
                    })}
                </ul>

            </div>
        </div>
    );
}

export default NavBar;
