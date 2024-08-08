import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { getAllBlog } from "../features/blogs/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAllProduct } from "../features/product/productSlice";
const Home = () => {
  const dispatch = useDispatch();
  const blogstate = useSelector((state) => state?.blog?.blog);
  useEffect(() => {
    dispatch(getAllBlog());
    dispatch(getAllProduct());
  }, [dispatch]);
  const productstate = useSelector((state) => state?.product?.product);
  const specialProducts = productstate
    ? productstate.filter((item) => item?.tags.includes("Special")).slice(0, 4)
    : [];

  const popularProducts = productstate
    ? productstate.filter((item) => item?.tags.includes("Popular")).slice(0, 4)
    : [];
  return (
    <>
      <Meta title={"Home"}></Meta>
      <Container class1="home-wapper-1">
        <div className="row py-5">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPPERCHARGED FOR PROS</h4>
                <h5>iPad S14+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button"> BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex flex-wrap justify-content-between align-items-center small-banner-display gap-10">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="small-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="small-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="small-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="small-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="service d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="service" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/watch.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="vcamera" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/watch.jpg" alt="vcamera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="vcamera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="fetured-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Fetured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/famous.jpg" alt="famous" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5 className="text-black">Big Screen</h5>
                <h6 className="text-black">Smart Watch Series 7</h6>
                <p className="text-black">From $399.00 or $16.62/mo for 24m.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img
                src="images/famous-01.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-black">Studio Display</h5>
                <h6 className="text-black">600 nits of brighness.</h6>
                <p className="text-black">From $399.00 or $16.62/mo for 24m.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img
                src="images/famous-02.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-black">Smartphone</h5>
                <h6 className="text-black">Smartphone 15 Pro</h6>
                <p className="text-black">From $399.00 or $16.62/mo for 24m.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img
                src="images/famous-03.jpg"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-black">home speckers</h5>
                <h6 className="text-black">Room-filling sound</h6>
                <p className="text-black">From $399.00 or $16.62/mo for 24m.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {specialProducts.map((item, index) => (
              <SpecialProduct
                key={index}
                title={item?.title}
                brand={item?.brand}
                price={item?.price}
                totalrating={item?.totalrating.toString()}
                sold={item?.sold}
                quantity={item?.quantity}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container class1="popular-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard data={popularProducts} />;
          </div>
        </div>
      </Container>
      <Container class1="maquee-wapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="maquee-inner-wapper bg-white p-3 card-wapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wapper py-5 home-wapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blog</h3>
          </div>
          {blogstate?.map((item, index) => {
            if (index < 4) {
              return (
                <BlogCard
                  key={index}
                  id={item?._id}
                  title={item?.title}
                  description={item?.description}
                  image={item?.images[0]?.url}
                  date={moment(item?.created_at).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                />
              );
            }
            return null;
          })}
        </div>
      </Container>
    </>
  );
};

export default Home;
