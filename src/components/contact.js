import React from "react";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ffffff] text-black flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/86098cd2-9a06-4e18-81e5-cad977601d00" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 text-black">
            Contact
          </p>
          <p className="text-black py-6">
            Submit the form below or feel free to send me an email - Khadija@fujn.global
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea className="bg-[#ccd6f6] p-2" name="message" id="" rows="10" placeholder="Message"></textarea>
        <button className="text-black border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
