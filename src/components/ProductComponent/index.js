import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

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
                price: "R$ 85,00",
                versions: [
                    {
                        condition: "Lacrado",
                        price: "R$ 85,00",
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
                        colors: ["Oceano Laranja"],
                        availability: "Encomenda",
                        images: {
                            "Oceano Laranja": "/images/smartwatches/applewatchultra2.png",
                        },
                    }
                ],
            },
        ],
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
  Silver: "#d0d0d2",
  "Meia-noite": "#404447",
  "Azul claro": "#d2e0e5",
  "Titânio-deserto": "#c1a693",
  "Titânio natural": "#c4bfb5",
  "Titânio branco": "#f2f1ed",
  "Titânio preto": "#404447",
  "White lilac": "#ebd1d4",
  "Marble black": "#404447",
  "Oceano Laranja": "#f45f29",
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
      : null;
  const variantLabel =
    variantKey === "storage"
      ? "Armazenamento"
      : variantKey === "size"
      ? "Tamanho"
      : "";
  const variantOptions = variantKey
    ? Array.from(
        new Set(
          safeProduct.versions
            .map((version) => version[variantKey])
            .filter(Boolean)
        )
      )
    : [];

  // Valores iniciais para os estados
  const defaultVersion = safeProduct.versions[0] || {};
  const initialVariant = variantOptions[0] || "";
  const initialCondition = defaultVersion.condition || "";
  const initialAvailability = defaultVersion.availability || "";
  const initialColor = defaultVersion.colors ? defaultVersion.colors[0] : "";
  const initialPrice = defaultVersion.price || "R$ 0,00";
  const initialImage = safeProduct.src || "/images/default-image.jpg";

  // Hooks incondicionais
  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [selectedCondition, setSelectedCondition] = useState(initialCondition);
  const [selectedAvailability, setSelectedAvailability] = useState(initialAvailability);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [finalPrice, setFinalPrice] = useState(initialPrice);
  const [selectedImage, setSelectedImage] = useState(initialImage);

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
    // Número de WhatsApp (remova os espaços e formate conforme necessário)
    const phone = "5522996122610";
    // Monta a mensagem conforme os dados do Resume
    const message = `Olá, tudo bem?\n\nDesejo finalizar a compra do seguinte produto:\n\n${safeProduct.product}\n${selectedVariant}\n${selectedColor}\n${selectedCondition}\n${selectedAvailability}\n\n${finalPrice}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Renderização: se o produto não foi encontrado, exibe mensagem; caso contrário, exibe os detalhes
  if (!product) {
    return (
      <div className="absolute z-30 top-[70px] text-white pb-2">
        <img
          src="/images/icons/close.svg"
          className="absolute cursor-pointer w-8 z-40 top-[6px] ml-[317px] buttonHover"
          onClick={handleBackClick}
          alt="Fechar"
        />
        <div className="bg-dark-bg-2 p-6 rounded-xl w-[355px] border border-borderColor">
          <p className="font-regular text-2xl">Produto não encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute z-30 top-[70px] text-white pb-2">
      <img
        src="/images/icons/close.svg"
        className="absolute cursor-pointer w-8 z-40 top-[6px] ml-[317px] buttonHover"
        onClick={handleBackClick}
        alt="Fechar"
      />
      <div className="bg-dark-bg-2 p-6 rounded-xl w-[355px] border border-borderColor">
        <p className="font-regular text-2xl">{safeProduct.product}</p>
        <div className="flex justify-center mt-6">
          <div className="bg-white p-14 w-[310px] h-[280px] flex items-center rounded">
            <img src={selectedImage} alt={safeProduct.product} />
          </div>
        </div>
        <div className="Options">
          {variantOptions.length > 0 && (
            <div>
              <p className="font-light text-xl mt-5">{variantLabel}</p>
              <div className="flex space-x-2">
                {variantOptions.map((option, index) => {
                  const isSelected = option === selectedVariant;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedVariant(option)}
                      className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${
                        isSelected
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
              <p className="font-light text-xl mt-5">Cor - {selectedColor}</p>
              <div className="flex space-x-2">
                {availableColors.map((color, index) => {
                  const isSelected = color === selectedColor;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`border rounded-lg w-12 h-12 flex items-center justify-center mt-1 hover:border-blue-500 ${
                        isSelected ? "border-blue-500" : "border-gray-400"
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded flex justify-center cursor-pointer"
                        style={{ backgroundColor: colorMap[color] }}
                      ></div>
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
                      className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${
                        isSelected
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
                      className={`border p-2 rounded mt-2 px-2.5 h-[37px] flex justify-center items-center cursor-pointer hover:bg-gray-700 hover:border-blue-500 ${
                        isSelected
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
        </div>
        <div className="Resume mt-8 bg-dark-bg-3 border border-borderColor rounded p-5">
          <p className="font-regular text-center leading-none mt-1 text-[27px]">
            {safeProduct.product}
          </p>
          <div className="flex space-x-4 font-light justify-center mt-3">
            {variantOptions.length > 0 && (
              <p className="text-lg leading-tight">{selectedVariant}</p>
            )}
            {availableColors.length > 0 && (
              <p className="text-lg leading-tight">{selectedColor}</p>
            )}
          </div>
          <div className="flex space-x-4 font-light justify-center">
            {conditionOptions.length > 0 && (
              <p className="text-lg leading-tight">{selectedCondition}</p>
            )}
            {availabilityOptions.length > 0 && (
              <p className="text-lg leading-tight">{selectedAvailability}</p>
            )}
          </div>
          <hr className="border-1 border-borderColor mt-4" />
          <div className="flex justify-center items-center py-6 space-x-6">
            <p className="text-center text-xl font-medium bg-dark-bg-3 rounded">
              {finalPrice}
            </p>
            <p
                onClick={handleBuy}
                className="text-center text-black font-regular bg-verde bg-dark-bg-3 p-1 w-[115px] rounded buttonHover"
            >
              Comprar
            </p>
          </div>
          <hr className="border-1 border-borderColor" />
          <div className="flex space-x-4 font-light justify-center mt-5">
            {productData.Smartphones.Apple.some(
              (item) => item.key === productKey
            ) ? (
              <p className="text-lg leading-tight text-verde text-center">
                Acompanha: capinha, película e um brinde exclusivo Imports Klein!
              </p>
            ) : (
              <p className="text-lg leading-tight text-verde text-center">
                Acompanha um brinde exclusivo Imports Klein!
              </p>
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
