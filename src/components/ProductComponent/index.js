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
                        colors: ["Verde", "Ultramarino", "Branco", "Preto", "Rosa"],
                        availability: "Encomenda",
                        images: {
                            Verde: "/images/smartphones/apple/iphone16verde.jpg",
                            Preto: "/images/smartphones/apple/iphone16.jpg",
                            Ultramarino: "/images/smartphones/apple/iphone16ultramarino.jpg",
                            Branco: "/images/smartphones/apple/iphone16branco.jpg",
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
        ],
        Samsung: [
            {
                key: "galaxya15",
                src: "/images/smartphones/samsung/galaxya15.png",
                product: "Samsung Galaxy A15 5G",
                price: "R$ 1.140,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 1.140,00",
                        colors: ["Azul claro"],
                        availability: "Encomenda",
                        images: {
                            "Azul claro": "/images/smartphones/samsung/galaxya15.png",
                        }
                    }
                ]
            },
            {
                key: "galaxys23fe",
                src: "/images/smartphones/samsung/galaxys23fe.jpg",
                product: "Samsung Galaxy S23 FE",
                price: "R$ 2.690,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 2.690,00",
                        colors: ["Grafite", "Verde"],
                        availability: "Encomenda",
                        images: {
                            Grafite: "/images/smartphones/samsung/galaxys23fe.jpg",
                            Verde: "/images/smartphones/samsung/galaxys23feverde.jpg",
                        }
                    }
                ]
            },
            {
                key: "galaxys23ultra",
                src: "/images/smartphones/samsung/galaxys23ultra.png",
                product: "Samsung Galaxy S23 Ultra",
                price: "R$ 4.710,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 4.710,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/samsung/galaxys23ultra.png",
                        }
                    }
                ]
            },
        ],
        Xiaomi: [
            {
                key: "redmia3",
                src: "/images/smartphones/xiaomi/redmia3.png",
                product: "Redmi A3",
                price: "R$ 909,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "64GB/3GB",
                        price: "R$ 909,00",
                        colors: ["Verde", "Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.039,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmia4",
                src: "/images/smartphones/xiaomi/redmia4.png",
                product: "Redmi A4 5G",
                price: "R$ 1.329,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.329,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmi12",
                src: "/images/smartphones/xiaomi/redmi124g.png",
                product: "Redmi 12 4G",
                price: "R$ 1.129,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.129,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB",
                        price: "R$ 1.209,00",
                        colors: ["Azul", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.309,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmia125g",
                src: "/images/smartphones/xiaomi/redmi125g.png",
                product: "Redmi 12 5G - Global",
                price: "R$ 1.479,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.479,00",
                        colors: ["Branco", "Cinza", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmi13",
                src: "/images/smartphones/xiaomi/redmi13.png",
                product: "Redmi 13 4G",
                price: "R$ 1.229,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.229,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.379,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                key: "redmia13c",
                src: "/images/smartphones/xiaomi/redmi13c.png",
                product: "Redmi 13C 5G - Global",
                price: "R$ 1.259,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.259,00",
                        colors: ["Branco", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmia14c",
                src: "/images/smartphones/xiaomi/redmi14c.png",
                product: "Redmi 14C",
                price: "R$ 1.120,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.120,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/4GB",
                        price: "R$ 1.189,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.279,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.160,00",
                        colors: ["Azul"],
                        availability: "Pronta-entrega"
                    },
                ]
            },
            {
                key: "pocom6pro",
                src: "/images/smartphones/xiaomi/pocom6pro.png",
                product: "Poco M6 Pro 4G NFC",
                price: "R$ 1.629,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.629,00",
                        colors: ["Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 1.909,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocox6",
                src: "/images/smartphones/xiaomi/pocox6.png",
                product: "Poco X6 5G NFC",
                price: "R$ 2.059,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB",
                        price: "R$ 2.059,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocox6pro",
                src: "/images/smartphones/xiaomi/pocox6pro.jpg",
                product: "Poco X6 Pro 5G NFC",
                price: "R$ 2.349,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.349,00",
                        colors: ["Cinza", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.539,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocox7",
                src: "/images/smartphones/xiaomi/pocox7.png",
                product: "Poco X7",
                price: "R$ 2.149,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.149,00",
                        colors: ["Verde", "Preto", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocox7pro",
                src: "/images/smartphones/xiaomi/pocox7pro.png",
                product: "Poco X7 Pro",
                price: "R$ 2.759,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB",
                        price: "R$ 2.759,00",
                        colors: ["Verde", "Preto", "Silver"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocof6",
                src: "/images/smartphones/xiaomi/pocof6.png",
                product: "Poco F6 5G NFC",
                price: "R$ 2.559,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.559,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pocof6pro",
                src: "/images/smartphones/xiaomi/pocof6pro.png",
                product: "Poco F6 Pro 5G NFC",
                price: "R$ 3.739,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.739,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "1TB/16GB",
                        price: "R$ 4.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pococ65",
                src: "/images/smartphones/xiaomi/pococ65.png",
                product: "Poco C65 4G NFC",
                price: "R$ 1.279,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.279,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "pococ75",
                src: "/images/smartphones/xiaomi/pococ75.png",
                product: "Poco C75 4G NFC",
                price: "R$ 1.209,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.209,00",
                        colors: ["Verde", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.269,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redmi12s",
                src: "/images/smartphones/xiaomi/redmi12s.png",
                product: "Redmi 12S 4G",
                price: "R$ 1.309,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote13",
                src: "/images/smartphones/xiaomi/redminote13.jpg",
                product: "Redmi Note 13 4G",
                price: "R$ 1.349,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.349,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB",
                        price: "R$ 1.379,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.549,00",
                        colors: ["Azul", "Preto", "Verde"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote135g",
                src: "/images/smartphones/xiaomi/redminote135g.png",
                product: "Redmi Note 13 5G NFC",
                price: "R$ 1.509,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.509,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.959,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote13pro",
                src: "/images/smartphones/xiaomi/redminote13pro.png",
                product: "Redmi Note 13 Pro 4G",
                price: "R$ 1.999,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote13pro5g",
                src: "/images/smartphones/xiaomi/redminote13pro5g.png",
                product: "Redmi Note 13 Pro 5G NFC",
                price: "R$ 2.509,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.509,00",
                        colors: ["Azul", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.789,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                key: "redminote13pro5gglobal",
                src: "/images/smartphones/xiaomi/redminote13pro5gglobal.png",
                product: "Redmi Note 13 Pro 5G - Global",
                price: "R$ 2.149,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.149,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote13proplus",
                src: "/images/smartphones/xiaomi/redminote13proplus.png",
                product: "Redmi Note 13 Pro Plus 5G NFC",
                price: "R$ 2.729,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.729,00",
                        colors: ["Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.109,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                key: "redminote14",
                src: "/images/smartphones/xiaomi/redminote14.png",
                product: "Redmi Note 14 4G",
                price: "R$ 1.469,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.469,00",
                        colors: ["Azul", "Roxo", "Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.619,00",
                        colors: ["Azul", "Vrde", "Preto"],
                        availability: "Encomenda"
                    },
                ],
            },
            {
                key: "redminote14pro",
                src: "/images/smartphones/xiaomi/redminote14pro.png",
                product: "Redmi Note 14 Pro 4G",
                price: "R$ 2.229,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.229,00",
                        colors: ["Azul"],
                        availability: "Encomenda"
                    }
                ],
            },
            {
                key: "redminote14proplus",
                src: "/images/smartphones/xiaomi/redminote14proplus.png",
                product: "Redmi Note 14 Pro Plus 5G",
                price: "R$ 3.009,00",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda"
                    }
                ],
            },
        ],
        Motorola: [
            {
                key: "motog30",
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
                key: "note60",
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
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
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
                    <p className="font-regular text-center leading-none mt-1 text-[27px]">{productName}</p>
                    <div className="flex space-x-4 font-light justify-center mt-3">
                        <p className="text-lg leading-tight">{selectedStorage}</p>
                        <p className="text-lg leading-tight">{selectedColor}</p>
                    </div>
                    <div className="flex space-x-4 font-light justify-center">
                        <p className="text-lg leading-tight">{selectedCondition}</p>
                        <p className="text-lg leading-tight">{selectedAvailability}</p>
                    </div>
                    <hr className="border-1 border-borderColor mt-4" />
                    <div className="flex justify-center items-center py-6 space-x-6">
                        <p className="text-center text-xl font-medium bg-dark-bg-3 rounded">{finalPrice}</p>
                        <p className="text-center text-black font-regular bg-verde bg-dark-bg-3 p-1 w-[115px] rounded buttonHover">Comprar</p>
                    </div>
                    <hr className="border-1 border-borderColor" />
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