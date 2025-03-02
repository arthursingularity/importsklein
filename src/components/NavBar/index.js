import './navbar.css'

function NavBar() {
    return (
        <div className="bg-dark-bg-2 p-3 flex justify-center items-center fixed w-full z-50">
            <img src="./images/importsKleinLogo.png" style={{ width: 75 }} />
            <div>
                <span className='searchNavBarIcon buttonHover material-symbols-outlined absolute text-white right-4'>search</span>
                <input className='bg-transparent rounded-lg border border-borderColor font-light text-white pl-7 w-40 h-7 outline-none caret-white hidden' placeholder='Pesquisar' />
            </div>
            <span className='menuNavBarIcon buttonHover material-symbols-outlined text-white absolute left-4'>
                menu
            </span>
        </div>
    )
}

export default NavBar