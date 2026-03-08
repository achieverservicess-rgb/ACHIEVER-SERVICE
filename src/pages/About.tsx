import React from "react";

export default function About() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-[#002f6c] mb-6 text-center">About Us</h2>
        
        <div className="space-y-6 text-gray-700 text-lg">
          <p className="text-center mb-8">
            Welcome to Achiever Loan Service. We are dedicated to providing fast, trusted, and flexible loan solutions to meet your financial needs. Whether you're looking to grow your business, buy a home, or need instant personal support, we are here to help.
          </p>

          <div className="bg-[#eaf1ff] p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold text-[#002f6c] mb-4 border-b border-blue-200 pb-2">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#0a4abf] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <span className="font-semibold block text-gray-900">Office Details:</span>
                  <span>6 SANJIB CHATTERJEE ROAD<br/>NAIHATI 24 PGS (N)<br/>WB PIN 743165</span>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#0a4abf] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <span className="font-semibold text-gray-900 mr-2">Contact No:</span>
                  <a href="tel:6291130820" className="text-[#0a4abf] hover:underline">6291130820</a>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#0a4abf] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <span className="font-semibold text-gray-900 mr-2">Email ID:</span>
                  <a href="mailto:achieverservicess@gmail.com" className="text-[#0a4abf] hover:underline">achieverservicess@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
