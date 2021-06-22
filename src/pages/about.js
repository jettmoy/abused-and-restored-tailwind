import React from "react"
import Layout from "../components/Layout"
import jannImg from "../images/jann_lollipop.jpg"

export default () => {
  return (
    <Layout>
      <main className="">
        <section className="text-gray-600 body-font">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <h1 className="text-3xl font-medium title-font my-4 text-gray-900 text-center">
              About Us
            </h1>
            <div>
              Abandoned Abused & Restored is dedicated to bringing awareness to
              and ending sexual exploitation, slavery, and trafficking of girls,
              boys, and young women.
            </div>
            <br />
            <p>
              Abandoned Abused & Restored is committed to addressing the complex
              issues of commercial sexual exploitation through prevention,
              education, and restoration of hope to damaged lives.
            </p>
            <br />
            <p>
              Abandoned Abused & Restored also educates the public about what
              sexual exploitation is: Child sexual abuse , exploitation, and
              child molestation are forms of child abuse in which an adult or
              older adolescent uses a child for sexual stimulation.
            </p>
            <br />
            <p>
              Sexual exploitation is the sexual abuse of children and youth
              through the exchange of sex or sexual acts for drugs, food,
              shelter, protection, other basics of life, and/or money. Sexual
              exploitation includes involving children and youth in creating
              pornography and sexually explicit websites. Other terms that are
              used to talk about sexual exploitation are “child prostitution,”
              ‘slavery,” and “youth sex trade.” We use the terms “sexual
              exploitation” or “commercial sexual exploitation” to acknowledge
              that the use of children and youth for sexual acts is abuse and is
              inherently exploitative.
            </p>
            <br />
            <p>
              All gifts to Abandoned Abused & Restored are tax-deductible, to
              the extent permitted by law; to each of our donors.
            </p>
            <h1 className="text-2xl font-medium title-font mt-16 mb-4 text-gray-900 tracking-widest text-center">
              OUR TEAM
            </h1>
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="Jann MacCollam"
                className="flex-shrink-0 rounded-lg w-48 h-full object-cover object-center sm:mb-0 mb-4 self-start"
                src={jannImg}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Jann MacCollam
                </h2>
                <h3 className="text-gray-500 mb-3">CEO | Founder</h3>
                <p>
                  Jann MacCollam is the CEO and Founder of Abandoned Abused &
                  Restored. She has witnessed first-hand the tragedies suffered
                  by women and children victimized by sexual traffickers. Her 25
                  years of experience, working with disadvantaged children
                  globally sharpened her leadership skills and helped her
                  develop many new programs in South Africa, Romania, and the
                  Philippines to combat human trafficking.
                </p>
                <br />

                <p>
                  Jann’s oversight in these projects ensured that each one
                  properly used donated resources to rescue the children. She
                  also helped raise funds for the various projects. Part of her
                  responsibilities has included taking donors on "Vision Trips"
                  to the projects. Donors and potential donors could see the
                  projects and meet impacted families.
                </p>
                <br />

                <p>
                  Jann attended UC Irvine and UCLA in Southern California,
                  majoring in Human Development. Her 12 years of teaching school
                  prepared her to work with children in the International
                  Non-Governmental Organization (INGO) world and developed her
                  insight to the needs of impoverished children.
                </p>
                <br />

                <p>
                  Considered a modern-day abolitionist, Jann is dedicating her
                  life to eradicating the sexual exploitation, slavery, and
                  trafficking of children and women. Her deep passion for these
                  innocent captives to be set free is more than a job; it is her
                  “call to action” from God.{" "}
                </p>
                <br />
              </div>
            </div>
            {/* <h1 className="text-xl font-medium title-font mt-16 mb-4 text-gray-900 tracking-widest text-center">
              BOARD MEMBERS
            </h1> */}
            <h2 className="title-font font-medium text-lg text-gray-900 mb-2">
              Brad Lineberger
            </h2>
            <p>
              Brad Lineberger is owner and president of Seaside Wealth
              Management and lives in Carlsbad, CA. Brad has been an officer for
              the UCLA Alumni Club of San Diego and also serves on the Madgalena
              Family YMCA Board of Directors in Encinitas, CA.
            </p>
            <br />
            <p>
              Brad developed a keen awareness for sexual exploitation, slavery,
              and trafficking from his extensive world travels, as well as
              during his service as a firefighter in a city near the U.S.
              Mexican border. Brad offers his knowledge of finance, planning,
              and management to the board.
            </p>
            <br />
            <h2 className="title-font font-medium text-lg text-gray-900 mb-2">
              Carol Gilormo
            </h2>
            <p>
              Carol Gilormo had the privilege of being born and raised in San
              Diego. After finishing school, she was hired to be a flight
              attendant for a major airline, which gave her the opportunity to
              visit countries all around the world. She witnessed the horrendous
              exploitation of women and children. Carol is involved with a local
              church in her community that is keenly aware of the global
              infestation of sex trafficking and abuse. Her heart remains with
              those who are exploited and abused; her prayer is that God can use
              her to help set the captives free.
            </p>
            <br />
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p> */}
            </div>
            <div className="flex flex-wrap">
              <div className="p-4"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
