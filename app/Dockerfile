FROM python:3.9-alpine as builder
COPY . /app
WORKDIR /app
RUN apk add gcc musl-dev python3-dev libffi-dev openssl-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -U flask-cors

FROM python:3.9-alpine as production
COPY . /app
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.9/site-packages /usr/local/lib/python3.9/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin
ENTRYPOINT ["python"]
CMD ["rest.py"]



