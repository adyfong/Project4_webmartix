BEGIN;

INSERT INTO users (username, email, password, type) VALUES
  ('taka', 'takataka@ga.edu', 'taka', 'owner'),
  ('grace', 'grace@ga.edu', 'grace', 'tester');

INSERT INTO links (url, users_username) VALUES
  ('http://www.cnn.com', 'taka'),
  ('http://www.w3schools.com', 'grace');

INSERT INTO questions (link_url, question_tag, questions) VALUES
  ('http://cnn.com', 'cnn_q1', 'How delightful is the page?'),
  ('http://w3schools.com', 'w3s_q1', 'How delightful is the page?');

INSERT INTO answers (users_username, question_tag, answer) VALUES
  ('grace', 'w3s_q1', '4');

COMMIT;








