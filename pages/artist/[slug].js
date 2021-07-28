import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";
import Info from "@/components/Info";

const Artist = ({ tagline, name, youtubeembed, spotifyembed, image, bio }) => {
  return (
    <Layout title={`Artist : ${name}`} description="About| Let Go Records">
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
              <div className="absolute h-full w-full flex overflow-x-auto  "></div>
              <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
                {name}
              </h1>
            </div>
          </div>

          <article className="font-body    container mx-auto">
            <header className="">
              <div className=" h-full w-full flex items-center justify-center ">
                <div className=" rounded p-1">
                  <h2 className="text-2xl mb-4 flex justify-center font-black  text-gray-700 tracking-tight uppercase">
                    {tagline}
                  </h2>
                  <div className="prose  text-center my-10  ">
                    <div>
                      <h2 className="text-2xl mb-4 flex text-left font-black  text-gray-700 tracking-tight uppercase">
                        Bio
                      </h2>
                    </div>
                    <BlockContent
                      className="text-justify text-lg "
                      blocks={bio}
                      projectId="ta2muy7p"
                      dataset="production"
                    />
                  </div>
                  <div>
                    <h2 className="  text-2xl mb-4 flex text-left font-black  text-gray-700 tracking-tight uppercase">
                      Spotify
                    </h2>
                  </div>
                  <div className="">
                    <iframe
                      src={spotifyembed}
                      name="spotify"
                      frameBorder="5"
                      width="100%"
                      height="300"
                    ></iframe>
                  </div>
                  <div>
                    <h2 className=" p-2 text-2xl mb-4 flex text-left font-black  text-gray-700 tracking-tight uppercase">
                      Media
                    </h2>
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

  const query = `*[_type == 'artist' && slug.current == $pageSlug][0]{
    tagline,
    name,
    bio,
    spotifyembed,
    youtubeembed,
    
    image {
      asset-> {
          _id,
          url,
      },
      alt,
  },
}`;

  const artist = await sanityClient.fetch(query, { pageSlug });

  if (!artist) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        name: artist.name,
        name: artist.name,
        bio: artist.bio,
        tagline: artist.tagline,
        spotifyembed: artist.spotifyembed,
        youtubeembed: artist.youtubeembed,
        image: artist.image,
      },
    };
  }
};

export default Artist;
