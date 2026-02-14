// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;