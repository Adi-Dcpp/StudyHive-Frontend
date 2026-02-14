// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;