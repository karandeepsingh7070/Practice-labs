package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	routes "github.com/karan/practicelapbs/routes"
)

type User struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

var authSecret = []byte("copowered by WisdomBits")

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:3000",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS",
		AllowCredentials: true,
	}))
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("You are connected to the Practice Labs Server")
	})
	routes.AuthRoutes(app)

	println("🚀 Server running at http://localhost:8000")
	err := app.Listen(":8000")
	if err != nil {
		panic(err)
	}

}
