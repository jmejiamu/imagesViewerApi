BEGIN TRANSACTION;

INSERT INTO users VALUES(1,'Testname','testname@gmail.com', 0);
INSERT INTO images VALUES(1,1,'https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg');
INSERT INTO images VALUES(1,2,'https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg');
INSERT INTO images VALUES(1,3,'https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg');
INSERT INTO images VALUES(1,4,'https://static.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg');

COMMIT;