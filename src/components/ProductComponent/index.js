import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Parcelamento from "../Parcelamento";
import productData from "../../productData";

const colorMap = {
    Azul: "#246180",
    Preto: "#404447",
    Verde: "#cae0bf",
    Rosa: "#f1b9dc",
    Estelar: "#ffffff",
    MeiaNoite: "#0f1a1d",
    Ultramarino: "#9baff9",
    Branco: "#ffffff",
    Grafite: "#404447",
    Rose: "#e7c9bf",
    Roxo: "#ad9cd0",
    Cinza: "#b7b7b7",
    Silver: "#d0d0d2",
    Vermelho: "#d8202f",
    Amarelo: "#ffcd02",
    Marrom: "#b5782f",
    "Meia-noite": "#404447",
    "Azul claro": "#d2e0e5",
    "Titânio-deserto": "#c1a693",
    "Titânio natural": "#c4bfb5",
    "Titânio branco": "#f2f1ed",
    "Titânio preto": "#404447",
    "White lilac": "#ebd1d4",
    "Marble black": "#404447",
    "Oceano Laranja": "#f45f29",
    "Consultar disponibilidade": "#cae0bf",
    "Transparente": "#ffffff",
    "Rosa fluorescente": "#f50f5f",
    "Vinho": "#902861",
    "Lilás": "#9273af",
};

