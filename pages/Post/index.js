import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Info from "@/components/Info";

const post = ({ post }) => {
  const [postData, setPostData] = useState(null);

  console.log(postData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
          title,
          slug,
          body,
          mainImage {
              asset-> {
                  _id,
                  url
              },
              alt
      },
      
    }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <Layout title="posts | EDM" description="posts | Let Go Records posts">
      <div>
        {/* Main container div */}
        <div
          style={{
            backgroundImage: "url(" + "/images/head3.webp" + ")",
          }}
          className="mb-4 bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
        >
          <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
          <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
            News
          </h1>
        </div>
      </div>
      <div className=" p-4 container mx-auto font-body ">
        <div className=" m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {postData &&
            postData.map((post, index) => (
              <div>
                <Post key={post.id} post={post} />
              </div>
            ))}
        </div>
      </div>
      <Info />
    </Layout>
  );
};

export default post;
