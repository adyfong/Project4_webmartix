 BEGIN;

 DROP TABLE IF EXISTS users CASCADE;
 DROP TABLE IF EXIST links CASCADE;
 DROP TABLE IF EXISTS questions CASCADE;

 CREATE TABLE users (
  id SERIAL,
  username VARCHAR NOT NULL PRIMARY_KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  type VARCHAR NOT NULL
   );

 CREATE TABLE links (
  id SERIAL,
  url VARCHAR NOT NULL PRIMARY_KEY,
  users_username VARCHAR NOT NULL
  );

 CREATE TABLE questions (
  id SERIAL,
  link_url VARCHAR,
  question_tag VARCHAR,
  question_text VARCHAR
  );

 CREATE TABLE answers (
    id SERIAL,
    users_username VARCHAR,
    questions_tag VARCHAR,
    answer VARCHAR
  );

  ALTER TABLE ONLY users
  ADD CONSTRAINT username_pkey PRIMARY KEY (username);

  ALTER TABLE ONLY links
  ADD CONSTRAINT username_fkey FOREIGN KEY (users_username)
  REFERENCES users(username) On DELETE CASCADE;

  ALTER TABLE ONLY questions
  ADD CONSTRAINT link_url_fkey FOREIGN KEY (link_url)
  REFERENCES links(url) On DELETE CASCADE;

  ALTER TABLE ONLY answers
  ADD CONSTRAINT users_username_fkey FOREIGN KEY (users_username)
  REFERENCES users(username) On DELETE CASCADE;

  ALTER TABLE ONLY answers
  ADD CONSTRAINT questions_tag_fkey FOREIGN KEY (questions_tag)
  REFERENCES questions(question_tag) On DELETE CASCADE

COMMIT;



