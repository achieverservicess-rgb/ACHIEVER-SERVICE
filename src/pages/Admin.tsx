import { useEffect, useState } from "react";

interface Application {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  loan_type: string;
  amount: number;
  created_at: string;
}

export default function Admin() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/applications");
        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }
        const data = await response.json();
        setApplications(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002f6c]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-12 p-4 bg-red-50 text-red-600 rounded-lg text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-2xl font-bold text-[#002f6c]">Loan Applications</h2>
          <p className="text-gray-500 text-sm mt-1">Manage all submitted loan applications.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold border-b border-gray-200">ID</th>
                <th className="p-4 font-semibold border-b border-gray-200">Name</th>
                <th className="p-4 font-semibold border-b border-gray-200">Phone</th>
                <th className="p-4 font-semibold border-b border-gray-200">Loan Type</th>
                <th className="p-4 font-semibold border-b border-gray-200 text-right">Amount</th>
                <th className="p-4 font-semibold border-b border-gray-200">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-500 text-sm">#{app.id}</td>
                    <td className="p-4 font-medium text-gray-900">{app.name}</td>
                    <td className="p-4 text-gray-600">{app.phone}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {app.loan_type}
                      </span>
                    </td>
                    <td className="p-4 text-right font-medium text-gray-900">
                      ${app.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(app.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
