import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import ProductBrand from "../../components/ProductBrand";
import SmartphonesComponent from "../../components/SmartphonesComponent";
import ProductComponent from "../../components/ProductComponent";

const data = {
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
    },
    Fones: {
        Apple: [
            {
                key: "airpods4",
                src: "/images/fones/airpods4.png",
                product: "AirPods 4 - abafamento de ruído",
                price: "R$ 1.699,00",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.699,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/fones/airpods4.png",
                        },
                    },
                ],
            },
            {
                key: "airpodspro2",
                src: "/images/fones/airpodspro2.png",
                product: "AirPods Pro 2",
                price: "R$ 1.799,00",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.799,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/fones/airpods4.png",
                        },
                    },
                ],
            },
            {
                key: "airpods3",
                src: "/images/fones/airpods3.png",
                product: "AirPods 3",
                price: "R$ 1.499,00",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.499,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/fones/airpodspro2.png",
                        },
                    },
                ],
            },
        ],
        Kaidi: [
            {
                key: "kd790",
                src: "/images/fones/kaidikd790.png",
                product: "Kaidi KD-790 TWS",
                price: "R$ 1.499,00",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.499,00",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/fones/kaidikd790.png",
                        },
                    },
                ],
            },
        ]
    },
    Smartwatches: {
        Apple: [
            {
                key: "applewatchse2",
                src: "/images/smartwatches/applewatchse2estelar.jpg",
                product: "Apple Watch SE 2",
                price: "R$ 1.999,00",
                versions: [
                    {
                        size: "40mm",
                        condition: "Lacrado",
                        price: "R$ 1.999,00",
                        colors: ["Meia-noite", "Estelar"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/fones/airpods4.png",
                        },
                    },
                    {
                        size: "44mm",
                        condition: "Lacrado",
                        price: "R$ 2.250,00",
                        colors: ["Meia-noite"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/fones/airpods4.png",
                        },
                    },
                ],
            },
            {
                key: "applewatch10",
                src: "/images/smartwatches/applewatch10silver.jpg",
                product: "Apple Watch Series 10",
                price: "R$ 3.990,00",
                versions: [
                    {
                        size: "46mm",
                        condition: "Lacrado",
                        price: "R$ 3.990,00",
                        colors: ["Silver", "Rose"],
                        availability: "Encomenda",
                        images: {
                            Silver: "/images/smartwatches/applewatch10silver.jpg",
                            Rose: "/images/smartwatches/applewatch10rose.jpg",
                        },
                    }
                ],
            },
            {
                key: "applewatchultra2",
                src: "/images/smartwatches/applewatchultra2.png",
                product: "Apple Watch Ultra 2",
                price: "R$ 6.700,00",
                versions: [
                    {
                        size: "49mm",
                        condition: "Lacrado",
                        price: "R$ 6.700,00",
                        colors: ["Silver", "Rose"],
                        availability: "Encomenda",
                        images: {
                            "Orange Ocean Band": "/images/smartwatches/applewatchultra2.png",
                        },
                    }
                ],
            },
        ],
    }
};

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
                        className="bg-dark-bg-3 mt-20 p-1 hover:bg-dark-bg-4 cursor-pointer rounded"
                        style={{ width: "33px" }}
                        onClick={toggleFilter}
                    />
                </div>
                <ProductBrand category={categoryFromPath} />

                <div className="Filter absolute z-30 top-[91px] ml-[129px]">
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
            {data[capitalizedCategory] ? (
                <div className="flex flex-col items-center">
                    <div className="space-y-2 mt-6 pb-4">
                        {brand ? (
                            data[capitalizedCategory][capitalizedBrand] ? (  // Use capitalizedBrand aqui
                                (() => {
                                    const filteredProducts = sortProducts(data[capitalizedCategory][capitalizedBrand]);
                                    return filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                                            {filteredProducts.map((item, idx) => (
                                                <SmartphonesComponent
                                                    key={idx}
                                                    src={item.src}
                                                    product={item.product}
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
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
                                {Object.keys(data[capitalizedCategory]).map((brandKey) => {
                                    const filteredProducts = sortProducts(data[capitalizedCategory][brandKey]);
                                    return filteredProducts.length > 0 ? (
                                        filteredProducts.map((item, idx) => (
                                            <SmartphonesComponent
                                                key={idx}
                                                src={item.src}
                                                product={item.product}
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