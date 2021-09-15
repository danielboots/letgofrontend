import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
// import BlockContent from "@sanity/block-content-to-react";
import Info from "@/components/Info";

const Single = ({
  headline,
  name,
  writeup,
  slug,
  youtubeembed,
  spotifyembed,
  image,
  beatport,
  releasedate,
}) => {
  return (
    <Layout title={`Releases: ${name}`} description="Release| Let Go Records">
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
              <h2 className="text-xl p-4 m-4 flex justify-center  font-semibold text-white  uppercase">
                {headline}
              </h2>
            </div>
          </div>
        </main>
      </div>

      <article className="font-body  shadow-lg mx-auto ">
        <header className="">
          <div className=" h-full w-full flex items-center justify-center p-8"></div>
        </header>
        <div className="container mx-auto ">
          <div className="p-2">
            <h2 className="text-2xl mb-4 flex text-left font-black  text-gray-700 tracking-tight uppercase">
              Release Writeup
            </h2>
            <p className="font-bold py-2">Released on: {releasedate}</p>

            <p className="leading-relaxed text-lg">{writeup}</p>
          </div>
          <div className="p-2">
            <h2 className="text-2xl mb-4 flex text-left font-black  text-gray-700 tracking-tight uppercase">
              Media
            </h2>
          </div>
          <div className="p-2 ">
            <iframe
              src={spotifyembed}
              name="spotify"
              frameBorder="5"
              width="100%"
              height="300"
            ></iframe>
          </div>

          <div className="p-2">
            <iframe
              id="youtube-embed"
              name="youtubeIFrame"
              width="100%"
              height="315"
              src={youtubeembed}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-center">
            <a
              className=" bg-black text-3xl  text-white font-bold px-10 py-6 rounded-lg m-6"
              href={beatport}
              target="_blank"
            >
              buy
            </a>
          </div>
          <p></p>
        </div>
      </article>

      <Info />
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
    writeup,
    youtubeembed,
    spotifyembed,
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
        spotifyembed: release.spotifyembed,
        youtubeembed: release.youtubeembed,
        image: release.image,
        releasedate: release.releasedate,
        beatport: release.beatport,
        writeup: release.writeup,
      },
    };
  }
};

export default Single;
