import React from "react"
import logo from "../images/abused-restored-logo.svg"
import bajaoBoyClothes from "../images/bajao-boy-clothes-gift.jpg"
import bajaoWoman from "../images/bajao-woman-gratitude.jpg"
import boyAthleticClothes from "../images/boy-athletic-clothes-gift.jpg"
import covidReliefSupplies from "../images/covid-relief-supplies.jpg"
import family from "../images/family.jpg"
import teachingSupplies from "../images/teaching-supplies.jpg"

const ImageGallery = () => (
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Master Cleanse Reliac Heirloom
        </h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src={bajaoBoyClothes}
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src={bajaoWoman}
            />
          </div>
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src={covidReliefSupplies}
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src={teachingSupplies}
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src={family}
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src={boyAthleticClothes}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ImageGallery
