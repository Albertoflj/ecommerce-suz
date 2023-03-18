import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./aboutpage.scss";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="about-page-content padding">
        <section className="section-main">
          <div className="section-main-div">
            <h1>Șuz</h1>
            <h1>E-commerce Showcase App</h1>
            <p>
              Șuz (Shoes) is a fictional e-commerce website where users can buy
              sneakers. The website uses some of the latest frontend
              technologies. In creating this website, I emphasized my knowledge
              of Redux, CommerceJS, and others. All icons are from Bootstrap
              Icons.
            </p>
          </div>
        </section>
        <section className="section-tech">
          <h4>Technologies I've used in this project:</h4>
          <div className="technologies-div">
            <div className="tech">
              <div className="technologies-react technology"></div>
              <h5>React</h5>
            </div>
            <div className="tech">
              <div className="technologies-commerce technology"></div>
              <h5>CommerceJS</h5>
            </div>
            <div className="tech">
              <div className="technologies-sass technology"></div>
              <h5>SASS</h5>
            </div>
            <div className="tech">
              <div className="technologies-mui technology"></div>
              <h5>Material UI</h5>
            </div>
            <div className="tech">
              <div className="technologies-redux technology"></div>
              <h5>Redux</h5>
            </div>
          </div>
        </section>
        <section className="section-projects">
          <h4>Other Projects I've made:</h4>
          <div className="projects">
            <div className="individual-project">
              <div className="project-container">
                <a
                  href="https://github.com/Albertoflj/ToDo-App"
                  className="project to-do-project"
                ></a>
              </div>
              <h4>To Do List</h4>
            </div>
            <div className="individual-project">
              <div className="project-container">
                <a
                  href="https://albertoflj.github.io/vivo-blog/"
                  className="project vivo-blog-project"
                ></a>
              </div>
              <h4>Vivo Blog</h4>
            </div>
            <div className="individual-project">
              <div className="project-container">
                <a
                  href="https://albertoflj.github.io/calculator-app/"
                  className="project calculator-app-project"
                ></a>
              </div>
              <h4>Calculator App</h4>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
