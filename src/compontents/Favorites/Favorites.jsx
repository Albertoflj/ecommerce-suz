import "../Cart/cart.scss";

const Favorites = () => {
  return (
    <div className="cart">
      <div className="cart-container">
        <h3 className="cart-title">Favorites</h3>
        <div className="cart-items">
          <h3 className="cart-empty">No favorites.</h3>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
