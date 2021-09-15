import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Release from "@/components/Release";
import Info from "@/components/Info";

const index = ({ release }) => {
  const [releaseData, setreleaseData] = useState(null);

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
      .then((data) => setreleaseData(data))
      .catch(console.error);
  }, []);

  return (
    <Layout
      title="releases | EDM"
      description="releases | Let Go Records releases"
    >
      <div>
        <main>
          <div>
            {/* Main container div */}
            <div
              style={{
                backgroundImage: "url(" + "/images/releases.webp" + ")",
              }}
              className=" bg-bottom  bg-no-repeat m-auto bg-fixed relative h-60v flex justify-center items-center flex-col "
            >
              <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
              <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
                Releases
              </h1>
            </div>
          </div>

          <article className="font-body  shadow-lg mx-auto ">
            <header className="">
              <div className=" h-full w-full flex items-center justify-center p-8">
                <div className="bg-white rounded p-6">
                  <div>
                    <div className=" m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {releaseData &&
                        releaseData.map((release, index) => (
                          <div>
                            <Release key={release.id} release={release} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </main>
      </div>
    </Layout>
  );
};

export default index;
