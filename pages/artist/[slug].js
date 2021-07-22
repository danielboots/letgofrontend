import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";

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
                    <p>{tagline}</p>
                    <p>{spotifyembed}</p>
                    <p>{youtubeembed}</p>
                    <div className="prose  text-center my-10 ">
                      <BlockContent
                        blocks={bio}
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
