import React, { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    loan_type: "Business Loan",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-[#002f6c] mb-6 text-center">Loan Application</h2>
        
        <form action="https://formspree.io/f/xbdzlqwl" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors"
              placeholder="+1 234 567 890"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors"
              placeholder="123 Main St, City"
            />
          </div>

          <div>
            <label htmlFor="loan_type" className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
            <select
              id="loan_type"
              name="loan_type"
              value={formData.loan_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors bg-white"
            >
              <option value="Business Loan">Business Loan</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Mortgage Loan">Mortgage Loan</option>
              <option value="Instant Loan">Instant Loan</option>
              <option value="Daily Scheme Loan">Daily Scheme Loan</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              min="1"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0a4abf] focus:border-[#0a4abf] outline-none transition-colors"
              placeholder="5000"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#002f6c] hover:bg-[#0a4abf] text-white font-bold py-3 px-4 rounded-md transition-colors mt-6"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
