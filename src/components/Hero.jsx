import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-500">
    <h1 className="text-4xl font-bold text-white">
      Welcome to My Portfolio
      <Typewriter
        options={{
          strings: ["Designer", "Developer", "Dreamer"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  </div>
);

export default Home;
