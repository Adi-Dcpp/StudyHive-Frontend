// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;