package main

import (
	"log"
	"net/http"
)

func login(w http.ResponseWriter, r *http.Request) {
	log.Printf("Login")
}

func register(w http.ResponseWriter, r *http.Request) {
	log.Printf("Register")
}
