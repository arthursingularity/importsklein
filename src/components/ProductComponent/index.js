import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Parcelamento from "../Parcelamento";

const productData = {
    Smartphones: {
        Apple: [
            {
                key: "iphone13",
                src: "/images/smartphones/apple/iphone13.jpg",
                product: "Apple iPhone 13",
                price: "R$ 3.62,00",
                garantia: "1 ano",
                message: "Acima de 2 unidades, cada um sai por R$ 11,99",
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
                garantia: "1 ano",
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
                garantia: "1 ano",
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
                src: "/images/smartphones/apple/iphone16verde.jpg",
                product: "Apple iPhone 16",
                price: "R$ 5.102,00",
                garantia: "1 ano",
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
                garantia: "1 ano",
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
                garantia: "1 ano",
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
                garantia: "6 meses",
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
                garantia: "6 meses",
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
                garantia: "6 meses",
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
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "64GB/3GB",
                        price: "R$ 909,00",
                        colors: ["Preto", "Verde", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmia3.png",
                            Verde: "/images/smartphones/xiaomi/redmia3.png",
                            Azul: "/images/smartphones/xiaomi/redmia3.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.039,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmia3.png",
                            Azul: "/images/smartphones/xiaomi/redmia3.png",
                        }

                    }
                ],
            },
            {
                key: "redmia4",
                src: "/images/smartphones/xiaomi/redmia4.png",
                product: "Redmi A4 5G",
                price: "R$ 1.329,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.329,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmia4.png",
                        }
                    }
                ],
            },
            {
                key: "redmi12",
                src: "/images/smartphones/xiaomi/redmi124g.png",
                product: "Redmi 12 4G",
                price: "R$ 1.129,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.129,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi124g.png",
                            Azul: "/images/smartphones/xiaomi/redmi124g.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB",
                        price: "R$ 1.209,00",
                        colors: ["Azul", "Silver"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/xiaomi/redmi124g.png",
                            Silver: "/images/smartphones/xiaomi/redmi124g.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.309,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi124g.png",
                            Azul: "/images/smartphones/xiaomi/redmi124g.png",
                        }
                    }
                ],
            },
            {
                key: "redmia125g",
                src: "/images/smartphones/xiaomi/redmi125g.png",
                product: "Redmi 12 5G - Global",
                price: "R$ 1.479,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.479,00",
                        colors: ["Preto", "Branco", "Cinza"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi125g.png",
                            Branco: "/images/smartphones/xiaomi/redmi125g.png",
                            Cinza: "/images/smartphones/xiaomi/redmi125g.png",
                        }
                    }
                ],
            },
            {
                key: "redmi13",
                src: "/images/smartphones/xiaomi/redmi13.png",
                product: "Redmi 13 4G",
                price: "R$ 1.229,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.229,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi13.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.379,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi13.png",
                            Azul: "/images/smartphones/xiaomi/redmi13.png",
                        }
                    },
                ],
            },
            {
                key: "redmia13c",
                src: "/images/smartphones/xiaomi/redmi13c.png",
                product: "Redmi 13C 5G - Global",
                price: "R$ 1.259,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.259,00",
                        colors: ["Branco", "Preto"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/smartphones/xiaomi/redmi13c.png",
                            Preto: "/images/smartphones/xiaomi/redmi13c.png",
                        }
                    }
                ],
            },
            {
                key: "redmi14c",
                src: "/images/smartphones/xiaomi/redmi14c.png",
                product: "Redmi 14C",
                price: "R$ 1.120,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/4GB",
                        price: "R$ 1.120,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi14c.png",
                            Azul: "/images/smartphones/xiaomi/redmi14c.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/4GB",
                        price: "R$ 1.189,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi14c.png",
                            Azul: "/images/smartphones/xiaomi/redmi14c.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.279,00",
                        colors: ["Azul"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/xiaomi/redmi14c.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.160,00",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi14c.png",
                        }
                    },
                ]
            },
            {
                key: "pocom6pro",
                src: "/images/smartphones/xiaomi/pocom6pro.png",
                product: "Poco M6 Pro 4G NFC",
                price: "R$ 1.629,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.629,00",
                        colors: ["Preto", "Roxo"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocom6pro.png",
                            Roxo: "/images/smartphones/xiaomi/pocom6pro.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 1.909,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocom6pro.png",
                            Azul: "/images/smartphones/xiaomi/pocom6pro.png",
                        }
                    }
                ],
            },
            {
                key: "pocox6",
                src: "/images/smartphones/xiaomi/pocox6.png",
                product: "Poco X6 5G NFC",
                price: "R$ 2.059,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB",
                        price: "R$ 2.059,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocox6.png",
                            Azul: "/images/smartphones/xiaomi/pocox6.png",
                        }
                    }
                ],
            },
            {
                key: "pocox6pro",
                src: "/images/smartphones/xiaomi/pocox6pro.jpg",
                product: "Poco X6 Pro 5G NFC",
                price: "R$ 2.349,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.349,00",
                        colors: ["Cinza", "Preto"],
                        availability: "Encomenda",
                        images: {
                            Cinza: "/images/smartphones/xiaomi/pocox6pro.jpg",
                            Preto: "/images/smartphones/xiaomi/pocox6pro.jpg",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.539,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocox6pro.jpg",
                        }
                    }
                ],
            },
            {
                key: "pocox7",
                src: "/images/smartphones/xiaomi/pocox7.png",
                product: "Poco X7",
                price: "R$ 2.149,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.149,00",
                        colors: ["Silver", "Preto", "Verde"],
                        availability: "Encomenda",
                        images: {
                            Silver: "/images/smartphones/xiaomi/pocox7.png",
                            Preto: "/images/smartphones/xiaomi/pocox7.png",
                            Verde: "/images/smartphones/xiaomi/pocox7.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocox7.png",
                        }
                    }
                ],
            },
            {
                key: "pocox7pro",
                src: "/images/smartphones/xiaomi/pocox7pro.png",
                product: "Poco X7 Pro",
                price: "R$ 2.759,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/12GB",
                        price: "R$ 2.759,00",
                        colors: ["Verde", "Preto", "Silver"],
                        availability: "Encomenda",
                        images: {
                            Verde: "/images/smartphones/xiaomi/pocox7pro.png",
                            Preto: "/images/smartphones/xiaomi/pocox7pro.png",
                            Silver: "/images/smartphones/xiaomi/pocox7pro.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocox7pro.png",
                        }
                    }
                ],
            },
            {
                key: "pocof6",
                src: "/images/smartphones/xiaomi/pocof6.png",
                product: "Poco F6 5G NFC",
                price: "R$ 2.559,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.559,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocof6.png",
                        }
                    }
                ],
            },
            {
                key: "pocof6pro",
                src: "/images/smartphones/xiaomi/pocof6pro.png",
                product: "Poco F6 Pro 5G NFC",
                price: "R$ 3.739,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.739,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocof6pro.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "1TB/16GB",
                        price: "R$ 4.379,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pocof6pro.png",
                        }
                    }
                ],
            },
            {
                key: "pococ65",
                src: "/images/smartphones/xiaomi/pococ65.png",
                product: "Poco C65 4G NFC",
                price: "R$ 1.279,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.279,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pococ65.png",
                        }
                    }
                ],
            },
            {
                key: "pococ75",
                src: "/images/smartphones/xiaomi/pococ75.png",
                product: "Poco C75 4G NFC",
                price: "R$ 1.209,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.209,00",
                        colors: ["Verde", "Preto"],
                        availability: "Encomenda",
                        images: {
                            Verde: "/images/smartphones/xiaomi/pococ75.png",
                            Preto: "/images/smartphones/xiaomi/pococ75.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.269,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/pococ75.png",
                        }
                    }
                ],
            },
            {
                key: "redmi12s",
                src: "/images/smartphones/xiaomi/redmi12s.png",
                product: "Redmi 12S 4G",
                price: "R$ 1.309,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redmi12s.png",
                        }
                    }
                ],
            },
            {
                key: "redminote13",
                src: "/images/smartphones/xiaomi/redminote13.png",
                product: "Redmi Note 13 4G",
                price: "R$ 1.349,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.349,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "128GB/8GB",
                        price: "R$ 1.379,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13.png",
                            Azul: "/images/smartphones/xiaomi/redminote13azul.jpg",
                        }

                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.549,00",
                        colors: ["Preto", "Azul", "Verde"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13.png",
                            Azul: "/images/smartphones/xiaomi/redminote13azul.jpg",
                            Verde: "/images/smartphones/xiaomi/redminote13azul.jpg",
                        }
                    }
                ],
            },
            {
                key: "redminote135g",
                src: "/images/smartphones/xiaomi/redminote135g.png",
                product: "Redmi Note 13 5G NFC",
                price: "R$ 1.509,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.509,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote135g.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.959,00",
                        colors: ["Preto", "Azul",],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote135g.png",
                            Azul: "/images/smartphones/xiaomi/redminote135g.png",
                        }
                    }
                ],
            },
            {
                key: "redminote13pro",
                src: "/images/smartphones/xiaomi/redminote13pro.png",
                product: "Redmi Note 13 Pro 4G",
                price: "R$ 1.999,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.999,00",
                        colors: ["Roxo"],
                        availability: "Encomenda",
                        images: {
                            Roxo: "/images/smartphones/xiaomi/redminote13pro.png",
                        }
                    }
                ],
            },
            {
                key: "redminote13pro5g",
                src: "/images/smartphones/xiaomi/redminote13pro5g.png",
                product: "Redmi Note 13 Pro 5G NFC",
                price: "R$ 2.509,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.509,00",
                        colors: ["Preto", "Azul"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13pro5g.png",
                            Azul: "/images/smartphones/xiaomi/redminote13pro5g.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 2.789,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13pro5g.png",
                        }
                    },
                ],
            },
            {
                key: "redminote13pro5gglobal",
                src: "/images/smartphones/xiaomi/redminote13pro5gglobal.png",
                product: "Redmi Note 13 Pro 5G - Global",
                price: "R$ 2.149,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.149,00",
                        colors: ["Azul"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/xiaomi/redminote13pro5gglobal.png",
                        }
                    }
                ],
            },
            {
                key: "redminote13proplus",
                src: "/images/smartphones/xiaomi/redminote13proplus.png",
                product: "Redmi Note 13 Pro Plus 5G NFC",
                price: "R$ 2.729,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 2.729,00",
                        colors: ["Preto", "Roxo"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13proplus.png",
                            Roxo: "/images/smartphones/xiaomi/redminote13proplus.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.109,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote13proplus.png",
                        }
                    },
                ],
            },
            {
                key: "redminote14",
                src: "/images/smartphones/xiaomi/redminote14.png",
                product: "Redmi Note 14 4G",
                price: "R$ 1.469,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB/6GB",
                        price: "R$ 1.469,00",
                        colors: ["Preto", "Azul", "Roxo"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote14.png",
                            Azul: "/images/smartphones/xiaomi/redminote14.png",
                            Roxo: "/images/smartphones/xiaomi/redminote14.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.619,00",
                        colors: ["Preto", "Azul", "Verde"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote14.png",
                            Azul: "/images/smartphones/xiaomi/redminote14.png",
                            Verde: "/images/smartphones/xiaomi/redminote14.png",
                        }
                    },
                ],
            },
            {
                key: "redminote14pro",
                src: "/images/smartphones/xiaomi/redminote14pro.png",
                product: "Redmi Note 14 Pro 4G",
                price: "R$ 1.850,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 1.850,00",
                        colors: ["Azul"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/smartphones/xiaomi/redminote14pro.png",
                        }
                    }
                ],
            },
            {
                key: "redminote14proplus",
                src: "/images/smartphones/xiaomi/redminote14proplus.png",
                product: "Redmi Note 14 Pro Plus 5G",
                price: "R$ 3.009,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB/8GB",
                        price: "R$ 3.009,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote14proplus.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "512GB/12GB",
                        price: "R$ 3.309,00",
                        colors: ["Preto"],
                        availability: "Encomenda",
                        images: {
                            Preto: "/images/smartphones/xiaomi/redminote14proplus.png",
                        }
                    }
                ],
            },
        ],
        Motorola: [
        ],
        Realme: [
            {
                key: "note60",
                src: "/images/smartphones/realme/note60.png",
                product: "Realme Note 60",
                price: "R$ 899,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "128GB",
                        price: "R$ 899,00",
                        colors: ["Marble black"],
                        availability: "Pronta-entrega",
                        images: {
                            "Marble black": "/images/smartphones/realme/note60.png"
                        }
                    }
                ]
            },
            {
                key: "realmec61",
                src: "/images/smartphones/realme/realmec61.png",
                product: "Realme C61 com NFC",
                price: "R$ 1.199,00",
                garantia: "1 ano",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 1.199,00",
                        colors: ["Marble black"],
                        availability: "Pronta-entrega",
                        images: {
                            "Marble black": "/images/smartphones/realme/realmec61.png",
                        }
                    }
                ]
            },
        ]
    },
    Tablets: {
        Apple: [
            {
                key: "ipad10",
                src: "/images/tablets/ipad10azul.png",
                product: "Apple iPad 10",
                price: "R$ 2.879,00",
                garantia: "1 ano",
                versions: [
                    {
                        condition: "Lacrado",
                        storage: "64GB",
                        price: "R$ 2.879,00",
                        colors: ["Azul", "Silver"],
                        availability: "Encomenda",
                        images: {
                            Azul: "/images/tablets/ipad10azul.png",
                            Silver: "/images/tablets/ipad10silver.png",
                        }
                    },
                    {
                        condition: "Lacrado",
                        storage: "256GB",
                        price: "R$ 4.120,00",
                        colors: ["Silver"],
                        availability: "Encomenda",
                        images: {
                            Silver: "/images/tablets/ipad10silver.png",
                        }
                    }
                ]
            },
        ]
    },
    Musica: {
        Apple: [
            {
                key: "airpods4",
                src: "/images/musica/airpods4.png",
                product: "Apple AirPods 4 - abafamento de ruído",
                price: "R$ 1.699,00",
                garantia: "1 ano",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.699,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/musica/airpods4.png",
                        },
                    },
                ],
            },
            {
                key: "airpodspro2",
                src: "/images/musica/airpodspro2.png",
                product: "Apple AirPods Pro 2",
                price: "R$ 1.799,00",
                garantia: "1 ano",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.799,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/musica/airpods4.png",
                        },
                    },
                ],
            },
            {
                key: "airpods3",
                src: "/images/musica/airpods3.png",
                product: "Apple AirPods 3",
                price: "R$ 1.499,00",
                garantia: "1 ano",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 1.499,00",
                        colors: ["Branco"],
                        availability: "Encomenda",
                        images: {
                            Branco: "/images/musica/airpodspro2.png",
                        },
                    },
                ],
            },
        ],
        Kaidi: [
            {
                key: "kd790",
                src: "/images/musica/kaidikd790.png",
                product: "Kaidi KD-790 TWS",
                price: "R$ 85,00",
                garantia: "6 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 85,00",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/musica/kaidikd790.png",
                        },
                    },
                ],
            },
        ],
        Padrao: [
            {
                key: "airdotspro",
                src: "/images/musica/airdotspro.png",
                product: "Airdots PRO",
                price: "R$ 38,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 38,00",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/musica/airdotspro.png",
                        },
                    },
                ],
            },
            {
                key: "minicaixadesom",
                src: "/images/musica/minicaixadesom.png",
                product: "Mini caixinha de som bluetooth",
                price: "R$ 36,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 36,00",
                        colors: ["Preto", "Azul", "Vermelho"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/musica/minicaixadesom.png",
                            Azul: "/images/musica/minicaixadesom.png",
                            Vermelho: "/images/musica/minicaixadesom.png",
                        },
                    },
                ],
            },
            {
                key: "caixadesomparapc",
                src: "/images/musica/caixadesomparapc.png",
                product: "Caixa de som USB para pc/notebook",
                price: "R$ 29,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 29,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/musica/caixadesomparapc.png",
                        },
                    },
                ],
            },
            {
                key: "fonedeouvidobluetooth",
                src: "/images/musica/fonedeouvidobluetooth.png",
                product: "Fone de ouvido bluetooth",
                price: "R$ 49,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 49,90",
                        colors: ["Vermelho"],
                        availability: "Pronta-entrega",
                        images: {
                            Vermelho: "/images/musica/fonedeouvidobluetooth.png",
                        },
                    },
                ],
            },
            {
                key: "fonedeouvidobmax",
                src: "/images/musica/fonedeouvidobmax.png",
                product: "Fone de ouvido bluetooth Bmax",
                price: "R$ 49,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 49,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/musica/fonedeouvidobmax.png",
                        },
                    },
                ],
            },
            {
                key: "minicaixadesomspeaker",
                src: "/images/musica/minicaixadesomspeaker.png",
                product: "Mini caixa de som bluetooth",
                price: "R$ 28,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 28,00",
                        colors: ["Azul", "Vermelho"],
                        availability: "Pronta-entrega",
                        images: {
                            Azul: "/images/musica/minicaixadesomspeaker.png",
                            Vermelho: "/images/musica/minicaixadesomspeaker.png",
                        },
                    },
                ],
            },
            {
                key: "fonep9",
                src: "/images/musica/fonep9.png",
                product: "Fone de ouvido P9",
                price: "R$ 63,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 63,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/musica/fonep9.png",
                        },
                    },
                ],
            },
            {
                key: "caixadesomcomsuporte",
                src: "/images/musica/caixadesomcomsuporte.png",
                product: "Caixa de som com suporte",
                price: "R$ 39,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 39,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/musica/fonep9.png",
                        },
                    },
                ],
            },
            {
                key: "3em1",
                src: "/images/eletronicos/3em1.png",
                product: "3 em 1(Relógio, carregador e caixa de som)",
                price: "R$ 119,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 119,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/3em1.png",
                        },
                    }
                ],
            },
        ]
    },
    Carregadores: {
        Padrao: [
            {
                key: "cabousbclight",
                src: "/images/carregadores/cabousbclight.png",
                product: "Cabo USB-C para Lightning (1m)",
                price: "R$ 19,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 19,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/carregadores/cabousbclight.png",
                        },
                    }
                ],
            },
            {
                key: "carregadorinducaoagold",
                src: "/images/carregadores/carregadorinducaoagold.png",
                product: "Carregador por indução 20W A'GOLD",
                price: "R$ 49,99",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 49,00",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/carregadores/carregadorinducaoagold.png",
                        },
                    }
                ],
            },
            {
                key: "powerbankagold",
                src: "/images/carregadores/powerbankagold.png",
                product: "Carregador PoweBank 75W A'GOLD 5000mAh",
                price: "R$ 89,99",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 89,99",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/carregadores/powerbankagold.png",
                        },
                    }
                ],
            },
            {
                key: "carregadorusbclightning",
                src: "/images/carregadores/carregadorusbclightning.png",
                product: "Carregador 20W USB-C - lightning",
                price: "R$ 39,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 39,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/carregadores/carregadorusbclightning.png",
                        },
                    }
                ],
            },
            {
                key: "cabousbc",
                src: "/images/carregadores/cabousbc.png",
                product: "Cabo USB-C (1m)",
                price: "R$ 19,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 19,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/carregadores/cabousbc.png",
                        },
                    }
                ],
            },
            {
                key: "3em1",
                src: "/images/eletronicos/3em1.png",
                product: "3 em 1(Relógio, carregador e caixa de som)",
                price: "R$ 119,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 119,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/3em1.png",
                        },
                    }
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
                garantia: "1 ano",
                versions: [
                    {
                        size: "40mm",
                        condition: "Lacrado",
                        price: "R$ 1.999,00",
                        colors: ["Estelar", "Meia-noite"],
                        availability: "Encomenda",
                        images: {
                            Estelar: "/images/smartwatches/applewatchse2estelar.jpg",
                            "Meia-noite": "/images/smartwatches/applewatchse2meianoite.jpg",
                        },
                    },
                    {
                        size: "44mm",
                        condition: "Lacrado",
                        price: "R$ 2.250,00",
                        colors: ["Meia-noite"],
                        availability: "Encomenda",
                        images: {
                            "Meia-noite": "/images/smartwatches/applewatchse2meianoite.jpg",
                        },
                    },
                ],

            },
            {
                key: "applewatch10",
                src: "/images/smartwatches/applewatch10silver.jpg",
                product: "Apple Watch Series 10",
                price: "R$ 3.990,00",
                garantia: "1 ano",
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
                garantia: "1 ano",
                versions: [
                    {
                        size: "49mm",
                        condition: "Lacrado",
                        price: "R$ 6.700,00",
                        colors: ["Oceano Laranja"],
                        availability: "Encomenda",
                        images: {
                            "Oceano Laranja": "/images/smartwatches/applewatchultra2.png",
                        },
                    }
                ],
            },
        ],
        Padrao: [
            {
                key: "smartwatch",
                src: "/images/smartwatches/smartwatch.png",
                product: "Smartwatch",
                price: "R$ 49,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 49,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/smartwatches/smartwatch.png",
                        },
                    }
                ],
            },
            {
                key: "t900ultra",
                src: "/images/smartwatches/t900ultra.png",
                product: "T900 Ultra com 2 pulseiras",
                price: "R$ 99,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 99,90",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/smartwatches/t900ultra.png",
                        },
                    }
                ],
            },
        ]
    },
    Eletronicos: {
        Padrao: [
            {
                key: "videogameretro",
                src: "/images/eletronicos/videogameretro.png",
                product: "Video game retrô (10.000 jogos)",
                price: "R$ 109,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 109,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/videogameretro.png",
                        },
                    }
                ],
            },
            {
                key: "minimassageador",
                src: "/images/eletronicos/minimassageador.png",
                product: "Mini massageador",
                price: "R$ 9,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 9,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/minimassageador.png",
                        },
                    }
                ],
            },
            {
                key: "camerapanoramica",
                src: "/images/eletronicos/camerapanoramica.png",
                product: "Câmera panorâmica Wi-Fi",
                price: "R$ 89,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 89,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/camerapanoramica.png",
                        },
                    }
                ],
            },
            {
                key: "camerainteligente",
                src: "/images/eletronicos/camerainteligente.png",
                product: "Câmera inteligente Wi-Fi",
                price: "R$ 119,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 119,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/camerainteligente.png",
                        },
                    }
                ],
            },
            {
                key: "umidificador",
                src: "/images/eletronicos/umidificador.png",
                product: "Umidificador e Aromaterapia",
                price: "R$ 39,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 39,90",
                        colors: ["Marrom"],
                        availability: "Pronta-entrega",
                        images: {
                            Marrom: "/images/eletronicos/umidificador.png",
                        },
                    }
                ],
            },
            {
                key: "raladordepe",
                src: "/images/eletronicos/raladordepe.png",
                product: "Ralador de pé elétrico",
                price: "R$ 15,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 15,00",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/raladordepe.png",
                        },
                    }
                ],
            },
            {
                key: "projetordeled",
                src: "/images/eletronicos/projetordeled.png",
                product: "Projetor de LED",
                price: "R$ 149,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 149,90",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/eletronicos/projetordeled.png",
                        },
                    }
                ],
            },
            {
                key: "pendrive",
                src: "/images/eletronicos/pendrive.png",
                product: "Pen drive",
                price: "R$ 26,00",
                garantia: "3 meses",
                versions: [
                    {
                        storage: "8GB",
                        condition: "Lacrado",
                        price: "R$ 26,00",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/eletronicos/pendrive.png",
                        },
                    },
                    {
                        storage: "16GB",
                        condition: "Lacrado",
                        price: "R$ 30,00",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/eletronicos/pendrive.png",
                        },
                    },
                    {
                        storage: "32GB",
                        condition: "Lacrado",
                        price: "R$ 38,00",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/eletronicos/pendrive.png",
                        },
                    },
                    {
                        storage: "64GB",
                        condition: "Lacrado",
                        price: "R$ 59,00",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/eletronicos/pendrive.png",
                        },
                    },
                ],
            },
            {
                key: "xbox360",
                src: "/images/eletronicos/xbox360.png",
                product: "Xbox 360 + kinect + 2 controles",
                price: "R$ 699,99",
                garantia: "3 meses",
                versions: [
                    {
                        message: "Acompanha jogos no HD",
                        condition: "Seminovo",
                        price: "R$ 699,99",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/xbox360.png",
                        },
                    }
                ],
            },
            {
                key: "carregadorveicular",
                src: "/images/eletronicos/carregadorcarro.jpg",
                product: "Carregador turbo veicular 55W(2x USB / 1x USB-C)",
                price: "R$ 20,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 20,00",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/carregadorcarro.jpg",
                        },
                    }
                ],
            },
            {
                key: "carregadorveicular",
                src: "/images/eletronicos/carregadorcarro.jpg",
                product: "Carregador turbo veicular 55W(2x USB / 1x USB-C)",
                price: "R$ 20,00",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 20,00",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/carregadorcarro.jpg",
                        },
                    }
                ],
            },
            {
                key: "chaleiraeletrica",
                src: "/images/eletronicos/chaleira.png",
                product: "Chaleira elétrica Futuro Casa 1,8L 220v Inox",
                price: "R$ 89,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 89,90",
                        colors: ["Preto"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/eletronicos/chaleira.png",
                        },
                    }
                ],
            },
        ]
    },
    Chaveiros: {
        Padrao: [
            {
                key: "chaveirocolecionavel",
                src: "/images/chaveiros/chaveiros.png",
                product: "Chaveiro Colecionável",
                price: "R$ 13,99",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 13,99",
                        colors: ["Minion1"],
                        colorType: "img",
                        message: "Acima de 2 unidades, cada um sai por R$ 11,99",
                        availability: "Pronta-entrega",
                        images: {
                            Minion1: "/images/chaveiros/minion1.png",
                        },
                    }
                ]
            },
        ]
    },
    Acessorios: {
        Capinha: [
            {
                key: "capinhasiliconeapple",
                src: "/images/acessorios/capinhasiliconeapple.png",
                product: "Capa de silicone para iPhone",
                price: "R$ 35,00",
                versions: [
                    {
                        model: "11",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Verde", "Azul", "Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Verde: "/images/acessorios/capasilicone/11verdeescuro.png",
                            Azul: "/images/acessorios/capasilicone/11azulescuro.png",
                            Branco: "/images/acessorios/capasilicone/11branco.png",
                        }
                    },
                    {
                        model: "12",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Preto", "Branco", "Amarelo", "Verde", "Azul"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/acessorios/capasilicone/12preto.png",
                            Branco: "/images/acessorios/capasilicone/12branco.png",
                            Amarelo: "/images/acessorios/capasilicone/12amarelo.png",
                            Verde: "/images/acessorios/capasilicone/12verdeescuro.png",
                            Azul: "/images/acessorios/capasilicone/12azul.png",
                        }
                    },
                    {
                        model: "13",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Azul", "Preto", "Branco", "Rosa fluorescente", "Vinho"],
                        availability: "Pronta-entrega",
                        images: {
                            Azul: "/images/acessorios/capasilicone/13azul.png",
                            Preto: "/images/acessorios/capasilicone/13preto.png",
                            Branco: "/images/acessorios/capasilicone/13branco.png",
                            "Rosa fluorescente": "/images/acessorios/capasilicone/13rosafluorescente.png",
                            Vinho: "/images/acessorios/capasilicone/13vinho.png",
                        }
                    },
                    {
                        model: "13 Pro Max",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Preto", "Azul", "Lilás"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/acessorios/capasilicone/13promaxpreto.png",
                            Azul: "/images/acessorios/capasilicone/13promaxazul.png",
                            Lilás: "/images/acessorios/capasilicone/13promaxlilas.png",
                        }
                    },
                    {
                        model: "14",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Preto", "Azul", "Branco", "Vinho", "Verde"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/acessorios/capasilicone/14preto.png",
                            Azul: "/images/acessorios/capasilicone/14azul.png",
                            Branco: "/images/acessorios/capasilicone/14branco.png",
                            Vinho: "/images/acessorios/capasilicone/14vinho.png",
                            Verde: "/images/acessorios/capasilicone/14verde.png",
                        }
                    },
                    {
                        model: "14 Pro Max",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Preto", "Azul", "Branco", "Lilás"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/acessorios/capasilicone/14promaxpreto.png",
                            Azul: "/images/acessorios/capasilicone/14promaxazul.png",
                            Branco: "/images/acessorios/capasilicone/14promaxbranco.png",
                            Lilás: "/images/acessorios/capasilicone/14promaxlilas.png",
                        }
                    },
                    {
                        model: "15",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Roxo", "Azul", "Azul claro", "Preto", "Verde"],
                        availability: "Pronta-entrega",
                        images: {
                            Roxo: "/images/acessorios/capasilicone/15roxo.png",
                            Azul: "/images/acessorios/capasilicone/15azul.png",
                            "Azul claro": "/images/acessorios/capasilicone/15azulclaro.png",
                            Preto: "/images/acessorios/capasilicone/15preto.png",
                            Verde: "/images/acessorios/capasilicone/15verde.png",
                        }
                    },
                    {
                        model: "15 Pro Max",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Branco"],
                        availability: "Pronta-entrega",
                        images: {
                            Branco: "/images/acessorios/capasilicone/14promaxbranco.png",
                        }
                    },
                    {
                        model: "16",
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Preto", "Branco", "Azul", "Roxo"],
                        availability: "Pronta-entrega",
                        images: {
                            Preto: "/images/acessorios/capasilicone/16preto.png",
                            Branco: "/images/acessorios/capasilicone/16branco.png",
                            Azul: "/images/acessorios/capasilicone/16azul.png",
                            Roxo: "/images/acessorios/capasilicone/16roxo.png",
                        }
                    }
                ]
            }
            ,
            {
                key: "capinhamagsafeiphone",
                src: "/images/acessorios/capinhamagsafeiphone.png",
                product: "Capa transparente com MagSafe para iPhone",
                price: "R$ 40,00",
                versions: Array.from({ length: 6 }, (_, i) => {
                    const model = (i + 11).toString();
                    return {
                        model,
                        condition: "Lacrado",
                        price: "R$ 40,00",
                        colors: ["Transparente"],
                        availability: "Pronta-entrega",
                        images: {
                            "Transparente": "/images/acessorios/capinhamagsafeiphone.png",
                        }
                    };
                })
            },
            {
                key: "capinhavidroiphone",
                src: "/images/acessorios/capinhavidroiphone.png",
                product: "Capa de vidro para iPhone",
                price: "R$ 45,00",
                versions: Array.from({ length: 6 }, (_, i) => {
                    const model = (i + 11).toString();
                    return {
                        model,
                        colorType: "img",
                        condition: "Lacrado",
                        price: "R$ 45,00",
                        colors: ["Consultar disponibilidade"],
                        availability: "Pronta-entrega",
                        images: {
                            "Consultar disponibilidade": "/images/acessorios/capinhavidroiphone.png",
                        }
                    };
                })
            },
            {
                key: "capatransparenteiphone",
                src: "/images/acessorios/capatransparenteiphone.png",
                product: "Capa transparente para iPhone",
                price: "R$ 35,00",
                versions: Array.from({ length: 6 }, (_, i) => {
                    const model = (i + 11).toString();
                    return {
                        model,
                        condition: "Lacrado",
                        price: "R$ 35,00",
                        colors: ["Transparente"],
                        availability: "Pronta-entrega",
                        images: {
                            "Transparente": "/images/acessorios/capatransparenteiphone.png",
                        }
                    };
                })
            },
            {
                key: "pelicula3dapple",
                src: "/images/acessorios/pelicula3dapple.png",
                product: "Película 3D para iPhone",
                price: "R$ 20,00",
                versions: Array.from({ length: 6 }, (_, i) => {
                    const model = (i + 11).toString();
                    return {
                        model,
                        condition: "Lacrado",
                        price: "R$ 20,00",
                        colors: ["Transparente"],
                        availability: "Pronta-entrega",
                        images: {
                            "Transparente": "/images/acessorios/pelicula3dapple.png",
                        }
                    };
                })
            },
        ],
        Padrao: [
            {
                key: "suportemagnetico",
                src: "/images/acessorios/suportemagnetico.png",
                product: "Suporte magnético",
                price: "R$ 15,90",
                garantia: "3 meses",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 15,90",
                        colors: ["Silver"],
                        availability: "Pronta-entrega",
                        images: {
                            Silver: "/images/acessorios/suportemagnetico.png",
                        },
                    }
                ],
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
