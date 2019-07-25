FROM ubuntu:latest
RUN apt-get update && apt-get install --no-install-recommends --no-install-suggests -y \
    python3-pip python3-setuptools python3-dev && rm -rf /var/lib/apt/lists/*

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir /djangoapp
COPY . /djangoapp
WORKDIR /djangoapp
RUN pip3 install -r requirements.txt

RUN chmod +x /djangoapp/entrypoint.sh

ENTRYPOINT ["sh", "/djangoapp/entrypoint.sh"]  # eksekusi bash file entrypoint