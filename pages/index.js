import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Post from "@/components/Post";
import Carousel from "@/components/Carousel";
import Release from "@/components/Release";

const Home = ({}) => {
  const [serviceData, setServiceData] = useState(null);
  const [postData, setPost] = useState(null);
  const [releaseData, setRelease] = useState(null);
  console.log(serviceData);
  console.log(releaseData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'release' ][0..2]{
        headline,
        name,
        slug,
        
        
        releasedate,
        spotifyembed,
        youtubeembed,
        beatport,
        featured, 
        image {
          asset-> {
              _id,
              url,
          },
          alt,
      },

    }`
      )
      .then((data) => setRelease(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'service' && featured == true][0..2]{
        title,
        slug,
        tagline,
        id,
        mainImage {
          asset-> {
              _id,
              url,
          },
          alt,
      },
    

        description,
        tags,

    }`
      )
      .then((data) => setServiceData(data))
      .catch(console.error);
  }, []);

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
        }

    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="font-body">
        {/* <Team />
        <About /> */}
        <div className=" p-4 container mx-auto font-body py-4">
          <div className="mt-4  container mx-auto ">
            <h1 className="flex justify-left text-4xl font-lake  sm:text-4xl ">
              Latest Releases...
            </h1>
            <hr className="mt-4" />

            <Carousel />
            <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
              {releaseData &&
                releaseData.map((release) => (
                  <div>
                    <Release key={release.id} release={release} />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <div>
              <div className="  container mx-auto py-4 ">
                <h1 className="flex justify-end text-3xl  font-lake  sm:text-4xl  ">
                  Our Artists...
                </h1>
                <hr className="mt-4" />
              </div>

              <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {postData &&
                  postData.map((post) => (
                    <div>
                      <Post key={post.id} post={post} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="  container mx-auto py-4">
              <h1 className="flex justify-start text-3xl  font-lake  sm:text-4xl ">
                News...
              </h1>
              <hr className="mt-4" />
              <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {postData &&
                  postData.map((post) => (
                    <div>
                      <Post key={post.id} post={post} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