function ProductComponent({ productKey }) {
    const { brand } = useParams();
    const location = useLocation();

    // Se o parâmetro "category" não estiver em useParams(), extrai do pathname
    let { category } = useParams();
    if (!category) {
        const pathSegments = location.pathname.split("/");
        category = pathSegments[1] || "smartphones";
    }
    const capitalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
    const capitalizedBrand =
        brand && brand.length > 0
            ? brand.charAt(0).toUpperCase() + brand.slice(1)
            : null;

    const navigate = useNavigate();

    // Busca o produto usando a marca, se disponível; caso contrário, busca globalmente na categoria
    let product =
        capitalizedBrand &&
            productData[capitalizedCategory] &&
            productData[capitalizedCategory][capitalizedBrand]
            ? productData[capitalizedCategory][capitalizedBrand].find(
                (item) => item.key === productKey
            )
            : Object.values(productData[capitalizedCategory] || {})
                .flat()
                .find((item) => item.key === productKey);

    // Para evitar que os hooks sejam chamados condicionalmente, usamos um objeto padrão se o produto não for encontrado
    const safeProduct = product || { versions: [{}] };

    // Determina qual propriedade de variação usar: "storage" ou "size"
    const variantKey =
        safeProduct.versions[0]?.storage
            ? "storage"
            : safeProduct.versions[0]?.size
                ? "size"
                : safeProduct.versions[0]?.model
                    ? "model"
                    : null;
    const variantLabel =
        variantKey === "storage"
            ? "Armazenamento"
            : variantKey === "size"
                ? "Tamanho"
                : variantKey === "model"
                    ? "Modelo"
                    : "";

    // Valores iniciais para os estados
    const [mostrarParcelamento, setMostrarParcelamento] = useState(false);
    const defaultVersion = safeProduct.versions[0] || {};
    const initialCondition = defaultVersion.condition || "";
    const initialAvailability = defaultVersion.availability || "";
    const initialColor = defaultVersion.colors ? defaultVersion.colors[0] : "";
    const initialPrice = defaultVersion.price || "R$ 0,00";
    const initialImage = safeProduct.src || "/images/default-image.jpg";
    const initialVariant =
        variantKey &&
        safeProduct.versions.filter(
            (version) => version.availability === initialAvailability
        )[0]?.[variantKey] || "";

    // Hooks incondicionais
    const [selectedVariant, setSelectedVariant] = useState(initialVariant);
    const [selectedCondition, setSelectedCondition] = useState(defaultVersion.condition || "");
    const [selectedAvailability, setSelectedAvailability] = useState(initialAvailability);
    const [selectedColor, setSelectedColor] = useState(defaultVersion.colors ? defaultVersion.colors[0] : "");
    const [finalPrice, setFinalPrice] = useState(defaultVersion.price || "R$ 0,00");
    const [selectedImage, setSelectedImage] = useState(safeProduct.src || "/images/default-image.jpg");

    const variantOptions = useMemo(() => {
        if (!variantKey) return [];
        return Array.from(
            new Set(
                safeProduct.versions
                    .filter((version) => version.availability === selectedAvailability)
                    .map((version) => version[variantKey])
                    .filter(Boolean)
            )
        );
    }, [safeProduct, variantKey, selectedAvailability]);

    useEffect(() => {
        if (variantOptions.length > 0 && !variantOptions.includes(selectedVariant)) {
            setSelectedVariant(variantOptions[0]);
        }
    }, [variantOptions, selectedVariant]);

    // Atualiza imagem e preço conforme a versão selecionada
    useEffect(() => {
        if (safeProduct) {
            const selectedVersion = safeProduct.versions.find((version) => {
                const variantMatch = variantKey
                    ? (version[variantKey] || "") === selectedVariant
                    : true;
                return (
                    variantMatch &&
                    (version.condition || "") === selectedCondition &&
                    (version.availability || "") === selectedAvailability &&
                    version.colors &&
                    version.colors.includes(selectedColor)
                );
            });
            if (selectedVersion) {
                setSelectedImage(selectedVersion.images[selectedColor]);
                setFinalPrice(selectedVersion.price);
            } else {
                setSelectedImage(safeProduct.src || "/images/default-image.jpg");
                setFinalPrice(defaultVersion.price || "R$ 0,00");
            }
        }
    }, [
        selectedVariant,
        selectedCondition,
        selectedAvailability,
        selectedColor,
        safeProduct,
        variantKey,
        defaultVersion.price,
        safeProduct.src,
    ]);

    useEffect(() => {
        const colors = getColorsForSelectedVariant();
        if (colors.length > 0 && !colors.includes(selectedColor)) {
            setSelectedColor(colors[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedVariant, safeProduct]);

    // Opções para condição e disponibilidade
    const conditionOptions = Array.from(
        new Set(safeProduct.versions.map((version) => version.condition).filter(Boolean))
    );
    const availabilityOptions = Array.from(
        new Set(safeProduct.versions.map((version) => version.availability).filter(Boolean))
    ).filter((option) => option === "Encomenda" || option === "Pronta-entrega");

    // Para as cores, se houver variação, busca as cores da versão que possui a opção selecionada; caso contrário, utiliza as cores da primeira versão
    const getColorsForSelectedVariant = () => {
        if (variantOptions.length > 0 && variantKey) {
            const selectedVersion = safeProduct.versions.find(
                (version) => version[variantKey] === selectedVariant
            );
            if (selectedVersion) {
                return selectedVersion.colors || [];
            }
        }
        return safeProduct.versions[0]?.colors || [];
    };

    const availableColors = getColorsForSelectedVariant();

    const handleBackClick = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const handleBuy = () => {
        const phone = "5522996122610";
        const productUrl = window.location.href;

        const variantMessage = selectedVariant ? `\n*${selectedVariant}*` : "";

        const message = `Olá, tudo bem?\n\nTenho interesse no seguinte produto:\n\n*${safeProduct.product}*${variantMessage}\n*${selectedColor}*\n*${selectedCondition}*\n*${selectedAvailability}*\n\nValor: *${finalPrice}*\n\nLink do produto: ${productUrl}\n\nAguardo seu retorno, obrigado!`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Renderização: se o produto não foi encontrado, exibe mensagem; caso contrário, exibe os detalhes
    if (!product) {
        return (
            <div className="absolute z-30 top-[70px] text-white pb-2">
                <img
                    src="/images/icons/close.svg"
                    className="absolute cursor-pointer w-7 z-40 top-[0px] ml-[327px] buttonHover"
                    onClick={handleBackClick}
                    alt="Fechar"
                />
                <div className="bg-dark-bg-2 p-6 rounded-xl border border-borderColor">
                    <p className="font-regular text-2xl">Produto não encontrado</p>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute z-30 top-[104px] text-white pb-2">
            {mostrarParcelamento && (
                <div>
                    <img
                        src="/images/icons/close.svg"
                        className="absolute cursor-pointer w-8 z-50 top-[2px] right-[2px] buttonHover"
                        alt="Fechar"
                        onClick={() => setMostrarParcelamento(false)}
                    />
                    <Parcelamento
                        finalPrice={finalPrice}
                        safeProduct={safeProduct}
                        variantOptions={variantOptions}
                        selectedVariant={selectedVariant}
                    />
                </div>
            )}
            <img
                src="/images/icons/close.svg"
                className="absolute cursor-pointer w-8 z-[38] top-[2px] right-[2px] buttonHover"
                onClick={handleBackClick}
                alt="Fechar"
            />
            <div className="bg-dark-bg-2 p-5 rounded-xl w-[355px] lg:w-[830px] border border-borderColor">
                <div className="block lg:hidden">
                    <p className="font-light text-[18px] flex leading-none">
                        {safeProduct.product}
                        {variantOptions.length > 0 ? ` (${selectedVariant})` : ""}
                        {availableColors.length > 0 ? ` - ${selectedColor}` : ""}
                    </p>
                </div>
                <div className="flex">
                    <div className="flex justify-center">
                        <div
                            className={`ProductImageDiv ${safeProduct.versions.some(v => v.colorType === "img") ? "p-0 overflow-hidden" : "p-14"
                                } bg-white relative border border-borderColor mt-4 lg:mt-0 w-[310px] h-[280px] lg:w-[480px] lg:h-[510px] flex items-center rounded`}
                        >
                            <img src={selectedImage} alt={safeProduct.product} />
                        </div>
                    </div>
                    <div className="PcProductView hidden lg:block ml-7">
                        <p className="font-light text-[24px] flex leading-tight">
                            {safeProduct.product}
                            {variantOptions.length > 0 ? ` (${selectedVariant})` : ""}
                            {availableColors.length > 0 ? ` - ${selectedColor}` : ""}
                        </p>
                        <p className="text-[35px] font-regular rounded mt-4 leading-tight">
                            {finalPrice}
                        </p>
                        <p className="font-regular text-verde leading-none mt-0.5">à vista no Pix/dinheiro</p>
                        {parseFloat(finalPrice.replace("R$", "").replace(".", "").replace(",", ".")) > 699 && (
                            <div className="parcelamentoDiv">
                                <p className="font-light leading-none">ou em até 18x no cartão de crédito</p>
                                <button
                                    className="border border-gray-400 rounded text-[15px] font-regular p-1.5 px-2.5 mt-3 buttonHover"
                                    onClick={() => {
                                        setMostrarParcelamento(true);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Simular parcelamento
                                </button>
                            </div>
                        )}
                        <div className="OptionsPcView">
                            {variantOptions.length > 0 && (
                                <div>
                                    <p className="font-light text-xl mt-4">
                                        {variantKey === "model"
                                            ? `Modelo - ${selectedVariant}`
                                            : variantLabel}
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {variantOptions.map((option, index) => {
                                            const isSelected = option === selectedVariant;
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedVariant(option)}
                                                    className={`border p-2 px-3 rounded mt-1 flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                        ? "border-blue-500 bg-gray-700"
                                                        : "border-blue-500 border-gray-400"
                                                        }`}
                                                >
                                                    <p className="font-light">{option}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            {availableColors.length > 0 && (
                                <div>
                                    <p className="font-light text-xl mt-3">
                                        Cor - <span className="font-medium">{selectedColor}</span>
                                    </p>
                                    <div className="grid grid-cols-5 gap-2 mt-2">
                                        {availableColors.map((color, index) => {
                                            const isSelected = color === selectedColor;
                                            const selectedVersion = safeProduct.versions.find(version =>
                                                version.colors.includes(color)
                                            );

                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`border rounded-lg w-12 h-12 flex items-center justify-center hover:border-blue-500 ${isSelected ? "border-blue-500" : "border-gray-400"
                                                        }`}
                                                >
                                                    {selectedVersion?.colorType === "img" ? (
                                                        <img
                                                            src={selectedVersion.images[color]}
                                                            alt={color}
                                                            className="w-10 h-10 rounded cursor-pointer"
                                                        />
                                                    ) : (
                                                        <div
                                                            className="w-10 h-10 rounded cursor-pointer"
                                                            style={{ backgroundColor: colorMap[color] }}
                                                        ></div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            {conditionOptions.length > 0 && (
                                <div>
                                    <p className="font-light text-xl mt-5">Condição</p>
                                    <div className="flex space-x-2">
                                        {conditionOptions.map((option, index) => {
                                            const isSelected = option === selectedCondition;
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedCondition(option)}
                                                    className={`border p-2 rounded mt-1 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                        ? "border-blue-500 bg-gray-700"
                                                        : "border-blue-500 border-gray-400"
                                                        }`}
                                                >
                                                    <p className="font-light">{option}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            {availabilityOptions.length > 0 && (
                                <div>
                                    <p className="font-light text-xl mt-5">Disponibilidade</p>
                                    <div className="flex space-x-2">
                                        {availabilityOptions.map((option, index) => {
                                            const isSelected = option === selectedAvailability;
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedAvailability(option)}
                                                    className={`border p-2 rounded mt-1 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                        ? "border-blue-500 bg-gray-700"
                                                        : "border-blue-500 border-gray-400"
                                                        }`}
                                                >
                                                    <p className="font-light">{option}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            {safeProduct.garantia && (
                                <p className="font-thin leading-none mt-5">
                                    Garantia: <span className="font-light">{safeProduct.garantia}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <p className="text-[35px] font-medium mt-4 lg:hidden leading-tight">
                    {finalPrice}
                </p>
                <div className="lg:hidden">
                    <p className="font-regular text-verde leading-none mt-0.5">à vista no Pix/dinheiro</p>
                    {parseFloat(finalPrice.replace("R$", "").replace(".", "").replace(",", ".")) > 700 && (
                        <div className="parcelamentoDiv">
                            <p className="font-light leading-none">ou em até 18x no cartão de crédito</p>
                            <button
                                className="border border-gray-400 rounded text-[15px] font-regular p-1.5 px-2.5 mt-3 buttonHover"
                                onClick={() => {
                                    setMostrarParcelamento(true);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Simular parcelamento
                            </button>
                        </div>
                    )}
                </div>
                <p className="Message font-light text-[16px] text-verde mt-5">{safeProduct.versions[0]?.message && `${safeProduct.versions[0].message}`}</p>
                <div className="Options lg:hidden">
                    {variantOptions.length > 0 && (
                        <div>
                            <p className="font-light text-xl mt-4">
                                {variantKey === "model"
                                    ? `Modelo - ${selectedVariant}`
                                    : variantLabel}
                            </p>
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {variantOptions.map((option, index) => {
                                    const isSelected = option === selectedVariant;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedVariant(option)}
                                            className={`border p-2 px-3 rounded mt-1 flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                ? "border-blue-500 bg-gray-700"
                                                : "border-blue-500 border-gray-400"
                                                }`}
                                        >
                                            <p className="font-light">{option}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {availableColors.length > 0 && (
                        <div>
                            <p className="font-light text-xl mt-5">
                                Cor - <span className="font-medium">{selectedColor}</span>
                            </p>
                            <div className="grid grid-cols-5 gap-2 mt-2">
                                {availableColors.map((color, index) => {
                                    const isSelected = color === selectedColor;
                                    const selectedVersion = safeProduct.versions.find(version =>
                                        version.colors.includes(color)
                                    );

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            className={`border rounded-lg w-12 h-12 flex items-center justify-center hover:border-blue-500 ${isSelected ? "border-blue-500" : "border-gray-400"
                                                }`}
                                        >
                                            {selectedVersion?.colorType === "img" ? (
                                                <img
                                                    src={selectedVersion.images[color]}
                                                    alt={color}
                                                    className="w-10 h-10 rounded cursor-pointer"
                                                />
                                            ) : (
                                                <div
                                                    className="w-10 h-10 rounded cursor-pointer"
                                                    style={{ backgroundColor: colorMap[color] }}
                                                ></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {conditionOptions.length > 0 && (
                        <div>
                            <p className="font-light text-xl mt-5">Condição</p>
                            <div className="flex space-x-2">
                                {conditionOptions.map((option, index) => {
                                    const isSelected = option === selectedCondition;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedCondition(option)}
                                            className={`border p-2 rounded mt-1 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                ? "border-blue-500 bg-gray-700"
                                                : "border-blue-500 border-gray-400"
                                                }`}
                                        >
                                            <p className="font-light">{option}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {availabilityOptions.length > 0 && (
                        <div>
                            <p className="font-light text-xl mt-5">Disponibilidade</p>
                            <div className="flex space-x-2">
                                {availabilityOptions.map((option, index) => {
                                    const isSelected = option === selectedAvailability;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedAvailability(option)}
                                            className={`border p-2 rounded mt-1 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${isSelected
                                                ? "border-blue-500 bg-gray-700"
                                                : "border-blue-500 border-gray-400"
                                                }`}
                                        >
                                            <p className="font-light">{option}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {safeProduct.garantia && (
                        <p className="font-thin leading-none lg:hidden mt-5">
                            Garantia: <span className="font-regular">{safeProduct.garantia}</span>
                        </p>
                    )}
                </div>
                <hr className="border-1 border-borderColor mt-6" />
                <div className="space-x-4 font-light mt-4 text-center">
                    {productData.Smartphones.Apple.some(
                        (item) => item.key === productKey
                    ) ? (
                        <p className="text-[14px] leading-none text-verde">
                            Acompanha: capinha, película e um brinde exclusivo Imports Klein!
                        </p>
                    ) : (
                        <p className="text-[16px] leading-none text-verde">
                            Acompanha um brinde exclusivo Imports Klein!
                        </p>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleBuy}
                        className="text-black font-medium bg-verde p-1 rounded-lg buttonHover w-[310px] h-[40px]"
                    >Comprar agora
                    </button>
                </div>

                <hr className="border-1 border-borderColor mt-6" />
                <div className="mt-7 flex justify-center">
                    <div>
                        <p className="text-xl font-light text-center">Formas de pagamento</p>
                        <div className="flex justify-center mt-4">
                            <div className="text-white rounded-2xl">
                                <div className="space-y-3">
                                    <div className="flex justify-center">
                                        <div
                                            className="flex justify-center items-center bg-dark-bg-3 rounded border border-borderColor leading-tight"
                                            style={{ width: "308px", height: "70px" }}
                                        >
                                            <img src="/images/maquininha.png" className="w-10" alt="Maquininha" />
                                            <p className="font-light">
                                                Cartão de débito ou crédito em até 18x
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-3">
                                        <div className="flex justify-center">
                                            <div
                                                className="flex items-center justify-center border border-borderColor bg-dark-bg-3 space-x-2 rounded leading-tight"
                                                style={{ width: "119px", height: "60px" }}
                                            >
                                                <img src="/images/pixIcon.svg" className="w-7" alt="Pix" />
                                                <p className="font-light">Pix</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div
                                                className="flex items-center justify-center bg-dark-bg-3 border border-borderColor space-x-3 rounded leading-tight"
                                                style={{ width: "177px", height: "60px" }}
                                            >
                                                <img src="/images/cash-icon.svg" className="w-8" alt="Dinheiro" />
                                                <p className="font-light">Dinheiro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <div
                                            className="flex justify-center items-center bg-dark-bg-3 border border-borderColor pl-3 pr-1 rounded leading-tight"
                                            style={{ width: "308px", height: "70px" }}
                                        >
                                            <img src="/images/aparelhoEntrada.png" className="w-8" alt="Aparelho Entrada" />
                                            <p className="font-light ml-3">
                                                Aceitamos o seu aparelho android ou iOS como entrada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;
