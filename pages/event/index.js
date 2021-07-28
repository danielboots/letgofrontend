import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Event from "@/components/Event";
import Info from "@/components/Info";

const event = ({ event }) => {
  const [eventData, setEvent] = useState(null);

  console.log(eventData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'event' ]{
        headline,
        name,
        slug,
        eventdate,
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
      .then((data) => setEvent(data))
      .catch(console.error);
  }, []);

  return (
    <Layout title="events | EDM" description="Events | Let Go Records">
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
            Events
          </h1>
        </div>
      </div>

      <div className=" p-4 container mx-auto font-body ">
        <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventData &&
            eventData.map((event) => (
              <div>
                <Event key={event.slug} event={event} />
              </div>
            ))}
        </div>
      </div>
      <Info />
    </Layout>
  );
};

export default event;
