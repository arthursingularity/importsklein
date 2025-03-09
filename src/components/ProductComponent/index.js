function ProductComponent() {
    return (
        <div className="absolute z-30 top-[70px] text-white pb-2">
            <div className="bg-dark-bg-2 p-6 rounded-xl w-[355px] border border-borderColor">
                <p className="font-regular text-2xl">Apple iPhone 16 Pro Max</p>
                <div className="flex justify-center mt-6">
                    <div className="bg-white p-14 w-[310px] h-[310px] flex items-center rounded">
                        <img src="/images/smartphones/iphone16promax.png" />
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Armazenamento</p>
                    <div className="flex space-x-2">
                        <div className="border border-gray-400 p-2 rounded mt-2 w-[75px] h-[37px] flex justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-gray-700">
                            <p className="font-light">256GB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Cor</p>
                    <div className="flex space-x-2">
                        <div className="border border-blue-500 rounded-lg w-12 h-12 flex items-center justify-center mt-1 hover:border-blue-500">
                            <div className="w-10 h-10 rounded flex justify-center cursor-pointer bg-[#C4AB97]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-6">
                    <div>
                        <p className="font-light text-xl mt-5">Condição</p>
                        <div className="flex space-x-2">
                            <div className="border border-gray-400 p-2 rounded mt-2 w-[75px] h-[37px] flex justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-gray-700">
                                <p className="font-light">Lacrado</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-light text-xl mt-5">Disponibilidade</p>
                        <div className="flex space-x-2">
                            <div className="border border-gray-400 p-2 rounded mt-2 w-[120px] h-[37px] flex justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-gray-700">
                                <p className="font-light">Encomenda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 bg-dark-bg-3 border border-borderColor rounded p-5">
                    <p className="font-regular text-2xl text-center leading-none mt-1">Apple iPhone 16 Pro Max</p>
                    <div className="flex space-x-4 font-light justify-center mt-2">
                        <p className="text-lg">256GB</p>
                        <p className="text-lg">Titânio Natural</p>
                        <p className="text-lg">Lacrado</p>
                    </div>
                    <hr className="border-1 border-borderColor mt-4" />
                    <div className="flex justify-center items-center mt-6 space-x-4">
                        <p className="text-center text-verde font-regular bg-dark-bg-3 w-[115px] rounded">Disponível!</p>
                        <p className="text-center text-black font-regular bg-verde bg-dark-bg-3 p-1 w-[115px] rounded buttonHover">Comprar</p>
                    </div>
                </div>
                <div className="mt-7 flex justify-center">
                    <div>
                        <p className="text-xl font-light text-center">Formas de pagamento</p>
                        <div className="flex justify-center mt-4">
                            <div className="text-white rounded-2xl">
                                <div className="space-y-3">
                                    <div className="flex justify-center">
                                        <div className="flex justify-center items-center bg-dark-bg-3 rounded-lg border border-borderColor leading-tight" style={{ width: '308px', height: "70px" }}>
                                            <img src="/images/maquininha.png" className="w-10" />
                                            <p className="font-light">Cartão de débito ou crédito em até 18x</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-3">
                                        <div className="flex justify-center">
                                            <div className="flex items-center justify-center border border-borderColor bg-dark-bg-3 space-x-2 rounded-lg leading-tight" style={{ width: '119px', height: "60px" }}>
                                                <img src="/images/pixIcon.svg" className="w-7" />
                                                <p className="font-light">Pix</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="flex items-center justify-center bg-dark-bg-3 border border-borderColor space-x-3 rounded-lg leading-tight" style={{ width: '177px', height: "60px" }}>
                                                <img src="/images/cash-icon.svg" className="w-8" />
                                                <p className="font-light">Dinheiro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <div className="flex justify-center items-center bg-dark-bg-3 border border-borderColor pl-3 pr-1 rounded-lg leading-tight" style={{ width: '308px', height: "70px" }}>
                                            <img src="/images/aparelhoEntrada.png" className="w-8" />
                                            <p className="font-light ml-3">Aceitamos o seu aparelho android ou iOS como entrada</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent