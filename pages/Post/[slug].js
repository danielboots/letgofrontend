import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({
  title,
  slug,
  body,
  mainImage,
  description,
  tagline,
  author,
}) => {
  return (
    <Layout title="About | EDM" description="About| Let Go Records posts">
      <div>
        <main>
          <article className="font-body  shadow-lg mx-auto ">
            <header className="">
              <div className=" h-full w-full flex items-center justify-center p-8">
                <div className="bg-white rounded p-6">
                  <h1 className="text-4xl mb-4 flex justify-center font-black  text-gray-900 tracking-tight uppercase">
                    {title}
                  </h1>
                  <div>
                    <img
                      className="w-full h-32 sm:h-48 object-cover  shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
                      src={mainImage.asset.url}
                      alt="alt tag"
                    />
                  </div>
                  <div className="prose  text-center my-10 ">
                    <BlockContent
                      blocks={body}
                      projectId="ta2muy7p"
                      dataset="production"
                    />
                  </div>
                  <div className=" p-4 justify-end  bg-gradient-to-r from-gray-900 ">
                    <img
                      className="w-16 h-16 object-cover"
                      src={urlFor(author.image).url()}
                      alt="alt tag"
                    />
                    <p className=" text-white">
                      article by: <strong>{author.name}</strong>
                    </p>
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

  const query = `*[_type == 'post' && slug.current == $pageSlug][0]{
    title,
    slug,
    body,
    
    author-> {
      name, 
      image,
    },

    mainImage {
        asset-> {
            _id,
            url
        },
        alt
    },
  
    description,
    tags,

}`;

  const post = await sanityClient.fetch(query, { pageSlug });

  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        mainImage: post.mainImage,
        body: post.body,
        author: post.author,
      },
    };
  }
};

export default Post;
