-- Sample Quiz for JavaScript
INSERT INTO Quizzes (SkillID, Title, Description, PassingScore)
VALUES (
  (SELECT SkillID FROM Skills WHERE SkillName = 'JavaScript'),
  'JavaScript Fundamentals',
  'Test your knowledge of JavaScript basics',
  70
);

SET @js_quiz_id = LAST_INSERT_ID();

-- JavaScript Questions
INSERT INTO Questions (QuizID, QuestionText, QuestionType)
VALUES
(@js_quiz_id, 'What is the result of typeof null?', 'multiple_choice'),
(@js_quiz_id, 'Which method is used to add elements to the end of an array?', 'multiple_choice'),
(@js_quiz_id, 'What is closure in JavaScript?', 'multiple_choice'),
(@js_quiz_id, 'What is the difference between == and ===?', 'multiple_choice'),
(@js_quiz_id, 'What is hoisting in JavaScript?', 'multiple_choice');

-- Answer options for JavaScript questions
INSERT INTO Answer_Options (QuestionID, OptionText, IsCorrect)
VALUES
-- Question 1
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is the result of typeof null?'),
 'object', TRUE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is the result of typeof null?'),
 'null', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is the result of typeof null?'),
 'undefined', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is the result of typeof null?'),
 'string', FALSE),

-- Question 2
((SELECT QuestionID FROM Questions WHERE QuestionText = 'Which method is used to add elements to the end of an array?'),
 'push()', TRUE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'Which method is used to add elements to the end of an array?'),
 'unshift()', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'Which method is used to add elements to the end of an array?'),
 'pop()', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'Which method is used to add elements to the end of an array?'),
 'shift()', FALSE);

-- Sample Quiz for React
INSERT INTO Quizzes (SkillID, Title, Description, PassingScore)
VALUES (
  (SELECT SkillID FROM Skills WHERE SkillName = 'React'),
  'React Basics',
  'Test your understanding of React fundamentals',
  70
);

SET @react_quiz_id = LAST_INSERT_ID();

-- React Questions
INSERT INTO Questions (QuizID, QuestionText, QuestionType)
VALUES
(@react_quiz_id, 'What is JSX?', 'multiple_choice'),
(@react_quiz_id, 'What is the purpose of useState hook?', 'multiple_choice'),
(@react_quiz_id, 'What is a component in React?', 'multiple_choice'),
(@react_quiz_id, 'What is the virtual DOM?', 'multiple_choice'),
(@react_quiz_id, 'What are props in React?', 'multiple_choice');

-- Answer options for React questions
INSERT INTO Answer_Options (QuestionID, OptionText, IsCorrect)
VALUES
-- Question 1
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is JSX?'),
 'JavaScript XML - A syntax extension for JavaScript', TRUE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is JSX?'),
 'A JavaScript framework', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is JSX?'),
 'A JavaScript compiler', FALSE),
((SELECT QuestionID FROM Questions WHERE QuestionText = 'What is JSX?'),
 'A JavaScript library', FALSE);