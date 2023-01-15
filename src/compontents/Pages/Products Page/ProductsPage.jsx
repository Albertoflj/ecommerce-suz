import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import OptionsBar from "./components/Options Bar/OptionsBar";
import ProductList from "./components/Product List/ProductList";

const ProductsPage = (props) => {
  return (
    <>
      <Header />
      <OptionsBar />
      <ProductList products={props.products} category={props.category} />
      <Footer />
    </>
  );
};
export default ProductsPage;
