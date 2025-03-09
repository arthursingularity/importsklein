function Footer() {
    return (
        <div>
            <div className="bg-dark-bg-2 w-full mt-6">
                <p className="text-white font-regular pt-6 ml-6">Redes sociais</p>
                <div className="flex space-x-3 mt-2 ml-6">
                    <a href="https://www.instagram.com/imports_klein/">
                        <img src="/images/instagram.png" className="w-6 filter invert cursor-pointer" />
                    </a>
                    <a href="https://w.app/mr6vfw">
                        <img src="/images/whatsapp.png" className="w-6 h-6 filter invert cursor-pointer" />
                    </a>
                </div>
                <p className="text-white text-sm font-thin pt-6 text-center">© 2025 Imports Klein. Todos os direitos reservados.</p>
                <p className="text-white text-sm font-thin text-center">Nova Friburgo, RJ - Brasil</p>
                <div className="linha flex justify-center mt-6">
                    <hr className="border-borderColor" style={{ width: "90%" }} />
                </div>
                <div></div>
                <p className="text-white font-thin text-center mt-6 pb-6 text-sm">Desenvolvido por <span className="font-regular">Arthur Alves</span></p>
            </div>
        </div>
    )
}

export default Footer