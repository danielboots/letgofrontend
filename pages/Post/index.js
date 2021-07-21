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
      <div className=" p-4 container mx-auto font-body ">
        <h1 className="flex justify-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl  ">
          News
        </h1>

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
