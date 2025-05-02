
import Layout from "../components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="w-full max-w-3xl bg-white/90 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you create an account, 
            submit a form, or communicate with us. This information may include your name, email address, 
            and any other information you choose to provide.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to protect our services and users.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to collect information about your activity, 
            browser, and device. Most web browsers are set to accept cookies by default.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect information about you from loss, theft, 
            misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
