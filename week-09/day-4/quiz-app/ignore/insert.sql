INSERT INTO questions (question)
  VALUES ('Test?');
INSERT INTO answers (question_id, answer, is_correct)
  VALUES (LAST_INSERT_ID(), 'answer1', 0), (LAST_INSERT_ID(), 'answer2', 0), (LAST_INSERT_ID(), 'answer3', 1), (LAST_INSERT_ID(), 'answer4', 0);
