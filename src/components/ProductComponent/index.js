import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const productData = {
    Smartphones: {
        Apple: [
            {
                key: "iphone13",
                src: "/images/smartphones/apple/iphone13.jpg",
                product: "Apple iPhone 13",
                price: "R$ 3.632,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 3.632,00",
                        colors: ["Azul", "Estelar", "Meia-noite"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/apple/iphone13.jpg",
                            Estelar: "/images/smartphones/apple/iphone13estelar.jpg",
                            "Meia-noite": "/images/smartphones/apple/iphone13meianoite.jpg",
                        }
                    }
                ]
            },
            {
                key: "iphone14",
                src: "/images/smartphones/apple/iphone14.jpg",
                product: "Apple iPhone 14",
                price: "R$ 4.304,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 4.304,00",
                        colors: ["Azul"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/apple/iphone14.jpg",
                        }
                    }
                ]
            },
            {
                key: "iphone15",
                src: "/images/smartphones/apple/iphone15.jpg",
                product: "Apple iPhone 15",
                price: "R$ 4.830,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 4.830,00",
                        colors: ["Preto", "Azul claro", "Verde", "Rosa"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/apple/iphone15.jpg",
                            "Azul claro": "/images/smartphones/apple/iphone15azul.jpg",
                            Verde: "/images/smartphones/apple/iphone15verde.jpg",
                            Rosa: "/images/smartphones/apple/iphone15rosa.jpg",
                        }
                    }
                ]
            },
            {
                key: "iphone16",
                src: "/images/smartphones/apple/iphone16.jpg",
                product: "Apple iPhone 16",
                price: "R$ 5.102,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 5.102,00",
                        colors: ["Preto", "Ultramarino", "Branco", "Verde", "Rosa"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/apple/iphone16.jpg",
                            Ultramarino: "/images/smartphones/apple/iphone16ultramarino.jpg",
                            Branco: "/images/smartphones/apple/iphone16branco.jpg",
                            Verde: "/images/smartphones/apple/iphone16verde.jpg",
                            Rosa: "/images/smartphones/apple/iphone16rosa.jpg",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 6.132,00",
                        colors: ["Preto", "Ultramarino", "Branco", "Rosa"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/apple/iphone16.jpg",
                            Ultramarino: "/images/smartphones/apple/iphone16ultramarino.jpg",
                            Branco: "/images/smartphones/apple/iphone16branco.jpg",
                            Rosa: "/images/smartphones/apple/iphone16rosa.jpg",
                        }
                    }
                ]
            },
            {
                key: "iphone16pro",
                src: "/images/smartphones/apple/iphone16pro.jpg",
                product: "Apple iPhone 16 Pro",
                price: "R$ 6.432,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 6.432,00",
                        colors: ["Titânio-deserto", "Titânio natural", "Titânio branco"],
                        availability: "Encomenda",
                        images: {
                            "Titânio-deserto": "/images/smartphones/apple/iphone16pro.jpg",
                            "Titânio natural": "/images/smartphones/apple/iphone16protitanionatural.jpg",
                            "Titânio branco": "/images/smartphones/apple/iphone16protitaniobranco.jpg",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 7.052,00",
                        colors: ["Titânio-deserto", "Titânio preto", "Titânio branco"],
                        availability: "Encomenda",
                        images: {
                            "Titânio-deserto": "/images/smartphones/apple/iphone16pro.jpg",
                            "Titânio preto": "/images/smartphones/apple/iphone16protitaniopreto.jpg",
                            "Titânio branco": "/images/smartphones/apple/iphone16protitaniobranco.jpg",
                        }
                    },
                ]
            },
            {
                key: "iphone16promax",
                src: "/images/smartphones/apple/iphone16promax.png",
                product: "Apple iPhone 16 Pro Max",
                price: "R$ 7.602,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 7.602,00",
                        colors: ["Titânio-deserto"],
                        availability: "Encomenda",
                        images: {
                            "Titânio-deserto": "/images/smartphones/apple/iphone16promax.png",
                        }
                    }
                ]
            }
        ]
    }
};

