FROM golang:1.18-alpine as build

WORKDIR /app

COPY ./backend/go.mod ./
COPY ./backend/go.sum ./

RUN go mod download

COPY ./backend/*.go ./
COPY ./backend/db/db.go ./db/

RUN go build -o /server

FROM alpine:3.14.1

WORKDIR /usr/app

COPY --from=build /server /server

ENTRYPOINT ["/server"]