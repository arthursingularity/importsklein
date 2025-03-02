import './productcomponent.css'

function ProductComponent({ src, product, price }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div style={{ width: 141 }} className="snap-center buttonHover border border-borderColor rounded-lg overflow-hidden">
      <div className="bg-white flex justify-center items-center" style={{ width: 141, height: 115 }}>
        <img className="p-7" src={src} alt="Produto" />
      </div>
      <div className="bg-dark-bg-3">
        <p className="text-blue-400 font-regular text-base p-3 pb-2 leading-tight">
          {truncateText(product, 48)}
        </p>
        <p className="text-white font-medium text-lg px-3 pb-3 leading-tight">{price}</p>
      </div>
    </div>
  );
}

export default ProductComponent;