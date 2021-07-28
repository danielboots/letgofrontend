import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";

import Info from "@/components/Info";
import Map from "@/components/Map";

const Event = ({ headline, name, youtubeembed, image, writeup, location }) => {
  return (
    <Layout title={`Event : ${name}`} description="Event| Let Go Records">
      <div>
        {/* Main container div */}
        <div
          style={{
            backgroundImage: `url(${image.asset.url})`,
          }}
          className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
        >
          <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
          <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
            {name}
          </h1>
        </div>
      </div>

      <div className="font-body  shadow-lg  bg-white container mx-auto ">
        <div className="m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="">
            <h3 className="text-4xl mb-4 flex justify-center font-black  text-gray-900 tracking-tight uppercase">
              Event Details
            </h3>
            <h1 className="text-4xl mb-4 flex justify-center   text-gray-700 tracking-tight uppercase">
              {name}
            </h1>

            <p className="text-justify">{name}</p>
            <p>{headline}</p>
            <p>{writeup}</p>
          </div>
          <div className="">
            <h3 className="text-4xl mb-4 flex justify-center font-black  text-gray-900 tracking-tight uppercase">
              Location
            </h3>
            <Map location={location} />
          </div>
        </div>
      </div>

      <Info />
    </Layout>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);

  const query = `*[_type == 'event' && slug.current == $pageSlug][0]{
    headline,
    writeup,
    location,
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

}`;

  const event = await sanityClient.fetch(query, { pageSlug });

  if (!event) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        name: event.name,
        writeup: event.writeup,
        headline: event.headline,
        location: event.location,
        youtubeembed: event.youtubeembed,
        image: event.image,
      },
    };
  }
};

export default Event;
