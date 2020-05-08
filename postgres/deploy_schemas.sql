-- Deploy database tables 
-- Order matter here if tables depend on each other
\i '/docker-entrypoint-initdb.d/tables/users.sql'

\i '/docker-entrypoint-initdb.d/testdata/test.sql'

