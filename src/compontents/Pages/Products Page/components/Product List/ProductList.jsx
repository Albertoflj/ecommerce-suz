import "./productlist.scss";
import ProductCard from "../../../../Main Page Components/Trending Now/Product/ProductCard"
import { Link } from "react-router-dom";
const ProductList = (props)=>{
    return <div className="product-list padding">
        <div className="product-list-contents">
        {
            props.products.map((product)=>{
                // if(product.categories[0].name.slice(0,1).toLowerCase() === props.category){
                return (
                 <><Link to={`/product/${product.sku}`} className="product-list-link">
                    <ProductCard product={product}/>
                </Link>
                <Link to={`/product/${product.sku}`} className="product-list-link">
                    <ProductCard product={product}/>
                </Link>
                </>
                )
                // )}
                // }
            })
            
            
        }
        </div>
    </div>
}

export default ProductList;