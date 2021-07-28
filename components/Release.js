import Link from "next/link";

const Release = ({ release }) => {
  return (
    <div>
      <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
          <h2 className="text-center font-black uppercase  text-gray-800 m-2 tracking-wider">
            {release.headline}
          </h2>

          <p className="text-center font-medium text-gray-600 "></p>
          <img
            className="w-full h-16 sm:h-32 object-cover"
            src={release.image.asset.url}
            alt="meh"
          />
          <div className="m-4 text-center"></div>

          <Link href={`release/${release.slug.current}`}>
            <button
              type="button"
              className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-800 justify-end"
            >
              View Release ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Release;
