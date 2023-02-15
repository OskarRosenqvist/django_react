#!/bin/sh
# wait-for-postgres.sh
set -e

until python /app/manage.py check --database default
do
  sleep 1
done

until python /app/manage.py migrate
do
  sleep 1
done

exec "$@"