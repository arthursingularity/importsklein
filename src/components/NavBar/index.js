import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
    return (
        <div className="bg-dark-bg-2 p-3 flex justify-center items-center fixed w-full z-50">
            <Link to="/">
                <img src="/images/importsKleinLogo.png" style={{ width: 75 }} />
            </Link>
            <div>
                <img src='/images/icons/search.svg' className='searchNavBarIcon buttonHover absolute text-white right-4 w-7'/>
                <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
            </div>
            <img src='/images/icons/menu.svg' className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4 w-9'/>
        </div>
    )
}

export default NavBar