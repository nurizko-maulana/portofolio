import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.github}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                 width="24"
                 height="24"
                 className="text-gray-50"
                 viewBox="0 0 64 64"
                 fill="white"
                 xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.7,31c-0.6-16.3-14-29.6-30.3-30.3C24.6,0.4,16.3,3.5,10,9.6c-6.3,6.1-9.8,14.2-9.8,22.9c0,14.4,9.7,27,23.5,30.7l0,0
	c0.3,0.1,0.7,0.1,1,0.1c0.8,0,1.6-0.3,2.3-0.8c0.9-0.7,1.5-1.8,1.5-3v-3.5c0-1,0.1-5.2,0.1-5.9c0.1-0.7,0.3-1.2,0.7-1.7
	c0.5-0.7,0.6-1.5,0.2-2.3c-0.3-0.7-1-1.1-1.8-1.2c-0.7-0.1-1.5-0.2-2-0.4c-0.8-0.2-1.7-0.6-2.6-1.1c-0.7-0.4-1.3-0.9-1.9-1.6
	c-0.5-0.6-0.9-1.5-1.3-2.7c-0.4-1.3-0.6-2.7-0.6-4.2c0-2.1,0.6-3.7,1.9-5.2l0.8-0.8l-0.4-1C21,27,21,25.8,21.4,24.3
	c0.2,0.1,0.5,0.2,0.8,0.3c1.5,0.6,2,0.9,2.2,1l0.1,0.1c0.4,0.2,0.7,0.5,1,0.6l1,0.6l0.7-0.2c1.8-0.5,3.6-0.7,5.5-0.7
	c1.9,0,3.7,0.2,5.5,0.7l0.7,0.2l1.8-1.1c0.8-0.5,1.7-0.9,2.5-1.2c0.3-0.1,0.5-0.2,0.7-0.2c0.4,1.4,0.4,2.7-0.1,3.9l-0.4,1L44,30
	c1.3,1.4,1.9,3.1,1.9,5.2c0,1.6-0.2,3-0.6,4.1c-0.4,1.1-0.8,2-1.4,2.7c-0.5,0.6-1.2,1.1-2,1.6c-1,0.5-1.8,0.8-2.6,1.1
	c-0.6,0.2-1.4,0.3-2.2,0.4c-0.7,0.1-1.3,0.6-1.6,1.3c-0.3,0.7-0.2,1.4,0.2,2.1c0.5,0.7,0.7,1.6,0.7,2.8v8c0,1.2,0.6,2.3,1.6,3
	c1,0.7,2.2,0.9,3.3,0.6C55.3,58.7,64.5,45.5,63.7,31z M40.4,59.6c-0.1,0-0.2,0-0.2,0c0,0-0.1-0.1-0.1-0.2v-8c0-1.1-0.2-2.1-0.5-3.1
	c0.3-0.1,0.5-0.1,0.8-0.2c1.1-0.3,2.1-0.7,3.4-1.4c1.3-0.8,2.2-1.6,3-2.4c1-1.1,1.5-2.5,2-3.8c0.5-1.5,0.8-3.2,0.8-5.2
	c0-2.6-0.7-4.8-2.2-6.7c0.5-2,0.3-4.2-0.6-6.5l-0.3-0.8l-0.8-0.3c-1-0.3-2.2-0.2-3.7,0.4c-1,0.4-2.1,0.9-3.1,1.5l-0.6,0.3
	c-1.9-0.5-3.7-0.7-5.7-0.7c-1.9,0-3.8,0.2-5.7,0.7c-0.2-0.1-0.4-0.2-0.6-0.4c-0.6-0.4-1.5-0.8-2.8-1.3c-1.6-0.7-2.9-0.9-3.9-0.5
	l-0.8,0.3l-0.3,0.8c-0.9,2.4-1.1,4.6-0.5,6.5c-1.4,1.9-2.2,4.2-2.2,6.7c0,1.8,0.2,3.5,0.7,5.2c0.5,1.6,1.1,2.9,1.9,3.9
	c0.9,1.1,1.9,1.9,3,2.5c1.1,0.6,2.2,1,3.3,1.3c0.3,0.1,0.5,0.1,0.8,0.2c-0.2,0.5-0.3,1.1-0.4,1.6l0,0.2c0,0,0,1.6,0,3.1
	c-2.7-0.9-4.8-2.1-6.6-4c-1.3-1.5-2.8-2.9-3.5-3.3c-1.5-0.7-2.5,0.8-2.2,1.6c0.3,1.1,1.9,1.7,2.7,2.5c0.9,1,1.1,2.3,1.9,3.3
	c1.1,1.6,4.9,3.5,7.7,3.2v3c0,0,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0C12.4,56.5,3.8,45.3,3.8,32.5c0-7.8,3.1-15,8.7-20.4
	c5.6-5.4,13-8.2,20.8-7.9c14.6,0.6,26.4,12.4,27,26.9C60.9,44.1,52.7,55.8,40.4,59.6z"
                  />
                </svg>

                {/* <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                    fill="currentColor"
                  />
                </svg> */}
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href={userData.socialLinks.instagram}
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
