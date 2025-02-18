FROM ubuntu
RUN apt-get update
RUN apt-get install python3 -y
RUN apt-get install python3-pip -y

RUN apt-get install python3-flask -y

COPY ./source-code /opt/source-code

ENTRYPOINT ["python3"]
CMD ["/opt/source-code/app.py"]