import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quality</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} alt="prroduct " className="img-fluid" />
                </div>
                <div className="w-75">
                  <h5 className="title">HJSFG</h5>
                  <p className="color"></p>
                  <p className="size"></p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className="cart-col-3">
                <div className="d-flex gap-15 align-items-center">
                  <input
                    type="number"
                    className="form-control w-50"
                    defaultValue={1}
                    min={1}
                    name=""
                    id=""
                    max={10}
                  />
                  <MdDelete className="fs-3 " role="button" />
                </div>
              </div>
              <div className="cart-col-4"></div>
            </div>
          </div>
          <div className="col-12 py-2 d-flex justify-content-between">
            <div>
              <Link to="/product/:id" className="button">
                Continute To Shipping
              </Link>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h4>SubTotal : $1000</h4>
              <p>Taxes and shipping caculated at checkout</p>
              <Link to={"/checkout"} className="button">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
