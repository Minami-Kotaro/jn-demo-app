#!/bin/bash -x

psql -U "postgres" << EOSQL
SELECT 'CREATE DATABASE "jn-demo-app-db"'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'jn-demo-app-db')\gexec
EOSQL

psql -f ./docker-entrypoint-initdb.d/data/jnDemoApp-dev-ddl.sql -U postgres -d 'jn-demo-app-db'
psql -f ./docker-entrypoint-initdb.d/data/jnDemoApp-dev-ddl-seq.sql -U postgres -d 'jn-demo-app-db'
psql -f ./docker-entrypoint-initdb.d/data/seeding-data.sql -U postgres -d 'jn-demo-app-db'
