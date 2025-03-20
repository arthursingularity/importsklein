import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const categories = [
        { name: "Smartphones", path: "/smartphones" },
        { name: "Tablets", path: "/tablets" },
        { name: "Música", path: "/musica" },
        { name: "Carregadores", path: "/carregadores" },
        { name: "Acessórios", path: "/acessorios" },
        { name: "Smartwatches", path: "/smartwatches" },
        { name: "Eletrônicos", path: "/eletronicos" },
        { name: "Chaveiros", path: "/chaveiros" }
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

                {/* Ícone do menu que abre/fecha a aba lateral */}
                <img 
                    src='/images/icons/menu.svg' 
                    className='searchNavBarIcon buttonHover absolute text-white right-4 w-9 cursor-pointer' 
                    onClick={toggleSidebar}
                />

                <div>
                    <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
                </div>
                <Link to="/">
                    <img src='/images/icons/home.svg' className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4 top-[45px] w-8' />
                </Link>
            </div>

            {/* Aba lateral com categorias */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-dark-bg-2 border-l border-borderColor text-white shadow-lg transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <button 
                    className="absolute top-3 right-3 text-xl text-white" 
                    onClick={toggleSidebar}
                >
                    <img src='/images/icons/close.svg' className='w-[35px]'/>
                </button>
                <ul className="mt-12 space-y-4 p-4">
                    {categories.map((category, index) => (
                        <li key={index} className="border-b border-borderColor pb-3 cursor-pointer font-light hover:text-gray-300">
                            <Link to={category.path} onClick={toggleSidebar}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;