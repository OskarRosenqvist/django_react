# Using Python image on Alpine Linux Lightweight designed to run in RAM
FROM python:3.10-alpine
ENV PYTHONUNBUFFERED 1

RUN apk update && apk add ca-certificates gcc postgresql-dev linux-headers musl-dev libffi-dev jpeg-dev zlib-dev bash

WORKDIR /app

# Add requirements.txt and install requirements
ADD ./requirements.txt /app/requirements.txt

# Install required python packages
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy whole app into the container
COPY start.sh /app/
COPY backend /app/
# COPY gcloud-service-key.json /app/
# Start server
CMD ["./start.sh"]
