import Header from "../../Header/Header";
import "./MainPage.scss";
import Slides from "../../Main Page Components/SlideShow/Slides";
const MainPage = (props) => {
  return (
    <>
      <Header />
      <div className="main-page-content padding">
        <div className="content-left-side">
          <div className="main-text">
            <h1 className="page-title">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="page-description">
              Lorem ipsum dolor sit amet consectetur. Ornare consectetur in
              consectetur magna. Nec integer nisi in fusce ornare ultrices porta
              faucibus id.
            </p>
          </div>
          <button className="shop-now shadow">Shop Now</button>
        </div>
        <Slides products={props.products} />
      </div>
    </>
  );
};
export default MainPage;
