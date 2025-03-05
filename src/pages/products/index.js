import NavBar from "../../components/NavBar"
import ProductBrand from "../../components/ProductBrand"
import SmartphonesComponent from "../../components/SmartphonesComponent"

const data = {
    Apple: [
        {
            src: "/images/smartphones/iphone13.jpg",
            product: "Apple IPhone 13 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 3.632,00" },
            ]
        },
        {
            src: "/images/smartphones/iphone14.jpg",
            product: "Apple IPhone 14 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 4.304,00" },
            ]
        },
        {
            src: "/images/smartphones/iphone15.jpg",
            product: "Apple IPhone 15 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 4.830,00" },
            ]
        },
        {
            src: "/images/smartphones/iphone16.jpg",
            product: "Apple IPhone 16 (128GB)",
            storage: [
                { size: "128GB", price: "R$ 5.102,00" },
                { size: "256GB", price: "R$ 5.899,00" }
            ]
        },
        {
            src: "/images/smartphones/iphone16pro.jpg",
            product: "Apple IPhone 16 PRO (128GB)",
            storage: [
                { size: "128GB", price: "R$ 6.432,00" },
                { size: "256GB", price: "R$ 7.052,00" }
            ]
        },
        {
            src: "/images/smartphones/iphone16promax.jpg",
            product: "Apple IPhone 16 PRO MAX (256GB)",
            storage: [
                { size: "256GB", price: "R$ 7.602,00" }
            ]
        },
    ],
    Samsung: [
        {
            src: "/images/smartphones/galaxys21.jpg",
            product: "Samsung Galaxy S21 128GB",
            price: "R$ 3.499,00"
        },
    ]
};

function Products() {
    return (
        <div>
            <NavBar />
            <ProductBrand />
            <div className="flex justify-center mt-6">
                <div className="space-y-2">
                    {Object.keys(data).map((brand, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                {data[brand].map((item, idx) => (
                                    <SmartphonesComponent
                                        key={idx}
                                        src={item.src}
                                        product={item.product}
                                        price={
                                            item.storage 
                                                ? Math.min(...item.storage.map(s => Number(s.price.replace("R$ ", "").replace(".", "").replace(",", ".")))).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                                : item.price
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products