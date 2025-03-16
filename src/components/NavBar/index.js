import { Link } from 'react-router-dom'
import './navbar.css'
import ProductPageComponent from '../ProductComponent'

function NavBar() {
    return (
        <div className='fixed z-50 w-full'>
            <p className='bg-dark-bg font-light text-white text-center py-1 md:hidden'><span className='font-medium'>Frete grátis</span> para Nova Friburgo!</p>
            <div className="bg-dark-bg-2 p-3 flex justify-center items-center w-full border-b border-borderColor">
                <Link to="/">
                    <img src="/images/importsKleinLogo.png" style={{ width: 75 }} className='buttonHover' />
                </Link>
                <img src='/images/icons/search.svg' className='searchNavBarIcon buttonHover absolute text-white right-4 w-7' />
                <div>
                    <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
                </div>
                <img src='/images/icons/menu.svg' className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4 w-9' />
            </div>
        </div>
    )
}

export default NavBar