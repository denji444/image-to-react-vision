
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <h2 className="text-xl mb-8">Explore Our Services and Resources</h2>
        
        {/* About Us */}
        <div className="w-full max-w-3xl mb-6 bg-blue-200/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold border-b border-yellow-400 pb-2 mb-4">About Us</h2>
          <p className="text-sm">
            This website is dedicated to providing high-quality content and services to our users. We strive to 
            meet your needs and exceed your expectations. We believe in transparency, innovation, and 
            commitment to our customers. Explore our website to learn more about what we offer. Thank 
            you for visiting our website. We appreciate your support and look forward to serving you better.
          </p>
        </div>
        
        {/* Top Features */}
        <div className="w-full max-w-3xl mb-6 bg-blue-200/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold border-b border-yellow-400 pb-2 mb-4">Top Features</h2>
          <ol className="list-decimal pl-6">
            <li>Comprehensive Resources</li>
            <li>User-Friendly Design</li>
            <li>Reliable Support</li>
          </ol>
        </div>
        
        {/* Our Services */}
        <div className="w-full max-w-3xl mb-6 bg-blue-200/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold border-b border-yellow-400 pb-2 mb-4">Our Services</h2>
          <ul className="list-disc pl-6">
            <li>Web Design</li>
            <li>Consulting</li>
            <li>Product Development</li>
            <li>Customer Support</li>
          </ul>
        </div>
        
        {/* Team Members */}
        <div className="w-full max-w-3xl mb-6 bg-blue-200/60 rounded-lg p-6">
          <h2 className="text-2xl font-bold border-b border-yellow-400 pb-2 mb-4">Team Members</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-300/60">
                <tr>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Role</th>
                  <th className="border px-4 py-2 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Bilal Saleem", role: "CEO", email: "Bali@example.com" },
                  { name: "Bali", role: "CTO", email: "Bilal@example.com" },
                  { name: "Bilal Saleem", role: "CEO", email: "Bali@example.com" },
                  { name: "Bali", role: "CTO", email: "Bilal@example.com" },
                  { name: "Bali", role: "CTO", email: "Bilal@example.com" },
                  { name: "Bilal Saleem", role: "CEO", email: "Bali@example.com" },
                  { name: "Bali", role: "CTO", email: "Bilal@example.com" },
                ].map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-100/60" : "bg-blue-200/60"}>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.role}</td>
                    <td className="border px-4 py-2">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
