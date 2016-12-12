BEGIN;

INSERT INTO users (username, email, password, type) VALUES
  ('taka', 'takataka@ga.edu', 'taka', 'owner'),
  ('grace', 'grace@ga.edu', 'grace', 'tester');

INSERT INTO surveys (user_id, url, q1, q2, q3, q4, q5) VALUES
  ('3', 'http://www.w3schools.com', 'How delightful is the page?', 'Do you like the font?', 'Do you like the color?', 'How easy was it to find the content?', 'Do you trust this website?');

INSERT INTO answers (user_id, survey_id, a1, a2, a3, a4, a5) VALUES
  ('3', '1','5', '4', '5', '4', '3');


COMMIT;
-- INSERT INTO links (url, users_username) VALUES
--   ('http://www.cnn.com', 'taka'),
--   ('http://www.w3schools.com', 'grace');

-- INSERT INTO questions (links_id, question_text) VALUES
--   (NULL, 'How delightful is the page?'),
--   (NULL, 'How delightful is the page?');

-- INSERT INTO answers (users_username, question_tag, answer) VALUES
--   ('grace', 'w3s_q1', '4');

-- COMMIT;








