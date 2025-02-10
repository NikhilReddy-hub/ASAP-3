import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to ASAP</h1>
      <p className="text-lg text-center max-w-2xl">
        ASAP (Automated Smart Assistance Platform) is designed to streamline task automation,  
        enhance productivity, and provide seamless integration for managing projects efficiently.
      </p>

      <div className="mt-8">
        <a 
          href="/get-started" 
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
