import { Link } from 'react-router-dom';
import './smartphonescomponent.css'

function SmartphonesComponent({ src, product, price, onClick, link, colorType }) {
    const maxLength = 30;

    const truncatedProduct = product.length > maxLength ? `${product.substring(0, maxLength)}...` : product;

    return (
        <div
            style={{ width: 111 }}
            className="relative snap-center h-[213px] buttonHover border border-borderColor rounded-lg overflow-hidden bg-dark-bg-3"
            onClick={onClick}
        >
            <Link to={link}>
                <div className="bg-white flex justify-center items-center" style={{ width: 111, height: 115 }}>
                    <img className={colorType === "img" ? "p-0" : "p-4"} src={src} alt="Produto" />
                </div>
                <div className="bg-dark-bg-3">
                    <p className="text-blue-400 font-regular text-base p-3 pb-12" style={{ lineHeight: "1.15" }}>
                        {truncatedProduct}
                    </p>
                    <div className='hidden'>
                        <p className='text-gray-300 font-light absolute bottom-7 left-3 text-sm'>A partir de</p>
                        <p className="text-white font-medium px-3 pb-3 pt-1 absolute -bottom-0.5" style={{ fontSize: '15px' }}>{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SmartphonesComponent;