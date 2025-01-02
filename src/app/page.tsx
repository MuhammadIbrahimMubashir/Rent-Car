"use client";

import { CarouselPlugin } from "../components/carso";
import React, { useEffect } from 'react';
import Link from "next/link"
import Image from "next/image";
import budget from "../app/images/budget.png";
import standard from "../app/images/standard.png";
import luxury from "../app/images/luxury.png";
import suv from "../app/images/suv.png";
import SearchForm from "./component/page";
import t from "../app/images/t.png";
import h from "../app/images/h.png";
import s from "../app/images/s.png";
import d from "../app/images/d.png";
import a from "../app/images/a.png";
import m from "../app/images/m.png";
import { CarouselSpacing } from "@/components/threecarso";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Page() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="bg-slate-100 h-full">
      <title>QuickRent Cars</title>
      <div className="bg-white rounded-lg h-16 w-screen flex justify-center items-center font-serif gap-4 sm:gap-6 md:gap-9 px-4">
        <Link href="/">
          <button className="hover:bg-slate-500 hover:h-7 hover:px-3 hover:text-white hover:rounded-md text-sm sm:text-base md:text-lg">
            Home
          </button>
        </Link>
        <Link href="#cars">
          <button className="hover:bg-slate-500 hover:h-7 hover:px-3 hover:text-white hover:rounded-md text-sm sm:text-base md:text-lg">
            Cars
          </button>
        </Link>
        <Link href="#about-us">
          <button className="hover:bg-slate-500 hover:h-7 hover:px-4 hover:text-white hover:rounded-md text-sm sm:text-base md:text-lg">
            About Us
          </button>
        </Link>
        <Link href="/contactus" target="_blank">
          <button className="hover:bg-slate-500 hover:h-7 hover:px-5 hover:text-white hover:rounded-md text-sm sm:text-base md:text-lg">
            Contact Us
          </button>
        </Link>
        <Link href="#reviews">
          <button className="hover:bg-slate-500 hover:h-7 hover:px-5 hover:text-white hover:rounded-md text-sm sm:text-base md:text-lg">
            Our Reviews
          </button>
        </Link>
      </div>
      <div>
        <CarouselPlugin />
      </div>
      <div data-aos="fade-up">
        <SearchForm />
      </div>
      <div className="text-center p-5 mt-[90]">
        <h2 data-aos="fade-up" className="mb-5 text-3xl text-center text-slate-800 font-serif">
          Connecting you to the biggest brands in car rental
        </h2>
        <div className="flex justify-center gap-5 flex-wrap">
          <Image
            src={m}
            alt="Sixt"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={a}
            alt="Easirent"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={t}
            alt="Thrifty"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image 
            src={h}
            alt="Sixt"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={d}
            alt="Easirent"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
          <Image
            src={s}
            alt="Thrifty"
            width={200}
            height={150}
            data-aos="fade-up"
            className="object-contain"
          />
        </div>
      </div>
      <section id="cars" className="text-slate-700 body-font">
        <div>
          <h1 data-aos="fade-up" className="mt-32 text-3xl text-center text-slate-800 font-serif">
            What type of car are you looking for?
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/budget" target="_blank">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-auto h-auto mt-[-75px] block"
                    src={budget}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-slate-700 title-font text-center text-lg font-serif lg:mt-[-90px] md:mt-[-70px] sm:mt-[-70px] mt-[-70px]">
                    Budget
                  </h2>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/standard" target="_blank">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-auto h-auto block"
                    src={standard}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-slate-700 title-font text-center text-lg font-serif lg:mt-[-85px] md:mt-[-70px] sm:mt-[-70px] mt-[-70px]">
                    Standard
                  </h2>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/luxury" target="_blank">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-auto h-auto block"
                    src={luxury}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-slate-700 title-font text-center text-lg font-serif lg:mt-[-90px] md:mt-[-70px] sm:mt-[-70px] mt-[-70px]">
                    Luxury
                  </h2>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/suv" target="_blank">
                <div className="relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-auto h-36 block"
                    src={suv}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-slate-700 title-font text-center text-lg font-serif lg:mt-[-90px] md:mt-[-70px] sm:mt-[-70px] mt-[-70px]">
                    SUV
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div>
          <h1 data-aos="fade-up" className="text-center mt-40 text-3xl text-slate-800 font-serif">
            About Us
          </h1>
          <p data-aos="fade-up" className="xl:ml-40 xl:mr-40 lg:ml-40 lg:mr-40 text-slate-700 font-serif mt-5">
            Welcome to QuickRent Cars– your trusted car rental solution!
            <br />
            <br />
            - We specialize in providing reliable, affordable, and high-quality
            car rental services to meet your travel needs. Whether it’s a
            business meeting, family outing, road trip, or special occasion, we
            have the perfect vehicle for you.
            <br />
            <br />
            - Our fleet offers a wide range of options, from budget-friendly
            compact cars to luxurious SUVs and sedans. Every vehicle is
            well-maintained, thoroughly inspected, and ready to give you a
            smooth and safe driving experience.
            <br />
            <br />
            - Why Choose Us?
            <br />
            <br />
            ● Affordable pricing with no hidden charges
            <br />
            ● Flexible rental plans: hourly, daily, weekly, or monthly
            <br />
            ● 24/7 customer support to assist you anytime
            <br />
            ● Easy booking process through our user-friendly website
            <br />
            <br />
            - At QuickRent Cars, we believe in making your journey hassle-free
            and enjoyable. Whether you’re exploring the city or heading out of
            town, we’re here to ensure your comfort and convenience.
            <br />
            <br />- Rent with us today and experience the freedom to drive on
            your terms!
          </p>
        </div>
      </section>
      <section id="reviews">
        <div>
          <h1 data-aos="fade-up" className="text-center mt-48 text-3xl text-slate-800 font-serif">
            Our Reviews
          </h1>
          <div data-aos="fade-up" className="bg-slate-600 w-screen h-96 flex justify-center items-center">
            <CarouselSpacing />
          </div>
        </div>
      </section>
    </div>
  );
}
