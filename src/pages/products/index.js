import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import ProductBrand from "../../components/ProductBrand";
import SmartphonesComponent from "../../components/SmartphonesComponent";

const data = {
    Smartphones: {
        Apple: [
            {
                src: "/images/smartphones/iphone13.jpg",
                product: "Apple iPhone 13",
                price: "R$ 3.632,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 3.632,00",
                        colors: ["Azul", "Estelar", "Meia-noite"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone14.jpg",
                product: "Apple iPhone 14",
                price: "R$ 4.304,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 4.304,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone15.jpg",
                product: "Apple iPhone 15",
                price: "R$ 4.830,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 4.830,00",
                        colors: ["Azul", "Branco", "Preto", "Verde", "Rosa"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16.jpg",
                product: "Apple iPhone 16",
                price: "R$ 5.102,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 5.102,00",
                        colors: ["Ultramarino", "Branco", "Preto", "Verde", "Rosa"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 6.132,00",
                        colors: ["Ultramarino", "Branco", "Preto", "Rosa"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Apple iPhone 16 PRO",
                price: "R$ 6.432,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 6.432,00",
                        colors: ["Titânio deserto", "Titânio natural", "Titânio branco"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 7.052,00",
                        colors: ["Titânio deserto", "Titânio preto", "Titânio branco"],
                        availability: "Encomenda"
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16promax.png",
                product: "Apple iPhone 16 PRO MAX",
                price: "R$ 7.602,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 7.602,00",
                        colors: ["Titânio deserto"],
                        availability: "Encomenda"
                    }
                ]
            }
        ],
        Samsung: [
            {
                src: "/images/smartphones/samsung/galaxya15.png",
                product: "Samsung Galaxy A15 5G",
                price: "R$ 1.140,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 1.140,00",
                        colors: ["Azul claro"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/samsung/galaxys23fe.jpg",
                product: "Samsung Galaxy S23 FE",
                price: "R$ 2.690,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 2.690,00",
                        colors: ["Grafite", "Verde"],
                        availability: "Encomenda"
                    }
                ]
            },
            {
                src: "/images/smartphones/samsung/galaxys23ultra.png",
                product: "Samsung Galaxy S23 Ultra",
                price: "R$ 4.710,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 4.710,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ]
            },
        ],
        Xiaomi: [
            {
                src: "/images/smartphones/xiaomi/redmia3.png",
                product: "Redmi A3",
                price: "R$ 909,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "64GB/3GB RAM",
                        price: "R$ 909,00",
                        colors: ["Verde", "Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.039,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmia4.png",
                product: "Redmi A4 5G",
                price: "R$ 1.329,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.329,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi124g.png",
                product: "Redmi 12 4G",
                price: "R$ 1.129,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.129,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB RAM",
                        price: "R$ 1.209,00",
                        colors: ["Azul", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.309,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi125g.png",
                product: "Redmi 12 5G - Global",
                price: "R$ 1.479,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.479,00",
                        colors: ["Branco", "Cinza", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi13.png",
                product: "Redmi 13 4G",
                price: "R$ 1.229,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.229,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.379,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi13c.png",
                product: "Redmi 13C 5G - Global",
                price: "R$ 1.259,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.259,00",
                        colors: ["Branco", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi14c.png",
                product: "Redmi 14C",
                price: "R$ 1.120,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.120,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/4GB RAM",
                        price: "R$ 1.189,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.279,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.160,00",
                        colors: ["Azul"],
                        availability: "Pronta-entrega"
                    },
                ]
            },
            {
                src: "/images/smartphones/xiaomi/pocom6pro.png",
                product: "Poco M6 Pro 4G NFC",
                price: "R$ 1.629,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.629,00",
                        colors: ["Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 1.909,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocox6.png",
                product: "Poco X6 5G NFC",
                price: "R$ 2.059,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB RAM",
                        price: "R$ 2.059,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocox6pro.jpg",
                product: "Poco X6 Pro 5G NFC",
                price: "R$ 2.349,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.349,00",
                        colors: ["Cinza", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.539,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocox7.png",
                product: "Poco X7",
                price: "R$ 2.149,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.149,00",
                        colors: ["Verde", "Preto", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocox7pro.png",
                product: "Poco X7 Pro",
                price: "R$ 2.759,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB RAM",
                        price: "R$ 2.759,00",
                        colors: ["Verde", "Preto", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocof6.png",
                product: "Poco F6 5G NFC",
                price: "R$ 2.559,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.559,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pocof6pro.png",
                product: "Poco F6 Pro 5G NFC",
                price: "R$ 3.739,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.739,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "1TB/16GB RAM",
                        price: "R$ 4.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pococ65.png",
                product: "Poco C65 4G NFC",
                price: "R$ 1.279,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.279,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/pococ75.png",
                product: "Poco C75 4G NFC",
                price: "R$ 1.209,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.209,00",
                        colors: ["Verde", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.269,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redmi12s.png",
                product: "Redmi 12S 4G",
                price: "R$ 1.309,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote13.jpg",
                product: "Redmi Note 13 4G",
                price: "R$ 1.349,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.349,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB RAM",
                        price: "R$ 1.379,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.549,00",
                        colors: ["Azul", "Preto", "Verde"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote135g.png",
                product: "Redmi Note 13 5G NFC",
                price: "R$ 1.509,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.509,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.959,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote13pro.png",
                product: "Redmi Note 13 Pro 4G",
                price: "R$ 1.999,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote13pro5g.png",
                product: "Redmi Note 13 Pro 5G NFC",
                price: "R$ 2.509,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.509,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.789,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote13pro5gglobal.png",
                product: "Redmi Note 13 Pro 5G - Global",
                price: "R$ 2.149,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.149,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote13proplus.png",
                product: "Redmi Note 13 Pro Plus 5G NFC",
                price: "R$ 2.729,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.729,00",
                        colors: ["Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.109,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote14.png",
                product: "Redmi Note 14 4G",
                price: "R$ 1.469,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.469,00",
                        colors: ["Azul", "Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.619,00",
                        colors: ["Azul", "Vrde", "Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote14pro.png",
                product: "Redmi Note 14 Pro 4G",
                price: "R$ 2.229,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.229,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                src: "/images/smartphones/xiaomi/redminote14proplus.png",
                product: "Redmi Note 14 Pro Plus 5G",
                price: "R$ 3.009,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB RAM",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
        ],
        Motorola: [
            {
                src: "/images/smartphones/motorola/motog30.png",
                product: "Moto G30",
                price: "R$ 599,00",
                versions: [
                    {
                        condition: "Seminovo",
                        storage: "128GB",
                        price: "R$ 599,00",
                        colors: ["White lilac"],
                        availability: "Pronta-entrega"
                    }
                ]
            },
        ],
        Realme: [
            {
                src: "/images/smartphones/realme/note60.png",
                product: "Realme Note 60",
                price: "R$ 899,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 899,00",
                        colors: ["Marble black"],
                        availability: "Pronta-entrega"
                    }
                ]
            },
        ]
    }
};

function Products() {
    const { brand } = useParams();
    const capitalizedBrand = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : '';
    const location = useLocation();
    const [sortType, setSortType] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

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
    
        // Filtrar por disponibilidade
        if (selectedFilter === "pronta-entrega") {
            filteredProducts = filteredProducts.filter(item => 
                item.versions.some(version => version.availability === "Pronta-entrega")
            );
        } else if (selectedFilter === "encomenda") {
            filteredProducts = filteredProducts.filter(item => 
                item.versions.some(version => version.availability === "Encomenda")
            );
        }
    
        // Ordenação alfabética padrão
        filteredProducts.sort((a, b) => a.product.localeCompare(b.product));
    
        if (!sortType) return filteredProducts;
    
        return filteredProducts.sort((a, b) => {
            const priceA = a.versions
                ? Math.min(...a.versions.map(v => Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))))
                : Number(a.price.replace("R$ ", "").replace(".", "").replace(",", "."));
    
            const priceB = b.versions
                ? Math.min(...b.versions.map(v => Number(v.price.replace("R$ ", "").replace(".", "").replace(",", "."))))
                : Number(b.price.replace("R$ ", "").replace(".", "").replace(",", "."));
    
            return sortType === "price-asc" ? priceA - priceB : priceB - priceA;
        });
    };
    

    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center">
                <ProductBrand />
                <div className="absolute flex justify-center ml-72">
                    <img
                        src="/images/icons/filter.svg"
                        className="bg-dark-bg-3 mt-20 p-1 hover:bg-dark-bg-4 cursor-pointer rounded"
                        style={{ width: "40px" }}
                        onClick={toggleFilter}
                    />
                </div>
                <div className="relative">
                    {isFilterOpen && (
                        <div className="w-48 bg-dark-bg-3 border border-borderColor rounded-lg shadow-lg p-4 text-white absolute z-30 -right-16 top-5">
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
                    )}
                </div>
            </div>
            {location.pathname.startsWith("/smartphones") && (
                <div className="flex flex-col items-center">
                    <div className="space-y-2 mt-6 pb-4">
                        {capitalizedBrand ? (
                            data.Smartphones[capitalizedBrand] ? (
                                (() => {
                                    const filteredProducts = sortProducts(data.Smartphones[capitalizedBrand]);
                                    return filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                                            {filteredProducts.map((item, idx) => (
                                                <SmartphonesComponent
                                                    key={idx}
                                                    src={item.src}
                                                    product={item.product}
                                                    price={
                                                        item.storage
                                                            ? Math.min(
                                                                ...item.storage.map(s =>
                                                                    Number(s.price.replace("R$ ", "").replace(".", "").replace(",", ".")))
                                                            ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                            : item.price
                                                    }
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
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                                {Object.keys(data.Smartphones).map((brandKey) => {
                                    const filteredProducts = sortProducts(data.Smartphones[brandKey]);
                                    return filteredProducts.length > 0 ? (
                                        filteredProducts.map((item, idx) => (
                                            <SmartphonesComponent
                                                key={idx}
                                                src={item.src}
                                                product={item.product}
                                                price={
                                                    item.storage
                                                        ? Math.min(
                                                            ...item.storage.map(s =>
                                                                Number(s.price.replace("R$ ", "").replace(".", "").replace(",", ".")))
                                                        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                        : item.price
                                                }
                                            />
                                        ))
                                    ) : null;
                                })}
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;