const colorMap = {
    Azul: "#246180",
    Preto: "#404447",
    Verde: "#cae0bf",
    Rosa: "#f1b9dc",
    Estelar: "#ffffff",
    MeiaNoite: "#0f1a1d",
    Ultramarino: "#9baff9",
    Branco: "#ffffff",
    "Meia-noite": "#404447",
    "Azul claro": "#d2e0e5",
    "Titânio-deserto": "#c1a693",
    "Titânio natural": "#c4bfb5",
    "Titânio branco": "#f2f1ed",
    "Titânio preto": "#404447",
    "White lilac": "#ebd1d4",
    "Marble black": "#404447",
};

function ProductComponent({ productKey }) {
    const navigate = useNavigate();
    const product = Object.values(productData.Smartphones)
        .flat()
        .find(item => item.key === productKey);

    // Mover os hooks para cima, antes do retorno condicional
    const { src: productImage, product: productName, versions } = product || {};
    const defaultVersion = versions ? versions[0] : {};
    const { storage, colors, condition, availability, price } = defaultVersion;

    const initialStorage = storage || "";
    const initialCondition = condition || "";
    const initialAvailability = availability || "";
    const initialColor = colors ? colors[0] : "";

    const [selectedStorage, setSelectedStorage] = useState(initialStorage);
    const [selectedCondition, setSelectedCondition] = useState(initialCondition);
    const [selectedAvailability, setSelectedAvailability] = useState(initialAvailability);
    const [selectedColor, setSelectedColor] = useState(initialColor);
    const [finalPrice, setFinalPrice] = useState(price || "R$ 0,00");
    const [selectedImage, setSelectedImage] = useState(productImage || '/images/default-image.jpg');

    useEffect(() => {
        if (product) {
            const selectedVersion = product?.versions.find(version =>
                version.storage === selectedStorage &&
                version.condition === selectedCondition &&
                version.availability === selectedAvailability &&
                version.colors.includes(selectedColor)
            );
    
            if (selectedVersion) {
                setSelectedImage(selectedVersion.images[selectedColor]);
                setFinalPrice(selectedVersion.price);  // Atualiza o preço com base na versão selecionada
            } else {
                setSelectedImage(productImage || '/images/default-image.jpg');
                setFinalPrice(price || "R$ 0,00");  // Caso não encontre a versão, mantém o preço original
            }
        }
    }, [selectedStorage, selectedCondition, selectedAvailability, selectedColor, product, productImage, price]);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    const storageOptions = Array.from(new Set(versions.map(version => version.storage)));
    const conditionOptions = Array.from(new Set(versions.map(version => version.condition)));
    const availabilityOptions = Array.from(new Set(versions.map(version => version.availability)))
        .filter(option => option === "Encomenda" || option === "Pronta-entrega");

    const getColorsForSelectedStorage = () => {
        const selectedVersion = product?.versions.find(version => version.storage === selectedStorage);
        if (selectedVersion) {
            return selectedVersion.colors;
        }
        return [];
    };

    const availableColors = getColorsForSelectedStorage();

    const handleBackClick = () => {
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/');
        const parentPath = `/${pathSegments[1]}/${pathSegments[2]}`;

        navigate(parentPath);
    };

    return (
        <div className="absolute z-30 top-[70px] text-white pb-2">
            <img
                src='/images/icons/close.svg'
                className='absolute cursor-pointer w-8 z-40 top-[6px] ml-[317px] buttonHover'
                onClick={handleBackClick}
            />
            <div className="bg-dark-bg-2 p-6 rounded-xl w-[355px] border border-borderColor">
                <p className="font-regular text-2xl">{productName}</p>
                <div className="flex justify-center mt-6">
                    <div className="bg-white p-14 w-[310px] h-[280px] flex items-center rounded">
                        <img src={selectedImage} alt={productName} />
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Armazenamento</p>
                    <div className="flex space-x-2">
                        {storageOptions.map((option, index) => {
                            const isSelected = option === selectedStorage;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectedStorage(option)}
                                    className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                        ? 'border-blue-500 bg-gray-700'
                                        : 'border-blue-500 border-gray-400'
                                        }`}
                                >
                                    <p className="font-light">{option}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Cor - {selectedColor}</p>
                    <div className="flex space-x-2">
                        {availableColors.map((color, index) => {
                            const isSelected = color === selectedColor;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                    className={`border rounded-lg w-12 h-12 flex items-center justify-center mt-1 hover:border-blue-500 ${isSelected ? 'border-blue-500' : 'border-gray-400 '
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded flex justify-center cursor-pointer" style={{ backgroundColor: colorMap[color] }}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Condição</p>
                    <div className="flex space-x-2">
                        {conditionOptions.map((option, index) => {
                            const isSelected = option === selectedCondition;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCondition(option)}
                                    className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                        ? 'border-blue-500 bg-gray-700'
                                        : 'border-blue-500 border-gray-400'
                                        }`}
                                >
                                    <p className="font-light">{option}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="font-light text-xl mt-5">Disponibilidade</p>
                    <div className="flex space-x-2">
                        {availabilityOptions.map((option, index) => {
                            const isSelected = option === selectedAvailability;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setSelectedAvailability(option)}
                                    className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                        ? 'border-blue-500 bg-gray-700'
                                        : 'border-blue-500 border-gray-400'
                                        }`}
                                >
                                    <p className="font-light">{option}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="Resume mt-8 bg-dark-bg-3 border border-borderColor rounded p-5">
                    <p className="font-regular text-2xl text-center leading-none mt-1">{productName}</p>
                    <div className="flex space-x-4 font-thin justify-center mt-3">
                        <p className="text-lg leading-tight">{selectedStorage}</p>
                        <p className="text-lg leading-tight">{selectedColor}</p>
                    </div>
                    <div className="flex space-x-4 font-thin justify-center">
                        <p className="text-lg leading-tight">{selectedCondition}</p>
                        <p className="text-lg leading-tight">{selectedAvailability}</p>
                    </div>
                    <hr className="border-1 border-borderColor mt-4" />
                    <div className="flex justify-center items-center mt-6 space-x-6">
                        <p className="text-center text-xl font-medium bg-dark-bg-3 rounded">{finalPrice}</p>
                        <p className="text-center text-black font-regular bg-verde bg-dark-bg-3 p-1 w-[115px] rounded buttonHover">Comprar</p>
                    </div>
                    <div className="flex space-x-4 font-light justify-center mt-5">
                        {productData.Smartphones.Apple.some(item => item.key === productKey) ? (
                            <p className="text-lg leading-tight text-verde text-center">Acompanha: capinha, película e um brinde exclusivo Imports Klein!</p>
                        ) : (
                            <p className="text-lg leading-tight text-verde text-center">Acompanha um brinde exclusivo Imports Klein!</p>
                        )}
                    </div>
                </div>
                <div className="mt-7 flex justify-center">
                    <div>
                        <p className="text-xl font-light text-center">Formas de pagamento</p>
                        <div className="flex justify-center mt-4">
                            <div className="text-white rounded-2xl">
                                <div className="space-y-3">
                                    <div className="flex justify-center">
                                        <div className="flex justify-center items-center bg-dark-bg-3 rounded border border-borderColor leading-tight" style={{ width: '308px', height: "70px" }}>
                                            <img src="/images/maquininha.png" className="w-10" />
                                            <p className="font-light">Cartão de débito ou crédito em até 18x</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-3">
                                        <div className="flex justify-center">
                                            <div className="flex items-center justify-center border border-borderColor bg-dark-bg-3 space-x-2 rounded leading-tight" style={{ width: '119px', height: "60px" }}>
                                                <img src="/images/pixIcon.svg" className="w-7" />
                                                <p className="font-light">Pix</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="flex items-center justify-center bg-dark-bg-3 border border-borderColor space-x-3 rounded leading-tight" style={{ width: '177px', height: "60px" }}>
                                                <img src="/images/cash-icon.svg" className="w-8" />
                                                <p className="font-light">Dinheiro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <div className="flex justify-center items-center bg-dark-bg-3 border border-borderColor pl-3 pr-1 rounded leading-tight" style={{ width: '308px', height: "70px" }}>
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