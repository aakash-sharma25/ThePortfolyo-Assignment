export default function Contact() {
  return (
    <>
      <div>
        <div className="py-8 lg:py-16 px-4 mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-center text-white">
            Contact Me
          </h2>
          <p className=" lg:mb-3  text-center text-gray-300  sm:text-xl">
            Have a project idea lets work together...
          </p>
          <h1 className=" text-xl text-white text-center">OR</h1>
          <p className="lg:mb-10 font-light text-center text-gray-300 sm:text-xl">
            Want to hire me ? Lets talk
          </p>
          <form action="#" className="space-y-8 text-white">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"

              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 "
                placeholder="portfolio3@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400rk:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400rk:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-blue-500 hover:bg-blue-700  "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
