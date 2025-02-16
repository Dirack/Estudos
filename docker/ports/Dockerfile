FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python3-pip python-dev-is-python3 build-essential
COPY src /app
WORKDIR /app
RUN apt install python3-flask -y
ENTRYPOINT ["python"]
CMD ["app.py"]