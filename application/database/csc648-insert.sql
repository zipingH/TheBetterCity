select * from user;
set @user_id = last_insert_id();
INSERT INTO user (name, email, password, id, role) VALUES ('test123', 'test123@mail.com','test123',@id,'user');


Select * from status;
INSERT into status(status_id, status) VALUES(6, 'Open');
INSERT into status(status_id, status) VALUES(7, 'In Progress');
INSERT into status(status_id, status) VALUES(8, 'Resolved');

select * from category;
INSERT into category(category_id, category) VALUES(1, 'Litter');
INSERT into category(category_id, category) VALUES(2, 'Water Polution');
INSERT into category(category_id, category) VALUES(3, 'Bio-Hazards');
INSERT into category(category_id, category) VALUES(4, 'Broken City Property');
INSERT into category(category_id, category) VALUES(5, 'Other');



SELECT * FROM issue;
SET @issue_id = LAST_INSERT_ID();
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Broken Slide', '../IssueImages/broken-slide.jpg', 'Harrison Park', 'There is a broken slide at the childrens park by my house. Someone should fix it quickly before a child is hurt', '6', '1', NULL, '4');
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Open Man Hole Cover ', '', 'Delores Park', 'There is an open manhole cover near delores park', '8', '1', NULL, '5');
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Park Looks Like a Dump', '', 'hunters park', 'people have been dumping their garbage at hunterspark for months now! could someone please come and clean it up? my children love playing there but its geeting to dangerous due to all the waste', '7', '1', NULL, '1');
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Gross water at Blakewater Park', '', 'Blakewater Park', 'There has been a gross stagnit puddle that never dries right where my two boys play. it would be greatly appreciated if this can be cleaned up before a childe catches something', '6', '1', NULL, '2');
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Dead Cayote', '', 'El Derado Park', 'there are two dead cayotes at the park were i meditate every morning. I\'ts really hard to stay zen when the smell of rotting flesh surrounds me', '8', '1', NULL, '5');
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id, 'Trash overflow', '', 'Golden gate park', 'Trash is overflowing in golden gate park', '7', '1', NULL, '4');
-- ALTER TABLE issue AUTO_INCREMENT = 5;
INSERT INTO issue(issue_id,title, photo, location, description, status_id, user_id, time_stamp, category_id) VALUES (@issue_id,'Overflow of garbage',concat("../IssueImages/","test.jpg"),'1600 Holloway Ave, San Francisco, CA, 94132', 'Too much garbage is being dump into this area.','6',(SELECT id FROM user where email = 'john@john.com'),'2019-08-06 13:23:44', (SELECT category_id FROM category WHERE category = "1"));
-- DELETE FROM issue where issue_id = '1';
