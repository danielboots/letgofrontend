import Layout from "../components/Layout";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Hero from "@/components/Hero";
import Info from "../components/Info";

const contact = () => {
  return (
    <Layout title="contact | EDM" description="contact| Let Go Records">
      <div className="relative bg-white font-body">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                If you want to find out more about our services or speak with
                one of our representatives please feel free to get intouch
                direct using the direct details below or similarly fill out the
                contact form and a representative will be in touch very soon.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                {/* <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Birmingham City</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div> */}
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3"> vince@letgorecordings.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="https://formsubmit.co/vince@letgorecordings.com"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://google.com"
                ></input>
                <input type="text" name="_honey" className="hidden"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_subject"
                  value="New submission from Let Go Records!"
                ></input>
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="sr-only"
                    className="block text-sm font-medium text-gray-700 mb-2 p-3"
                  >
                    Service Interested in...
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="block w-full shadow-sm py-3 px-6 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md "
                    defaultValue="Production incl: Ghost Production"
                  >
                    <option>Production incl: Ghost Production</option>
                    <option>Consultancy</option>
                    <option>Remixing</option>
                    <option>Mixdown</option>
                    <option>Branding / Web Development</option>
                    <option>Live Performance Tuition</option>
                    <option>Mastering</option>
                    <option>Vocal Production</option>
                    <option>Other Enquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-900 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </Layout>
  );
};

export default contact;
