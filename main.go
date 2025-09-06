package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files
	http.Handle("/", http.FileServer(http.Dir("client/dist")))

	// Start server
	const addr = ":8080"
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
