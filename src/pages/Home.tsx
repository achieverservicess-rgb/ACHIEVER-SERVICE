import { Link } from "react-router-dom";

export default function Home() {
  const loanTypes = [
    {
      title: "Business Loan",
      description: "Grow your business with our flexible loans.",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Personal Loan",
      description: "Instant personal financial support.",
      image: "https://i.postimg.cc/CY5STypD/PERSONAL-PICTURES-JPG.jpg",
    },
    {
      title: "Home Loan",
      description: "Build your dream house easily.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mortgage Loan",
      description: "Loan against property.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Instant Loan",
      description: "Special regional loan scheme.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Daily Scheme Loan",
      description: "Daily repayment easy loans.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div>
      <div 
        className="relative py-24 px-4 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Get Instant Loan Approval</h2>
          <p className="text-gray-200 mb-8 text-xl drop-shadow-md">Business | Personal | Home | Mortgage</p>
          <Link 
            to="/apply" 
            className="inline-block bg-[#0a4abf] hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanTypes.map((loan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col"
            >
              <img 
                src={loan.image} 
                alt={loan.title} 
                className="w-full h-48 object-contain bg-gray-50"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#002f6c] mb-3">{loan.title}</h3>
                <p className="text-gray-600">{loan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
