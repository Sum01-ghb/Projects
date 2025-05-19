import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of passion for innovation and a desire to
            revolutionize the way people experience online shopping. Our mission
            is to provide a seamless, enjoyable, and secure platform where
            customers can discover the latest trends and products with ease.
          </p>
          <p>
            We believe in quality, transparency, and customer satisfaction above
            all. Our dedicated team works tirelessly to curate a diverse
            selection of products, ensuring that there is something for
            everyone.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            high standards of quality and reliability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free shopping
            experience, finding what you need is quick and easy.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you with any
            questions or concerns, ensuring a smooth experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
