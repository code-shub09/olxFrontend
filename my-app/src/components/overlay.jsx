// src/components/LoadingOverlay.jsx
export default function LoadingOverlay() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-64 text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Submitting your property...</p>
        </div>
      </div>
    );
  }
  