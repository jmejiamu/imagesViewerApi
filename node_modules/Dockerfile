FROM postgres:10.3

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /testdata/ /docker-entrypoint-initdb.d/testdata/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/
