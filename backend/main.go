package main

import (
	"github.com/slaveeks/simple-messenger/db"
	"log"
	"net/http"
)

func main() {
	// Connect to database
	db.Connect()
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Request on /")
	})
	var port string
	port = ":8000"
	log.Printf("Server listen on %s", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}
}
