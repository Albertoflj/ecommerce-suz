import { useState } from "react";

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);
    return (
    <div className="trending-product-card">
    <img src={
        product.image.url
    } alt="product1" className="trending-product-image" />
    <div className="trending-product-text">
        <h3 className="trending-product-title">{product.name}</h3>
        <h6 className="trending-product-category">{product.categories[0].name}</h6>
        <h4 className="trending-product-price">{product.price.formatted_with_symbol}</h4>
        </div>
    </div>
    )
}

export default ProductCard;