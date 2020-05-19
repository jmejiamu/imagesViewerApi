BEGIN TRANSACTION;

-- Users Table will hold data for register

CREATE TABLE users
(
    user_id serial PRIMARY KEY,
    name TEXT,
    email TEXT,
    entries BIGINT DEFAULT 0
);

-- Images table will hold data for image paths

CREATE TABLE images
(
    user_id TEXT NOT NUll,
    image_id serial PRIMARY KEY,
    path_images TEXT
);

-- Comments table will hold data with the comment that user will do .. add email.

CREATE TABLE comments
(
    user_id TEXT NOT NULL,
    image_id TEXT NOT NULL,
    users_comments TEXT
);

-- register
CREATE TABLE register
(
    user_id SMALLSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE

);
-- signin
-- change value type to char for store password hash see len of the output hash....
CREATE TABLE signin
(
    user_id SMALLSERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Reply ** need to fix this....** add the email..
CREATE TABLE reply
(
    user_id TEXT NOT NULL,
    username TEXT NOT NULL,
    user_reply TEXT
);

COMMIT;
