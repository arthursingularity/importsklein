import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import ProductBrand from "../../components/ProductBrand";
import SmartphonesComponent from "../../components/SmartphonesComponent";
import ProductComponent from "../../components/ProductComponent";
import productData from "../../productData";

function Products() {
    const { brand, product } = useParams();
    const location = useLocation();
    const [sortType, setSortType] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const categoryFromPath = location.pathname.split('/')[1];
    const capitalizedCategory = categoryFromPath
        ? categoryFromPath.charAt(0).toUpperCase() + categoryFromPath.slice(1)
        : '';

    const capitalizedBrand = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : '';
    const navigate = useNavigate();
    const pathCategory = location.pathname.split("/")[1];
    const category = pathCategory.charAt(0).toUpperCase() + pathCategory.slice(1);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    if (product) {
        return (
            <div>
                <NavBar />
                <div className="flex justify-center">
                    <ProductComponent productKey={product} />
                </div>
            </div>
        );
    }

    const handleSort = (type) => {
        setSortType(type);
        setSelectedFilter(type);
        setIsFilterOpen(false);
    };

    const resetSort = () => {
        setSortType(null);
        setSelectedFilter(null);
        setIsFilterOpen(false);
    };

    const sortProducts = (products) => {
        if (!products) return [];

        let filteredProducts = [...products];

        // Filtrar por "Pronta-entrega" ou "Encomenda"
        if (selectedFilter === "pronta-entrega") {
            filteredProducts = filteredProducts.filter(item =>
                item.versions.some(version => version.availability === "Pronta-entrega")
            );
        } else if (selectedFilter === "encomenda") {
            filteredProducts = filteredProducts.filter(item =>
                item.versions.some(version => version.availability === "Encomenda")
            );
        }

        // Aplicar ordenação alfabética sempre
        filteredProducts.sort((a, b) => a.product.localeCompare(b.product));

        // Aplicar ordenação por preço se necessário
        if (sortType === "price-asc" || sortType === "price-desc") {
            filteredProducts.sort((a, b) => {
                const priceA = a.versions
                    ? Math.min(...a.versions.map(v => Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))))
                    : Number(a.price.replace("R$ ", "").replace(".", "").replace(",", "."));

                const priceB = b.versions
                    ? Math.min(...b.versions.map(v => Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))))
                    : Number(b.price.replace("R$ ", "").replace(".", "").replace(",", "."));

                return sortType === "price-asc" ? priceA - priceB : priceB - priceA;
            });
        }

        return filteredProducts;
    };

    const handleProductClick = (brand, key) => {
        navigate(`/${categoryFromPath}/${brand.toLowerCase()}/${key}`);
    };

    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center">
                <div className="absolute flex justify-center ml-72">
                    <img
                        src="/images/icons/filter.svg"
                        className="bg-dark-bg-3 mt-[113px] p-1 hover:bg-dark-bg-4 cursor-pointer rounded"
                        style={{ width: "33px" }}
                        onClick={toggleFilter}
                    />
                </div>
                <ProductBrand category={categoryFromPath} />
                <div className="Filter absolute z-30 top-[114px] ml-[129px]">
                    {isFilterOpen && (
                        <div className="">
                            <div className="w-48 bg-dark-bg-3 border border-borderColor rounded-lg shadow-lg p-4 text-white">
                                <img
                                    className="top-2 right-2 w-7 absolute cursor-pointer"
                                    src="/images/icons/close.svg"
                                    onClick={toggleFilter}
                                />
                                <h2 className="text-xl font-medium">Ordenar por</h2>
                                <ul className="space-y-3 mt-5">
                                    <li>
                                        <button
                                            onClick={resetSort}
                                            className={`w-full text-left font-regular hover:text-blue-400 ${selectedFilter === null ? "text-blue-400" : ""}`}
                                        >
                                            Ordem alfabética
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSort("price-asc")}
                                            className={`w-full text-left font-regular hover:text-blue-400 ${selectedFilter === "price-asc" ? "text-blue-400" : ""}`}
                                        >
                                            Preço crescente
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSort("price-desc")}
                                            className={`w-full text-left font-regular hover:text-blue-400 ${selectedFilter === "price-desc" ? "text-blue-400" : ""}`}
                                        >
                                            Preço decrescente
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSort("pronta-entrega")}
                                            className={`w-full text-left font-regular hover:text-blue-400 ${selectedFilter === "pronta-entrega" ? "text-blue-400" : ""}`}
                                        >
                                            Pronta-entrega
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSort("encomenda")}
                                            className={`w-full text-left font-regular hover:text-blue-400 ${selectedFilter === "encomenda" ? "text-blue-400" : ""}`}
                                        >
                                            Encomenda
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    )}
                </div>
            </div>
            {productData[capitalizedCategory] ? (
                <div className="flex flex-col items-center">
                    <div className="space-y-2 mt-6 pb-4">
                        {brand ? (
                            productData[capitalizedCategory][capitalizedBrand] ? (  // Use capitalizedBrand aqui
                                (() => {
                                    const filteredProducts = sortProducts(productData[capitalizedCategory][capitalizedBrand]);
                                    return filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                            {filteredProducts.map((item, idx) => (
                                                <SmartphonesComponent
                                                    key={idx}
                                                    src={item.src}
                                                    product={item.product}
                                                    colorType={item.versions[0]?.colorType}
                                                    price={
                                                        item.versions
                                                            ? Math.min(
                                                                ...item.versions.map(v =>
                                                                    Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))
                                                                )
                                                            ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                            : item.price
                                                    }
                                                    onClick={() => handleProductClick(capitalizedBrand, item.key)}  // também pode usar capitalizedBrand aqui
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-white font-light text-center">
                                            Essa marca ainda não possui um produto com o filtro selecionado.
                                        </p>
                                    );
                                })()
                            ) : (
                                <p className="text-white font-light">Esta marca ainda não possui produto cadastrado.</p>
                            )
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                {Object.keys(productData[capitalizedCategory]).map((brandKey) => {
                                    const filteredProducts = sortProducts(productData[capitalizedCategory][brandKey]);
                                    return filteredProducts.length > 0 ? (
                                        filteredProducts.map((item, idx) => (
                                            <SmartphonesComponent
                                                key={idx}
                                                src={item.src}
                                                product={item.product}
                                                colorType={item.versions[0]?.colorType}
                                                price={
                                                    item.versions
                                                        ? Math.min(
                                                            ...item.versions.map(v =>
                                                                Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))
                                                            )
                                                        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                        : item.price
                                                }
                                                onClick={() => handleProductClick(brandKey, item.key)}
                                            />
                                        ))
                                    ) : null;
                                })}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-white font-light text-center mt-6">
                    Categoria não encontrada.
                </p>
            )}
        </div>
    );
}

export default Products;