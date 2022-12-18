import Header from "../../Header/Header";
import "./MainPage.scss";
import Slides from "../../Main Page Components/SlideShow/Slides";
import MenCategoryImage from "../../../Assets/Products/men/photo_1a.jpg";
import WomenCategoryImage from "../../../Assets/Products/women/1.jpg";
import { Link } from "react-router-dom";
import TrendingProducts from "../../Main Page Components/Trending Now/TrendingProducts";
import Footer from "../../Footer/Footer";

const MainPage = (props) => {
  const scrollToCategories = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <div className="main-page-content padding">
        <section className="hero-section">
          <div className="content-left-side">
            <div className="main-text">
              <h1 className="page-title">
                A world of shoes at your fingertips.
              </h1>
              <p className="page-description">
                {/* Lorem ipsum dolor sit amet consectetur. Ornare consectetur in
                consectetur magna. Nec integer nisi in fusce ornare ultrices
                porta faucibus id. */}
                Our collection features the latest trends and classic designs
                from top brands, so you can always find a shoe that fits your
                personal style.
              </p>
            </div>
            <button
              className="shop-now shadow desktop-medium"
              onChange={() => {
                scrollToCategories();
              }}
            >
              Shop Now
            </button>
          </div>
          <Slides products={props.products} scroll={scrollToCategories} />
        </section>

        <section className="categories-section">
          <div className="categories-men cat-centr">
            <Link to="/men" className="cat-man">
              <div className="category-image">
                {/* <img src={MenCategoryImage} alt="men-category" /> */}
              </div>
            </Link>
            <div className="category-text">
              <Link to="/men">
                <h2>Men's Collection</h2>
              </Link>
            </div>
          </div>
          <div className="categories-women cat-centr">
            <Link to="/women" className="cat-woman">
              <div className="category-image">
                {/* <img src={WomenCategoryImage} alt="women-cateogry" /> */}
              </div>
            </Link>
            <div className="category-text">
              <Link to="/women">
                <h2>Women's Collection</h2>
              </Link>
            </div>
          </div>
        </section>
        <TrendingProducts products={props.products} />
      </div>
      <Footer />
    </>
  );
};
export default MainPage;
