import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ProductBrand from "../../components/ProductBrand";
import SmartphonesComponent from "../../components/SmartphonesComponent";

const data = {
    Smartphones: {
        Apple: [
            {
                src: "/images/smartphones/iphone13.jpg",
                product: "Apple IPhone 13",
                price: "R$ 3.632,00",
                versions: [
                    {
                        storage: "128GB/4GB RAM",
                        price: "R$ 3.632,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone14.jpg",
                product: "Apple IPhone 14",
                storage: [{ size: "128GB", price: "R$ 4.304,00" }]
            },
            {
                src: "/images/smartphones/iphone15.jpg",
                product: "Apple IPhone 15",
                storage: [{ size: "128GB", price: "R$ 4.830,00" }]
            },
            {
                src: "/images/smartphones/iphone16.jpg",
                product: "Apple IPhone 16",
                storage: [
                    { size: "128GB", price: "R$ 5.102,00" },
                    { size: "256GB", price: "R$ 5.899,00" }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Apple IPhone 16 PRO",
                storage: [
                    { size: "128GB", price: "R$ 6.432,00" },
                    { size: "256GB", price: "R$ 7.052,00" }
                ]
            },
            {
                src: "/images/smartphones/iphone16promax.jpg",
                product: "Apple IPhone 16 PRO MAX",
                storage: [{ size: "256GB", price: "R$ 7.602,00" }]
            }
        ],
        Samsung: [
            {
                src: "/images/smartphones/galaxys21.jpg",
                product: "Samsung Galaxy S21 128GB",
                price: "R$ 3.499,00"
            }
        ],
        Xiaomi: [
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi A3",
                price: "R$ 909,00",
                versions: [
                    {
                        storage: "64GB/3GB RAM",
                        price: "R$ 909,00",
                        colors: ["Verde", "Azul", "Preto"]
                    },
                    {
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.039,00",
                        colors: ["Preto", "Azul"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi A4 5G",
                price: "R$ 1.329,00",
                versions: [
                    {
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.329,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 12 4G",
                price: "R$ 1.129,00",
                versions: [
                    {
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.129,00",
                        colors: ["Azul","Preto"]
                    },
                    {
                        storage: "128GB/8GB RAM",
                        price: "R$ 1.209,00",
                        colors: ["Azul","Silver"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.309,00",
                        colors: ["Azul","Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 12 5G - Chinês",
                price: "R$ 1.479,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.479,00",
                        colors: ["Branco", "Cinza","Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 13 4G",
                price: "R$ 1.229,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.229,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.379,00",
                        colors: ["Preto", "Azul"]
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 13C 5G - Chinês",
                price: "R$ 1.259,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.259,00",
                        colors: ["Branco", "Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 14C",
                price: "R$ 1.120,00",
                versions: [
                    {
                        storage: "128GB/4GB RAM",
                        price: "R$ 1.120,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "256GB/4GB RAM",
                        price: "R$ 1.189,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.279,00",
                        colors: ["Azul"]
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco M6 Pro 4G NFC",
                price: "R$ 1.629,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.629,00",
                        colors: ["Roxo", "Preto"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 1.909,00",
                        colors: ["Azul", "Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco X6 5G NFC",
                price: "R$ 2.059,00",
                versions: [
                    {
                        storage: "256GB/12GB RAM",
                        price: "R$ 2.059,00",
                        colors: ["Azul", "Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco X6 Pro 5G NFC",
                price: "R$ 2.349,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.349,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.539,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco X7",
                price: "R$ 2.149,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.149,00",
                        colors: ["Verde", "Preto", "Silver"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.379,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco X7 Pro",
                price: "R$ 2.759,00",
                versions: [
                    {
                        storage: "256GB/12GB RAM",
                        price: "R$ 2.759,00",
                        colors: ["Verde", "Preto", "Silver"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.009,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco F6 5G NFC",
                price: "R$ 2.559,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.559,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco F6 Pro 5G NFC",
                price: "R$ 3.739,00",
                versions: [
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.739,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "1TB/16GB RAM",
                        price: "R$ 4.379,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco C65 4G NFC",
                price: "R$ 1.279,00",
                versions: [
                    {
                        storage: "256GB/9GB RAM",
                        price: "R$ 1.279,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "1TB/16GB RAM",
                        price: "R$ 4.379,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Poco C75 4G NFC",
                price: "R$ 1.209,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.209,00",
                        colors: ["Verde", "Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.269,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi 12S 4G",
                price: "R$ 1.309,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.309,00",
                        colors: ["Preto"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 4G",
                price: "R$ 1.349,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.349,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "128GB/8GB RAM",
                        price: "R$ 1.379,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.549,00",
                        colors: ["Azul", "Preto", "Verde"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 5G NFC",
                price: "R$ 1.509,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.509,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.959,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 Pro 4G",
                price: "R$ 1.999,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 Pro 5G NFC",
                price: "R$ 2.509,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.509,00",
                        colors: ["Azul", "Preto"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 2.789,00",
                        colors: ["Preto"]
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 Pro 5G - Chinês",
                price: "R$ 2.149,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.149,00",
                        colors: ["Azul"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 13 Pro Plus 5G NFC",
                price: "R$ 2.729,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.729,00",
                        colors: ["Roxo", "Preto"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.109,00",
                        colors: ["Preto"]
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 14 4G",
                price: "R$ 1.469,00",
                versions: [
                    {
                        storage: "128GB/6GB RAM",
                        price: "R$ 1.469,00",
                        colors: ["Azul" ,"Roxo", "Preto"]
                    },
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 1.619,00",
                        colors: ["Azul" ,"Vrde", "Preto"]
                    },
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 14 Pro 4G",
                price: "R$ 2.229,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 2.229,00",
                        colors: ["Azul"]
                    }
                ]
            },
            {
                src: "/images/smartphones/iphone16pro.jpg",
                product: "Redmi Note 14 Pro Plus 5G",
                price: "R$ 3.009,00",
                versions: [
                    {
                        storage: "256GB/8GB RAM",
                        price: "R$ 3.009,00",
                        colors: ["Preto"]
                    },
                    {
                        storage: "512GB/12GB RAM",
                        price: "R$ 3.309,00",
                        colors: ["Preto"]
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

    return (
        <div>
            <NavBar />
            <ProductBrand />
            {location.pathname.startsWith("/produtos/smartphones") && (
                <div className="flex justify-center">
                    <div className="space-y-2 mt-6 pb-4">
                        {/* Exibir todos os smartphones se não houver filtro de marca */}
                        {capitalizedBrand ? (
                            data.Smartphones[capitalizedBrand] ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                    {data.Smartphones[capitalizedBrand].map((item, idx) => (
                                        <SmartphonesComponent
                                            key={idx}
                                            src={item.src}
                                            product={item.product}
                                            price={
                                                item.storage
                                                    ? Math.min(
                                                        ...item.storage.map(s =>
                                                            Number(s.price.replace("R$ ", "").replace(".", "").replace(",", "."))
                                                        )
                                                    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                    : item.price
                                            }
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-white font-light">Esta marca ainda não possui produto cadastrado.</p>
                            )
                        ) : (
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                {Object.keys(data.Smartphones).map((brandKey) =>
                                    data.Smartphones[brandKey].map((item, idx) => (
                                        <SmartphonesComponent
                                            key={idx}
                                            src={item.src}
                                            product={item.product}
                                            price={
                                                item.storage
                                                    ? Math.min(
                                                        ...item.storage.map(s =>
                                                            Number(s.price.replace("R$ ", "").replace(".", "").replace(",", "."))
                                                        )
                                                    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                    : item.price
                                            }
                                        />
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
