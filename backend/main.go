package main

import (
	"log"
	"net/http"
)

func main() {
	var port string
	port = "8000"
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Printf("Server listen on %s", port)
	}
}
