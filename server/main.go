package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/golang-jwt/jwt/v5"
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

	app.Post("/login", func(c *fiber.Ctx) error {
		user := new(User)
		if err := c.BodyParser(user); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid request",
			})
		}
		claims := jwt.MapClaims{
			"name":  user.Name,
			"email": user.Email,
			"exp":   time.Now().Add(time.Hour * 24).Unix(), // expires in 1 day
		}
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		signedToken, err := token.SignedString(authSecret)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "Could not generate token",
			})
		}

		return c.JSON(fiber.Map{
			"message": "Success",
			"user":    user,
			"token":   signedToken,
		})
	})

	println("🚀 Server running at http://localhost:8000")
	err := app.Listen(":8000")
	if err != nil {
		panic(err)
	}

}
