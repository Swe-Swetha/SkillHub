import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courseQuizzes } from '../../Pages/QuizData';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const quizData = courseQuizzes[slug];

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    const updated = [...selectedOptions];
    updated[currentQ] = index;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (currentQ < quizData.length - 1) setCurrentQ(currentQ + 1);
  };

  const handlePrevious = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () =>
    selectedOptions.reduce((score, selected, index) => {
      if (selected === quizData[index].correct) score += 1;
      return score;
    }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Quiz Time!</h1>

        {!submitted ? (
          <>
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">
                Question {currentQ + 1} of {quizData.length}
              </p>
              <h2 className="text-xl text-gray-800 mb-4">{quizData[currentQ].question}</h2>

              <div className="space-y-3">
                {quizData[currentQ].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`block w-full text-left p-3 rounded-md border transition ${selectedOptions[currentQ] === index
                        ? 'bg-blue-500 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQ === 0}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
              >
                Previous
              </button>
              {currentQ < quizData.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">You scored {getScore()} out of {quizData.length}</h2>
            <p className="text-gray-600 mb-4">Thanks for taking the quiz!</p>

            <button
              onClick={() => navigate('/?tab=Earn Badge')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Back to Dashboard
            </button>

            <button
              onClick={() => {
                setCurrentQ(0);
                setSelectedOptions(Array(quizData.length).fill(null));
                setSubmitted(false);
              }}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
