#!/bin/bash

echo "Starting Gunicorn"
gunicorn --bind 0.0.0.0:8080 --workers 1 --threads 1 --timeout 0 django_react.wsgi:application
