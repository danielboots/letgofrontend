import { sanityClient, urlFor } from "../../sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Event from "@/components/Event";

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
      <div className=" p-4 container mx-auto font-body ">
        <h1 className="flex justify-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl ">
          Let Go Records - events
        </h1>

        <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventData &&
            eventData.map((event) => (
              <div>
                <Event key={event.slug} event={event} />
              </div>
            ))}
        </div>
      </div>
      {/* <Info /> */}
    </Layout>
  );
};

export default event;
