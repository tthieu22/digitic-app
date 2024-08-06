import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="websitename">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider:": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  <li className="breadcrumb-item active">Shipping</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-detail total-price">
                HieuDev(tthieu.dev.22@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select ">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Frist Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc .(optional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select
                    name=""
                    id=""
                    className="form-control form-select "
                    placeholder="State"
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Code ZIP"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to={"/cart"} className="text-dark">
                      <IoIosArrowBack /> Return to cart
                    </Link>
                    <Link to={"/cart"} className="button">
                      Continute to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-25 position-relative">
                    <img src={watch} alt="img" className="img-fluid" />
                    <span
                      className="position-absolute badge bg-secondary text-white rounded-circle  p-2"
                      style={{
                        top: "-10px",
                        right: "-10px",
                      }}
                    >
                      1
                    </span>
                  </div>
                  <div>
                    <h5 className="total">
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </h5>
                    <p className="total-price">S / #ffd700</p>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-center justify-content-between">
                <p className="total">Subtotal:</p>
                <p className="total-price">$1000</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 total">Shipping:</p>
                <p className="mb-0 total-price">$1000</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between ">
              <h4 className="total">Total:</h4>
              <h5 className="total-price">$1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
