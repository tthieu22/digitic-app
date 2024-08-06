import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getAWishList } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import { addToWishList } from "../features/product/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishliststate = useSelector((state) => state?.auth?.wishlist?.wishlist);

  useEffect(() => {
    dispatch(getAWishList());
  }, [dispatch]);

  const removeWishlistFromDb = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getAWishList());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishliststate && wishliststate.length > 0 ? (
              wishliststate.map((item) => (
                <div className="col-3" key={item._id}>
                  <div className="wishlist-card">
                    <div className="wishlist-card-image position-relative">
                      <img
                        onClick={() => {
                          removeWishlistFromDb(item?._id);
                        }}
                        src={wish}
                        alt="cross"
                        className="position-absolute cross img-fluid "
                      />
                      <div className="product-card-images">
                        <img
                          src={item.images[0].url}
                          alt={item.title}
                          className="w-100 img-fluid"
                        />
                      </div>
                      <Link to={`/product/${item._id}`} className="px-2 py-3">
                        <h5 className="title">{item.title}</h5>
                        <h6 className="price">$ {item.price}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No items in your wishlist.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
