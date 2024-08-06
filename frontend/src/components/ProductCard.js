import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/product/productSlice";
const ProductCard = ({ grid, data }) => {
  let location = useLocation();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const columnClasses = `col-${pathname === "/store" ? grid : 3} gr-${grid}`;
  const disdesc = ` description ${grid === 12 ? "d-block" : "d-none"}`;
  const addToWishlist = (id) => {

    dispatch(addToWishList(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className={columnClasses} key={index}>
            <div className="w-100">
              <div className="product-card position-relative mb-4">
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent "
                    onClick={(e) => {
                      addToWishlist(item._id);
                    }}
                  >
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <Link
                  className="card-content"
                  to={
                    location.pathname.startsWith("/product") &&
                    location.pathname !== "/product"
                      ? `${location.pathname}/${item?._id}`
                      : `/product/${item?._id}`
                  }
                >
                  <div className="product-images">
                    <img
                      src={item.images[0].url || "fallback-image-url.jpg"}
                      alt={item?.title}
                    />
                    <img src="images/headphone.jpg" alt="product card" />
                  </div>
                  <div className="product-details">
                    <h6 className="brand">{item?.brand}</h6>
                    <h5 className="product-title">{item?.title}</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item?.totalrating.toString()}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p
                      className={disdesc}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>

                    <p className="price">$ {item?.price}</p>
                  </div>
                </Link>
                <div className="action-bar position-absolute ">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent ">
                      <img src={prodcompare} alt="prodcompare" />
                    </button>

                    <button className="border-0 bg-transparent ">
                      <img src={view} alt="add-cart" />
                    </button>
                    <button className="border-0 bg-transparent ">
                      <img src={addcart} alt="add-cart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ); 
      })}
    </>
  );
};

export default ProductCard;
