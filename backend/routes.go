package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{}

func reader(conn *websocket.Conn) {
	for {
		// read in a message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		var a = auth{}
		// print out that message for clarity
		json.Unmarshal(p, &a)

		var message string

		if a.Payload.Token == "321" {
			message = "Authorized"
		} else {
			message = "No!"
			b := []byte(message)
			fmt.Println(a)
			conn.WriteMessage(messageType, b)
			conn.Close()
		}
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}

	}
}

func socketHandler(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	ws, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Fatal(err)
	}

	log.Printf("Client connected")

	reader(ws)
}
