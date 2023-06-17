import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div className="card">
        <div className="card__heart">
          <i className="bx bx-heart"></i>
        </div>
        <div className="card__cart">
          <i className="bx bx-cart-alt"></i>
        </div>
        <div className="card__img">
          <img
            src="https://i.pinimg.com/originals/74/92/e4/7492e47797ffaa1970fab2df711abed8.png"
            alt=""
          />
        </div>
        <div className="card__title">Nike Zoom KD 12</div>
        <div className="card__price">$99</div>
        <div className="card__size">
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div className="card__color">
          <h3>Color:</h3>
          <span className="card__color--green"></span>
          <span className="card__color--red"></span>
          <span className="card__color--black"></span>
        </div>
        <div className="card__action">
          <button>Buy Now</button>
          <button>Add Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
