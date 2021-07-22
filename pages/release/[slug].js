import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
// import BlockContent from "@sanity/block-content-to-react";

const Single = ({
  headline,
  name,
  slug,
  youtubeembed,
  spotifyembed,
  image,
}) => {
  return (
    <Layout title={`releases : ${name}`} description="About| Let Go Records">
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
              <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
                {name}
              </h1>
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

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);

  const query = `*[_type == 'release' && slug.current == $pageSlug][0]{
    headline,
    name,
    slug,
    

    releasedate,
    
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

}`;

  const release = await sanityClient.fetch(query, { pageSlug });

  if (!release) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        headline: release.headline,
        name: release.name,
        slug: release.slug,

        youtubeembed: release.youtubeembed,
        image: release.image,
        releasedate: release.releasedate,
      },
    };
  }
};

export default Single;
