import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/Info";
import BlockContent from "@sanity/block-content-to-react";
import Service from "@/components/Service";
import About from "@/components/About";
import SeenIn from "@/components/SeenIn";
import Team from "@/components/Team";
import Post from "@/components/Post";

const Home = ({ service, post }) => {
  const [serviceData, setServiceData] = useState(null);
  const [postData, setPost] = useState(null);
  console.log(serviceData);

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
        <div className=" p-4 container mx-auto font-body">
          <div className="mt-4  container mx-auto ">
            <h1 className="flex justify-left text-3xl font-lake  sm:text-4xl ">
              Latest Releases
            </h1>
            <hr className="mt-4" />

            <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {serviceData &&
                serviceData.map((service, index) => (
                  <div>
                    <Service key={service.id} service={service} />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <div>
              <div className="  container mx-auto ">
                <h1 className="flex justify-end text-3xl  font-lake  sm:text-4xl ">
                  Our Artists
                </h1>
                <hr className="mt-4" />
              </div>

              <div className=" my-6 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {postData &&
                  postData.map((post, index) => (
                    <div>
                      <Post key={post.id} post={post} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SeenIn />
      <Info /> */}
    </Layout>
  );
};

export default Home;
