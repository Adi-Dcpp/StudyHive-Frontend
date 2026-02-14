// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;