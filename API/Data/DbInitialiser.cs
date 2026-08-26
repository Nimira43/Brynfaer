using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DbInitialiser
{
  public static void InitDb(WebApplication app)
  {
    using var scope = app.Services.CreateScope();

    var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
      ?? throw new InvalidOperationException("Failed to retrieve store context.");

    SeedData(context);
  }

  private static void SeedData(StoreContext context)
  {
    context.Database.Migrate();

    if (context.Products.Any()) return;

    var products = new List<Product>
    {
      new() {
          Name = "Venom Speedster Board 2000",
          Description = "A high-stability performance board engineered for fast downhill carving. Built for riders who demand precision and control on icy terrain.",
          Price = 20000,
          PictureUrl = "/images/products/sb-ang1.png",
          Brand = "Venom",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "Green Venom Board 3000",
          Description = "A lightweight all-mountain board offering smooth turns and reliable grip. Perfect for intermediate riders looking to progress with confidence.",
          Price = 15000,
          PictureUrl = "/images/products/sb-ang2.png",
          Brand = "Venom",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "GlacierCore Board Speed Rush 3",
          Description = "Designed for aggressive riders, this board delivers explosive acceleration and rock-solid stability at high speeds.",
          Price = 18000,
          PictureUrl = "/images/products/sb-core1.png",
          Brand = "GlacierCore",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "GlacierCore Super Board",
          Description = "A premium board crafted for expert riders. Its reinforced core provides unmatched durability and responsiveness on challenging slopes.",
          Price = 30000,
          PictureUrl = "/images/products/sb-core2.png",
          Brand = "GlacierCore",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "NordicEdge Super Whizzy Fast Board",
          Description = "A dynamic freestyle board built for quick transitions, jumps, and playful riding. Ideal for park enthusiasts and trick-focused riders.",
          Price = 25000,
          PictureUrl = "/images/products/sb-react1.png",
          Brand = "NordicEdge",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "SnowForge Entry Board",
          Description = "A dependable beginner board offering smooth handling and predictable performance. Great for newcomers learning the fundamentals.",
          Price = 12000,
          PictureUrl = "/images/products/sb-ts1.png",
          Brand = "SnowForge",
          Type = "Boards",
          QuantityInStock = 100
      },
      new() {
          Name = "GlacierCore Blue Hat",
          Description = "A warm, breathable winter hat designed for long days on the mountain. Features a soft lining for maximum comfort.",
          Price = 1000,
          PictureUrl = "/images/products/hat-core1.png",
          Brand = "GlacierCore",
          Type = "Hats",
          QuantityInStock = 100
      },
      new() {
          Name = "Green NordicEdge Woolen Hat",
          Description = "A premium wool hat offering excellent insulation and moisture control. Perfect for cold-weather adventures.",
          Price = 8000,
          PictureUrl = "/images/products/hat-react1.png",
          Brand = "NordicEdge",
          Type = "Hats",
          QuantityInStock = 100
      },
      new() {
          Name = "Purple NordicEdge Woolen Hat",
          Description = "A stylish, ultra-warm hat crafted for comfort during harsh winter conditions. Its bold colour stands out on the slopes.",
          Price = 1500,
          PictureUrl = "/images/products/hat-react2.png",
          Brand = "NordicEdge",
          Type = "Hats",
          QuantityInStock = 100
      },
      new() {
          Name = "IceTrail Blue Gloves",
          Description = "Durable winter gloves offering excellent grip and insulation. Designed for both skiing and everyday cold-weather use.",
          Price = 1800,
          PictureUrl = "/images/products/glove-code1.png",
          Brand = "IceTrail",
          Type = "Gloves",
          QuantityInStock = 100
      },
      new() {
          Name = "IceTrail Green Gloves",
          Description = "Lightweight gloves with reinforced palms for improved handling of ski poles. Comfortable and weather-resistant.",
          Price = 1500,
          PictureUrl = "/images/products/glove-code2.png",
          Brand = "IceTrail",
          Type = "Gloves",
          QuantityInStock = 100
      },
      new() {
          Name = "NordicEdge Purple Gloves",
          Description = "Soft, flexible gloves designed for warmth without sacrificing dexterity. Ideal for active winter sports.",
          Price = 1600,
          PictureUrl = "/images/products/glove-react1.png",
          Brand = "NordicEdge",
          Type = "Gloves",
          QuantityInStock = 100
      },
      new() {
          Name = "NordicEdge Green Gloves",
          Description = "A sleek pair of insulated gloves offering excellent wind protection. Built for long days on the slopes.",
          Price = 1400,
          PictureUrl = "/images/products/glove-react2.png",
          Brand = "NordicEdge",
          Type = "Gloves",
          QuantityInStock = 100
      },
      new() {
          Name = "Red Summit Boots",
          Description = "Heavy-duty ski boots engineered for maximum support and comfort. Their rugged design ensures stability on steep terrain.",
          Price = 25000,
          PictureUrl = "/images/products/boot-redis1.png",
          Brand = "Red Summit",
          Type = "Boots",
          QuantityInStock = 100
      },
      new() {
          Name = "GlacierCore Red Boots",
          Description = "A reliable pair of boots offering excellent ankle support and warmth. Built for demanding alpine conditions.",
          Price = 18999,
          PictureUrl = "/images/products/boot-core2.png",
          Brand = "GlacierCore",
          Type = "Boots",
          QuantityInStock = 100
      },
      new() {
          Name = "GlacierCore Purple Boots",
          Description = "Stylish yet rugged boots designed for comfort and durability. Ideal for both resort skiing and backcountry exploration.",
          Price = 19999,
          PictureUrl = "/images/products/boot-core1.png",
          Brand = "GlacierCore",
          Type = "Boots",
          QuantityInStock = 100
      },
      new() {
          Name = "Venom Purple Boots",
          Description = "Warm, supportive boots crafted for all-day wear. Their reinforced shell provides excellent protection against harsh weather.",
          Price = 15000,
          PictureUrl = "/images/products/boot-ang2.png",
          Brand = "Venom",
          Type = "Boots",
          QuantityInStock = 100
      },
      new() {
          Name = "Venom Blue Boots",
          Description = "Versatile ski boots offering a comfortable fit and strong performance across varied snow conditions.",
          Price = 18000,
          PictureUrl = "/images/products/boot-ang1.png",
          Brand = "Venom",
          Type = "Boots",
          QuantityInStock = 100
      },
    };
    context.Products.AddRange(products);
    context.SaveChanges();
  }
}
