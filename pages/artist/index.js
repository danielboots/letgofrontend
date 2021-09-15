import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Artist from "@/components/Artist";
import Info from "@/components/Info";
import Hero from "@/components/Hero";

const artist = ({ artist }) => {
  const [artistData, setArtist] = useState(null);

  console.log(artistData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'artist' ][0..2]{
     tagline,
        name,
        slug,
        
       
        
        spotifyembed,
        youtubeembed,
        
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
      .then((data) => setArtist(data))
      .catch(console.error);
  }, []);

  return (
    <Layout title="artists | EDM" description="artists | Let Go Records">
      <div>
        {/* Main container div */}
        <div
          style={{
            backgroundImage: "url(" + "/images/head3.webp" + ")",
          }}
          className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
        >
          <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
          <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
            Artists
          </h1>
        </div>
      </div>
      <div className=" p-4 container mx-auto font-body ">
        <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artistData &&
            artistData.map((artist) => (
              <div>
                <Artist key={artist.slug} artist={artist} />
              </div>
            ))}
        </div>
      </div>
      {/* <Info /> */}
    </Layout>
  );
};

export default artist;
