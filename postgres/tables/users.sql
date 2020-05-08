BEGIN TRANSACTION;

-- Users Table will hold data for register

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    name TEXT,
    email TEXT,
    entries BIGINT DEFAULT 0
);

-- Images table will hold data for image paths

CREATE TABLE images (
    user_id TEXT NOT NUll,
    image_id serial PRIMARY KEY,
    path_images TEXT
);

-- Comments table will hold data with the comment that user will do

CREATE TABLE comments (
    user_id TEXT NOT NULL,
    image_id TEXT NOT NULL, 
    users_comments TEXT
);

COMMIT;