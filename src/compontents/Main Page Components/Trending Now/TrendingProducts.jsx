import "./trendingproducts.scss";
import { useEffect, useState, useRef } from "react";
import arrow from "../../../Assets/icons/icons/arrow.png";
import ProductCard from "./Product/ProductCard";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";



const TrendingProducts = (props) => {
    const [products, setProducts] = useState(props.products);
    // const [trendingProducts] = useState(props.products);
    // function handleResize() {
    //     if(window.innerWidth < 1360){
    //         setProducts(props.products.slice(0, 3));
    //     }
    //     else if(window.innerWidth < 1036){
    //         setProducts(props.products.slice(0, 2));
    //     }
    //     else if(window.innerWidth < 768){
    //         setProducts(props.products.slice(0, 1));
    //     }
    //     else{
    //         setProducts(props.products.slice(0, 4));
    //     }
    //     console.log("test");
    // };
    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return()=>{
    //         window.removeEventListener("resize", handleResize);
    //     }
    // }, []);
    
    const carouselRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
useEffect(() => {
    setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 20);
}, []);



    return <section className="trending-products">
        <button className="arrow-left arrow"> 
        <img src={arrow} alt="arrow-left" />
        </button>
        <motion.div className="trending-products-container" ref={carouselRef} animate={{x: 0}} transition={{duration: 0.5}}>
            <motion.div className="trending-products-cards" drag="x" dragConstraints = {{right:0, left: -carouselWidth}}>{
                products.map((product) => {
                    return (
                    <motion.div>
                    <Link to={`/product/${product.sku}`} key={product.id}>
                        <ProductCard product={product} key={product.id} />
                    </Link>
                    </motion.div>
                    )
                })

            }
            <ProductCard product={products[0]} key={products[0].id} />
            <ProductCard product={products[0]} key={products[0].id} />
            </motion.div>
        </motion.div>
        <button className="arrow-right arrow"> 
        <img src={arrow} alt="arrow-left" />
        </button>
        

    </section>
}


export default TrendingProducts;