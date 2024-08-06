import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";

const OurSrore = () => {
  const [grid, setgrid] = useState(4);
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state?.product?.product);
  console.log(productstate);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumb title="OurStore" />
      <Container class1="store-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0 mb-0">
                  <li>Wath</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check d-flex gap-10 px-0">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      is=""
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-lable">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check  d-flex gap-10 px-0">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      is=""
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-lable">
                      Our of Stock (0)
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control "
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control "
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>

                <h5 className="sub-title">Color</h5>
                <div>
                  <Color />
                </div>

                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check d-flex gap-10">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      id="color-1"
                      className="form-check-input"
                    />
                    <label htmlFor="color-1" className="form-check-lable">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check d-flex gap-10">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      id="color-1"
                      className="form-check-input"
                    />
                    <label htmlFor="color-1" className="form-check-lable">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check d-flex gap-10">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      id="color-2"
                      className="form-check-input"
                    />
                    <label htmlFor="color-2" className="form-check-lable">
                      M (2)
                    </label>
                  </div>
                  <div className="form-check d-flex gap-10">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      id="color-3"
                      className="form-check-input"
                    />
                    <label htmlFor="color-3" className="form-check-lable">
                      L (2)
                    </label>
                  </div>
                  <div className="form-check d-flex gap-10">
                    <input
                      type="checkbox"
                      typeof="checkbox"
                      value={""}
                      id="color-4"
                      className="form-check-input"
                    />
                    <label htmlFor="color-4" className="form-check-lable">
                      XL (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>

              <div className="product-tags d-flex gap-0 align-items-ceter flex-wrap">
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Headphone
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Mobile
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Wire
                </span>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div className="random-product d-flex mb-3">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-50">
                  <h5>
                    Kids headphone bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>$1000</b>
                </div>
              </div>
              <div className="random-product d-flex">
                <div className="w-50">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-50">
                  <h5>
                    Kids headphone bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <b>$1000</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-gird mb-4">
              <div className="d-flex align-items-center gap-10 justify-content-between">
                <div className="d-flex gap-10 align-items-center ">
                  <p className="mb-0 d-block sortby ">Sort By</p>
                  <select
                    name="sortby"
                    id="sortby"
                    defaultValue={"DEFAULT"}
                    className="form-control form-select"
                  >
                    <option value="best-selling" disabled>
                      Freatured
                    </option>
                    <option value="manual">Freatured</option>
                    <option value="best-selling">Best Selling</option>
                  </select>
                </div>
                <div className="d-flex gap-10 align-items-center ">
                  <p className="totalproducts m-0">21 product</p>
                  <div className="d-flex gap-10 align-items-center gird">
                    <img
                      onClick={() => {
                        setgrid(12);
                      }}
                      src="images/gr.svg"
                      alt="gird"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setgrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="gird"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setgrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="gird"
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setgrid(3);
                      }}
                      src="images/gr4.svg"
                      alt="gird"
                      className="d-block img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="row">
                <ProductCard
                  data={productstate ? productstate : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurSrore;
