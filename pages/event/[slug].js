import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";
import Info from "@/components/Info";

const Event = ({ headline, name, youtubeembed, image, writeup }) => {
  return (
    <Layout title={`Event : ${name}`} description="Event| Let Go Records">
      <div>
        <main>
          <div>
            {/* Main container div */}
            <div
              style={{
                backgroundImage: `url(${image.asset.url})`,
              }}
              className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
            >
              <div className="absolute h-full w-full flex overflow-x-auto bg-coolgray-900 bg-opacity-50 backdrop-filter  "></div>
              <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl "></h1>
            </div>
          </div>

          <article className="font-body  shadow-lg mx-auto ">
            <header className="">
              <div className=" h-full w-full flex items-center justify-center p-8">
                <div className="bg-white rounded p-6">
                  <h1 className="text-4xl mb-4 flex justify-center font-black  text-gray-900 tracking-tight uppercase">
                    {name}
                  </h1>

                  <div>
                    <p className="text-justify">{name}</p>
                    <p>{headline}</p>

                    <p>{youtubeembed}</p>
                    <div className="prose  text-center my-10 ">
                      <BlockContent
                        blocks={writeup}
                        projectId="ta2muy7p"
                        dataset="production"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </main>
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

        headline: event.headline,

        youtubeembed: event.youtubeembed,
        image: event.image,
      },
    };
  }
};

export default Event;
