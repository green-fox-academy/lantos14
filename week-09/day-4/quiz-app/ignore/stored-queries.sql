USE quiz;

SELECT * FROM questions;
-- SELECT * FROM answers;

-- DELETE questions, answers FROM questions INNER JOIN answers ON answers.question_id = questions.id  WHERE questions.id = 19;

-- SELECT answers.question_id AS questionId, question, answers.id, answers.answer, answers.is_correct AS correct FROM questions INNER JOIN answers ON questions.id = answers.question_id;



