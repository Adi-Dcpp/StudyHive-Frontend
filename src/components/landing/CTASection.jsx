// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;