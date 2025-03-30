function Parcelamento({ finalPrice, safeProduct, variantOptions, availableColors, selectedVariant, selectedColor }) {
    // Converte finalPrice para número removendo caracteres não numéricos
    const basePrice = parseFloat(
        finalPrice.replace("R$", "").replace(".", "").replace(",", ".")
    );

    // Verifica se o preço é válido
    if (isNaN(basePrice) || basePrice <= 0) {
        return <p>Preço inválido</p>;
    }

    // Multiplicadores calculados com base nos valores totais fornecidos para cada quantidade de parcelas
    const multiplicadores = [
        1.030185, // 1x: 2060,37 / 2000
        1.044605, // 2x: 2089,21 / 2000
        1.05263,  // 3x: 2105,26 / 2000
        1.06067,  // 4x: 2121,34 / 2000
        1.068835, // 5x: 2137,67 / 2000
        1.07689,  // 6x: 2153,78 / 2000
        1.08354,  // 7x: 2167,08 / 2000
        1.09182,  // 8x: 2183,64 / 2000
        1.09999,  // 9x: 2199,98 / 2000
        1.1084,   // 10x: 2216,80 / 2000
        1.116695, // 11x: 2233,39 / 2000
        1.124985, // 12x: 2249,97 / 2000
        1.13353,  // 13x: 2267,06 / 2000
        1.141945, // 14x: 2283,89 / 2000
        1.150485, // 15x: 2300,97 / 2000
        1.159015, // 16x: 2318,03 / 2000
        1.16768,  // 17x: 2335,36 / 2000
        1.17633   // 18x: 2352,66 / 2000
    ];

    // Gera os valores das parcelas aplicando os multiplicadores
    const parcelas = Array.from({ length: 18 }, (_, i) => {
        const numParcelas = i + 1;
        const valorTotal = basePrice * multiplicadores[i];
        const valorParcela = valorTotal / numParcelas;

        return {
            numParcelas,
            valorParcela: valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorTotal: valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        };
    });

    return (
        <div className="absolute z-40 bg-dark-bg-2 py-2 flex justify-center rounded-xl w-[355px] lg:w-[830px] border border-borderColor">
            <div className="mt-2">
                <p className="font-light text-blue-500 text-[18px] flex justify-center leading-none">
                    {safeProduct.product}
                    {variantOptions.length > 0 ? ` (${selectedVariant})` : ""}
                </p>
                <table className="mt-4">
                    <thead>
                        <tr className="font-regular border-t border-borderColor">
                            <th className="px-1.5 py-2.5">Quantd</th>
                            <th className="px-1.5 py-2.5">Valor da parcela</th>
                            <th className="px-1.5 py-2.5">Valor total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcelas.map((parcela) => (
                            <tr key={parcela.numParcelas} className="border-t border-borderColor font-light">
                                <td className="px-1.5 py-2.5">{parcela.numParcelas}x</td>
                                <td className="px-1.5">{parcela.valorParcela}</td>
                                <td className="px-1.5">{parcela.valorTotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Parcelamento;
