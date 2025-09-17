import LogoPhone from "../../assets/logo_phone.png";
import useEmailJS from "../../hooks/useEmailJS";

const Contact = () => {
  const { formRef, sendEmail } = useEmailJS();

  return (
    <div className="py-12 sm:py-20" id="contact">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full transition-colors hover:text-gray-400 after:bg-gray-400 after:transition-opacity text-white after:opacity-100">
            Contact Us
          </h2>
        </div>
        <div className="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
          <div
            data-aos="fade-up"
            className="relative group isolate rounded-xl background-gradient ring-1 ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex items-center justify-center shadow shadow-indigo-700"
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 overflow-hidden rounded-xl divide-y divide-gray-800 bg-gray-900 hover:bg-opacity-90 transition-[background-opacity]">
              <div className="flex justify-center items-center my-auto">
                <div className="p-5 mt-5">
                  <img
                    src={LogoPhone}
                    alt="Project 1"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="gap-x-8gap-y-4 justify-center rounded-xl flex-1 flex flex-col px-2 py-5 sm:p-6">
                <div className="text-center">
                  <h4 className="text-2xl font-bold uppercase underline text-gray-300">
                    Get In Touch
                  </h4>
                </div>
                <div className="mt-5">
                  <form
                    ref={formRef}
                    className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg"
                    onSubmit={sendEmail}
                  >
                    <div className="flex flex-col gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 text-sm font-bold mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          className="appearance-none block w-full bg-gray-700 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <input
                        type="submit"
                        value="Send Message"
                        className="px-6 py-2 text-white  hover:bg-slate-500 bg-gray-600 rounded focus:outline-none transition-colors"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
