import React from "react"
import jannLollipop from "../images/jann_lollipop.jpg"
import kidsTransportation from "../images/kids-transportation.jpg"
import medicalSupplies from "../images/medical-supplies.jpg"
import kidsFood from "../images/kids-eating.jpg"

const HowWeHelp = () => (
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            How your support will help these kids
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
          We address the severity of global sexual exploitation and trafficking
          through education, prevention, and intervention, focusing on
          restoration of body, soul, and spirit.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-full rounded w-full object-cover object-center mb-6"
              src={kidsTransportation}
              alt="content"
            />
            {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              Transportation
            </h3> */}
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Transportation To Schools
            </h2>
            <p class="leading-relaxed text-base">
              From slum villages to public schools
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-full rounded w-full object-cover object-center mb-6"
              src={jannLollipop}
              alt="content"
            />
            {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              School Supplies
            </h3> */}
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              School Supplies
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-full rounded w-full object-cover object-center mb-6"
              src={medicalSupplies}
              alt="content"
            />
            {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3> */}
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Medical Supplies
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-full rounded w-full object-cover object-center mb-6"
              src={kidsFood}
              alt="content"
            />
            {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3> */}
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Food
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HowWeHelp
