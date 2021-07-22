import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Artist from "@/components/Artist";

const artist = ({ artist }) => {
  const [artistData, setartistData] = useState(null);

  console.log(artistData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'artist']{
        name
        slug,
        
        tagline,
        spotifyembed,
        youtubeembed,
        instagram,
        
        id,
        image {
          asset-> {
              _id,
              url,
          },
          alt,
      },


    }`
      )
      .then((data) => setartistData(data))
      .catch(console.error);
  }, []);

  return (
    <Layout title="artists | EDM" description="artists | Let Go Records">
      <div className=" p-4 container mx-auto font-body ">
        <h1 className="flex justify-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl ">
          Let Go Records - Artists
        </h1>

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
