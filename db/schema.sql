BEGIN;


-- DROP TABLE IF EXISTS links CASCADE;
-- DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS surveys CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  type VARCHAR
  );

 -- CREATE TABLE links (
 --  id SERIAL PRIMARY KEY,
 --  url VARCHAR,
 --  users_username VARCHAR NOT NULL
 --  );

 -- CREATE TABLE questions (
 --  id SERIAL PRIMARY KEY,
 --  links_id INT,
 --  question_text VARCHAR
 --  );

 CREATE TABLE surveys (
    id SERIAL PRIMARY KEY,
    user_id INT,
    url VARCHAR,
    q1 VARCHAR,
    q2 VARCHAR,
    q3 VARCHAR,
    q4 VARCHAR,
    q5 VARCHAR
  );

 -- CREATE TABLE answers (
 --    id SERIAL PRIMARY KEY,
 --    users_username VARCHAR,
 --    question_id INT,
 --    answer VARCHAR
 --  );

 CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    user_id INT,
    survey_id INT,
    a1 VARCHAR,
    a2 VARCHAR,
    a3 VARCHAR,
    a4 VARCHAR,
    a5 VARCHAR
  );

  -- ALTER TABLE ONLY users
  -- ADD CONSTRAINT username_pkey PRIMARY KEY (username);

  -- ALTER TABLE ONLY surveys
  -- ADD CONSTRAINT user_id_fkey FOREIGN KEY (user_id)
  -- REFERENCES users(id) On DELETE CASCADE;

  -- ALTER TABLE ONLY answers
  -- ADD CONSTRAINT user_id_fkey FOREIGN KEY (user_id)
  -- REFERENCES users(id) On DELETE CASCADE;

  -- ALTER TABLE ONLY answers
  -- ADD CONSTRAINT survey_id_fkey FOREIGN KEY (survey_id)
  -- REFERENCES surveys(id) On DELETE CASCADE;


  -- ALTER TABLE ONLY links
  -- ADD CONSTRAINT username_fkey FOREIGN KEY (users_username)
  -- REFERENCES users(username) On DELETE CASCADE;

  -- ALTER TABLE ONLY questions
  -- ADD CONSTRAINT link_url_id FOREIGN KEY (links_id)
  -- REFERENCES links(id) On DELETE CASCADE;

  -- ALTER TABLE ONLY answers
  -- ADD CONSTRAINT users_username_fkey FOREIGN KEY (users_username)
  -- REFERENCES users(username) On DELETE CASCADE;

  -- ALTER TABLE ONLY answers
  -- ADD CONSTRAINT question_id_fkey FOREIGN KEY (question_id)
  -- REFERENCES questions(id) On DELETE CASCADE On UPDATE CASCADE;

COMMIT;



