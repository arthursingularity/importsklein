import { useLocation, useNavigate } from "react-router-dom";

function ProductBrand() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleBrandClick = (brand) => {
        navigate(`/smartphones/${brand.toLowerCase()}`);
    };

    const isCurrentBrand = (brand) => location.pathname === `/smartphones/${brand.toLowerCase()}`;

    return (
        <div className="flex justify-center">
            {location.pathname.startsWith("/smartphones") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                    <img
                        src="/images/samsungLogo.svg"
                        className={`p-1.5 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Samsung') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Samsung')}
                    />
                    <img
                        src="/images/xiaomiLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Xiaomi') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Xiaomi')}
                    />
                    <img
                        src="/images/motorolaLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Motorola') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Motorola')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/fones") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                    <img
                        src="/images/xiaomiLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Xiaomi') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Xiaomi')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/carregadores") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/acessorios") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/smartwatches") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/som") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/eletronicos") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
            {location.pathname.startsWith("/chaveiros") && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img
                        src="/images/appleLogo.svg"
                        className={`p-2 border border-borderColor rounded cursor-pointer hover:bg-dark-bg-4 ${isCurrentBrand('Apple') ? 'bg-dark-bg-4' : ''}`}
                        style={{ width: "45px" }}
                        onClick={() => handleBrandClick('Apple')}
                    />
                </div>
            )}
        </div>
    );
}

export default ProductBrand;
