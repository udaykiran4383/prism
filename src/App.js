import React from 'react';
import ThreeDemo from './threedemo';
import './index.css';
import logo from './advit.png';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative" style={{ height: '50vh' }}>
      {/* Left side - Image (logo) */}
      <div className="w-full md:w-[60%] flex justify-center items-center z-10">
        <img 
          src={logo} 
          alt="Featured Image" 
          className="w-[80%] max-h-full object-contain rounded-lg shadow-none text-6xl"
        />
      </div>
      
      {/* Right side - ThreeDemo as background */}
      <div className="absolute inset-0 w-full">
        <ThreeDemo />
      </div>
    </div>
  );
}
