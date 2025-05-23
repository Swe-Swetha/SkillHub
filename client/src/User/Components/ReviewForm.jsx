
import React, { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-[#161179] mb-4">Session Review</h2>

      <p className="text-red-600 font-medium mb-4">
        ⚠️ You must submit a review or lose some SkillBucks.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rate your experience
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-3xl ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Write a short review
        </label>
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#161179]"
          placeholder="Share your experience..."
        />
      </div>

      <button
        type="button"
        className="bg-[#161179] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#161179]/90 transition"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
