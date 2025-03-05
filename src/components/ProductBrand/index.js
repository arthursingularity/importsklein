import { useLocation } from "react-router-dom";

function ProductBrand() {
    const location = useLocation();

    return (
        <div className="flex justify-center">
            {location.pathname === "/produtos/smartphones" && (
                <div className="SmartphonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img src="/images/appleLogo.svg" className="p-2 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                    <img src="/images/samsungLogo.svg" className="p-1.5 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                    <img src="/images/xiaomiLogo.svg" className="p-2 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                    <img src="/images/motorolaLogo.svg" className="p-2 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                </div>
            )}

            {location.pathname === "/produtos/fones" && (
                <div className="FonesBrand p-1 border border-borderColor rounded-lg mt-20 flex space-x-1">
                    <img src="/images/appleLogo.svg" className="p-2 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                    <img src="/images/samsungLogo.svg" className="p-1.5 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                    <img src="/images/xiaomiLogo.svg" className="p-2 border border-borderColor rounded hover:bg-dark-bg-3 cursor-pointer" style={{ width: "45px" }}/>
                </div>
            )}
        </div>
    );
}

export default ProductBrand;
