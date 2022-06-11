package main

import (
	"github.com/slaveeks/simple-messenger/db"
	"log"
	"net/http"
)

func main() {
	// Connect to database
	db.Connect()

	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	var port string
	port = ":8000"
	log.Printf("Server listen on %s", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}
}
