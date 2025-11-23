import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1c1892b9-74bf-4f41-99ce-57bbfd93dcf5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div
      id="Contact"
      className="scroll-mt-20 w-full py-10 px-[12%] bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-lg text-center font-Ovo">Get in touch</h4>
      <h2 className=" w-full  text-5xl text-center font-Ovo">Contact Me</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-4 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white "
            name="name"
          />
          <input
            type="text"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none  border-gray-400 rounded-md bg-white border-[0.5px] "
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 rounded-md border-gray-500 border bg-white mb-6 outline-none "
          name="message"
        ></textarea>

        <button
          type="submit"
          className="flex gap-2 items-center justify-center mx-auto rounded-full py-3 px-10 w-max border-[0.5px] border-gray-400 bg-black/80 text-white hover:bg-black duration-500"
        >
          Submit now <Image src={assets.right_arrow} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
