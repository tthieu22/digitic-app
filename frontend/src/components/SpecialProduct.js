import React from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const SpecialProduct = (props) => {
  const { id, title, brand, price, totalrating, sold, quantity } = props;
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column special-img align-items-center">
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
            <div className="slide">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-slide-product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-slide-product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-slide-product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-slide-product"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>

            <ReactStars
              count={5}
              size={24}
              value={4}
              interactive={totalrating}
              edit={false}
              fillColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">${price}</span>&nbsp;
              <strike>${price}</strike>
            </p>
            <div className="discount-still d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b>&nbsp; Days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">1</span>
                <span className="badge rounded-circle p-3 bg-warning">1</span>
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
            </div>
            <div className="prod-count">
              <p>Product:{quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / quantity + sold * 100 + "%" }}
                  aria-valuenow={quantity / quantity + sold * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button  mt-3">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
