import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import Link from "next/link";

const Service = ({
  title,
  slug,
  tagline,
  id,
  mainImage,
  description,
  tags,
}) => {
  return (
    <Layout title="About | EDM" description="About| Let Go Records">
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
                  <div className="prose  text-center my-10 ">{description}</div>
                  <Link href="/contact">
                    <button
                      type="button"
                      className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-800 justify-end"
                    >
                      Enquire ...
                    </button>
                  </Link>
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

  const query = `*[_type == 'service' && slug.current == $pageSlug][0]{
    title,
    slug,
    tagline,
    id,
    mainImage {
      asset-> {
          _id,
          url,
      },
      alt,
  },
  


    description,
    tags,

}`;

  const service = await sanityClient.fetch(query, { pageSlug });

  if (!service) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: service.title,
        slug: service.slug,
        tagline: service.tagline,
        id: service.id,
        mainImage: service.mainImage,
        description: service.description,
        tags: service.tags,
      },
    };
  }
};

export default Service;
