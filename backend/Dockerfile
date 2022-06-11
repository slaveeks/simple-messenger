FROM golang:1.18-alpine as build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY *.go ./
COPY db/db.go ./db/

RUN go build -o /server

FROM alpine:3.14.1

WORKDIR /usr/app

COPY --from=build /server /server

ENTRYPOINT ["/server"]