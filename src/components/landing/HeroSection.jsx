import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;