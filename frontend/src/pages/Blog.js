import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blogs/blogSlice";
import moment from "moment";
const Blog = () => {
  const dispatch = useDispatch();
  const blogstate = useSelector((state) => state?.blog?.blog);
  console.log(blogstate);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);
  return (
    <>
      <Meta title={"Blogs"}></Meta>
      <BreadCrumb title="News" />
      <Container class1="blog-wapper home-wapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0 mb-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogstate?.map((item, index) => {
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
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
