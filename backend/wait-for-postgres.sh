#!/bin/sh
# wait-for-postgres.sh
set -e

echo "Waiting for database...."
until python /app/manage.py check --database default
do
  sleep 5
done

until python /app/manage.py migrate
do
  sleep 5
done

exec "$@"