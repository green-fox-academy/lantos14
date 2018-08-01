USE quiz;

INSERT INTO questions (question)
  VALUES ('Test?');
INSERT INTO answers (question_id, answer, is_correct)
  VALUES (LAST_INSERT_ID(), 'answer10', 0), (LAST_INSERT_ID(), 'answer20', 0), (LAST_INSERT_ID(), 'answer20', 1), (LAST_INSERT_ID(), 'answer40', 0);
