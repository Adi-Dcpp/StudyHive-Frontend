// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;