import { useState } from "react";

function Parcelamento({ finalPrice, safeProduct, variantOptions, selectedVariant }) {
    const [entrada, setEntrada] = useState("");
    // Converte finalPrice para número
    const basePrice = parseFloat(
        finalPrice.replace("R$", "").replace(".", "").replace(",", ".")
    );

    if (isNaN(basePrice) || basePrice <= 0) {
        return <p>Preço inválido</p>;
    }

    const valorComEntrada = basePrice - (entrada === "" ? 0 : parseFloat(entrada));

    const multiplicadores = [
        1.030185,
        1.044605,
        1.05263,
        1.06067,
        1.068835,
        1.07689,
        1.08354,
        1.09182,
        1.09999,
        1.1084,
        1.116695,
        1.124985,
        1.13353,
        1.141945,
        1.150485,
        1.159015,
        1.16768,
        1.17633
    ];

    const parcelas = Array.from({ length: 18 }, (_, i) => {
        const numParcelas = i + 1;
        const valorTotal = valorComEntrada * multiplicadores[i]; // Aplica o multiplicador com o valor já descontado
        const valorParcela = valorTotal / numParcelas;

        return {
            numParcelas,
            valorParcela: valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorTotal: valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        };
    });

    // Função para garantir que o valor da entrada não ultrapasse o valor do produto
    const handleEntradaChange = (e) => {
        let valor = e.target.value;
        if (valor === "") {
            setEntrada(""); // Se o campo for vazio, mantém vazio
        } else {
            valor = parseFloat(valor);
            // Converte para o valor de basePrice se o valor digitado for maior que basePrice
            if (valor > basePrice) {
                setEntrada(basePrice);
            } else {
                setEntrada(valor);
            }
        }
    };

    return (
        <div className="absolute z-40 bg-dark-bg-2 py-2 flex justify-center rounded-xl w-[355px] lg:w-[830px] border border-borderColor">
            <div className="mt-2">
                <p className="font-light text-blue-500 text-[18px] ml-4 leading-none">
                    {safeProduct.product}
                    {variantOptions.length > 0 ? ` (${selectedVariant})` : ""}
                </p>
                <div className="mt-4 flex justify-center">
                    <div>
                        <p className="font-regular">Valor da entrada</p>
                        <input
                            type="number"
                            value={entrada}
                            onChange={handleEntradaChange}
                            className="border border-gray-500 font-light text-white rounded px-2 py-1 mt-1 w-[230px] bg-transparent outline-none caret-blue-500"
                            placeholder="Digite o valor de entrada"
                            max={basePrice}
                            inputMode="decimal"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <table className="mt-4 w-[355px]">
                        <tbody>
                            {parcelas.map((parcela) => (
                                <tr key={parcela.numParcelas} className="border-t border-borderColor font-light">
                                    <td className="px-14 py-2.5">{parcela.numParcelas}x</td>
                                    <td className="">{parcela.valorParcela}</td>
                                    <td className="hidden">{parcela.valorTotal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Parcelamento;
