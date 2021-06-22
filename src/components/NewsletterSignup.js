import React from "react"
import kidsImage from "../images/kinder-grad.jpg"

const NewsletterSignup = () => (
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src={kidsImage}
        />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Signup to our newsletter to get monthly updates!
        </h1>
        <p class="mb-8 leading-relaxed">
          Hear how your donations are benefiting these children.
        </p>
        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
            Sign up
          </button>
        </div>
        {/* <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
          Neutra shabby chic ramps, viral fixie.
        </p> */}
      </div>
    </div>
  </section>
)

export default NewsletterSignup
