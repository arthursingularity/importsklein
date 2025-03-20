import { Link } from 'react-router-dom'
import './navbar.css'
import ProductPageComponent from '../ProductComponent'

function NavBar() {
    return (
        <div className='fixed z-50 w-full'>
            <p className='bg-dark-bg font-light text-white text-center py-1'><span className='font-medium'>Frete grátis</span> para Nova Friburgo!</p>
            <div className="bg-dark-bg-2 p-3 flex justify-center items-center w-full border-b border-borderColor">
                <Link to="/">
                    <img src="/images/importsKleinLogo.png" style={{ width: 75 }} className='buttonHover' />
                </Link>
                <img src='/images/icons/menu.svg' className='searchNavBarIcon buttonHover absolute text-white right-4 w-9' />
                <div>
                    <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
                </div>
                <Link to="/">
                    <img src='/images/icons/home.svg' className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4 top-[45px] w-8' />
                </Link>
            </div>
            <div className="popUp flex justify-center">
                <a
                    href="https://wa.me/5522996122610?text=Olá,%20visitei%20a%20loja%20Imports%20Klein%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.%20Poderia%20me%20ajudar?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed w-[58px] bottom-4 right-4 z-20 p-1.5 bg-[#40c351] rounded-full"
                >
                    <img src='/images/icons/whatsapp.svg' alt="WhatsApp" />
                </a>
            </div>
        </div>
    )
}

export default NavBar