package main

type auth struct {
	MessageId string `json:"messageId"`
	Payload   struct {
		Token string `json:"token"`
	} `json:"payload"`
	Type string `json:"type"`
}
