import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;