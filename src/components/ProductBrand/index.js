import { useLocation, useNavigate } from "react-router-dom";

function ProductBrand({ category }) {
    const location = useLocation();
    const navigate = useNavigate();

    // Função que utiliza a categoria dinâmica para a rota
    const handleBrandClick = (brand) => {
        navigate(`/${category}/${brand.toLowerCase()}`);
    };

    // Compara se a rota atual é exatamente a da marca clicada
    const isCurrentBrand = (brand) =>
        location.pathname === `/${category}/${brand.toLowerCase()}`;

    return (
        <div className="flex justify-center">
            {category === "smartphones" && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-[118px] flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "40px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                    <img
                        src="/images/samsungLogo.svg"
                        className={`p-1.5 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Samsung') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "40px" }}
                        onClick={() => handleBrandClick('Samsung')}
                    />
                    <img
                        src="/images/xiaomiLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Xiaomi') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "40px" }}
                        onClick={() => handleBrandClick('Xiaomi')}
                    />
                    <img
                        src="/images/motorolaLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Motorola') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "40px" }}
                        onClick={() => handleBrandClick('Motorola')}
                    />
                    <img
                        src="/images/realmeLogo.svg"
                        className={`p-1 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Realme') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "40px" }}
                        onClick={() => handleBrandClick('Realme')}
                    />
                </div>
            )}
            {category === "fones" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Fones de ouvido</p>
            )}
            {category === "smartwatches" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Smartwatches</p>
            )}
            {category === "carregadores" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Carregadores</p>
            )}
            {category === "acessorios" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Acessorios</p>
            )}
            {category === "som" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Som</p>
            )}
            {category === "chaveiros" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Chaveiros</p>
            )}
            {category === "eletronicos" && (
                <p className="text-2xl text-white font-regular mt-[115px]">Eletrônicos</p>
            )}
        </div>
    );
}

export default ProductBrand;
