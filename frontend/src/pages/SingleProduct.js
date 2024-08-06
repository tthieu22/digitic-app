import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";
import Container from "../components/Container";

const SingleProduct = () => {
  const [orderedProduct] = useState(true); //setOrderedProduct
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 100,
    zoomHeight: 100,
    img: "https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7",
  };

  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name" />
      <Container className="main-product-wapper home-wapper py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="other-product-images d-flex gap-15 flex-wrap">
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-detail">
              <div className="border-bottom">
                <h3 className="title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam vitae iusto expedita esse odio error.
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p>$100.00</p>

                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="t-review mb-0">(2 reviews)</p>
                </div>
                <a
                  href="#review"
                  className="text-dark text-decoration-underline review-btn"
                >
                  Wirte a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 alight-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data"></p>
                </div>
                <div className="d-flex gap-10 alight-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">havel</p>
                </div>
                <div className="d-flex gap-10 alight-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">watchs</p>
                </div>
                <div className="d-flex gap-10 alight-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data"></p>
                </div>
                <div className="d-flex gap-10 alight-items-center my-2">
                  <h3 className="product-heading">Avaiblablity:</h3>
                  <p className="product-data">In stock</p>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge text-dark border border-1 bg-white border-secendary">
                      S
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secendary">
                      L
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secendary">
                      XL
                    </span>
                    <span className="badge text-dark border border-1 bg-white border-secendary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex gap-10 flex-row mt-2 mb-3 align-items-center">
                  <h3 className="product-heading">Quality:</h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      defaultValue={1}
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div>
                    <button className="button border-0">Add to Cart</button>
                    <button to="" className="button border-0">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-10 alight-items-center my-2 gap-30">
                  <div className="d-flex gap-10 align-items-center">
                    <CiHeart />
                    <button className=" text-dark fs-7" onClick={{}}>
                      Wishlist
                    </button>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <DiGitCompare />
                    <button className=" text-dark fs-7" onClick={{}}>
                      Add to Compare
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-10 alight-items-center my-2 flex-column">
                <h3 className="product-heading">Shipping & Return:</h3>
                <div>
                  <p className="product-data mb-0">
                    Free shipping and returns available on all order
                  </p>
                  <p className="product-data mb-0">
                    Free shipping and returns <b>available on all order</b>
                  </p>
                </div>
              </div>
              <div className="d-flex gap-10 alight-items-center my-2 flex-column">
                <h3 className="product-heading">Copy Product Link:</h3>

                <button
                  onClick={() => {
                    copyToClipboard(
                      "https://th.bing.com/th/id/OIP.pxQE_1xUjRdg6m48v7Su1QHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7"
                    );
                  }}
                >
                  Copy Product Link
                </button>
              </div>
              <div className="d-flex gap-10 alight-items-center my-2 flex-column">
                <h3 className="product-heading">Material:</h3>
                <div>
                  <p className="product-data mb-0">
                    Free shipping and returns available on all order Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
                    provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container class1="desciption-wapper py-5 home-wapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium natus odio quibusdam perspiciatis est incidunt
                  explicabo voluptatum adipisci, recusandae autem quia dicta!
                  Magni alias, incidunt ex aliquid enim dolore a?
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="review-wapper py-5 home-wapper-2">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Review</h4>
              <div className="review-inner-wapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Review</h4>

                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href="#d"
                        className="text-dark text-decoration-underline"
                      >
                        Wirte a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-20">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Review Title"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Write comment here"
                      />
                    </div>
                    <button className="button d-flex ">Submit Review</button>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">David</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Doloribus ullam illo iure quidem, a quasi rerum? Quo
                      expedita nobis delectus, accusamus deserunt quos aperiam
                      quaerat quam et ipsa, accusantium illum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="popular-wapper py-5 home-wapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default SingleProduct;
