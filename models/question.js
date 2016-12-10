
select * from answers where users_username = 'Alastair'
select * from answers where questions_id in (select id from questions where link_url = 'http://www.cnn.com')

