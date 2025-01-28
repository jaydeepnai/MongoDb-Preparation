db.products.insertMany([
    {
        "productName": "Laptop",
        "category": "Electronics",
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "storage": {
                "type": "SSD",
                "size": "512GB"
            }
        },
        "price": 999.99,
        "ratings": [
            { "userId": "63b21d49c254d7e8456789ab", "score": 5, "reviewDate": "2023-09-15T00:00:00.000Z" },
            { "userId": "63b21d49c254d7e8456789ac", "score": 4, "reviewDate": "2023-09-16T00:00:00.000Z" }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance"],
        "releaseDate": "2023-01-01T00:00:00.000Z",
        "meta": null,
        "dimensions": { "width": 35.8, "height": 1.9, "depth": 24.7 },
        "relatedProducts": [123, 456],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "Gaming PC",
        "category": "Electronics",
        "specs": {
            "processor": "AMD Ryzen 9",
            "ram": "32GB",
            "storage": {
                "type": "NVMe SSD",
                "size": "1TB"
            }
        },
        "price": 1899.99,
        "ratings": [
            { "userId": "63b21d49c254d7e8456789ad", "score": 5, "reviewDate": "2023-09-10T00:00:00.000Z" }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": "2023-02-15T00:00:00.000Z",
        "meta": null,
        "dimensions": { "width": 20.0, "height": 45.0, "depth": 50.0 },
        "relatedProducts": [789, 101],
        "reviews": [],
        "discounted": true
    },
    {
        "productName": "Smartphone",
        "category": "Electronics",
        "specs": {
            "processor": "Snapdragon 888",
            "ram": "8GB",
            "storage": {
                "type": "UFS",
                "size": "256GB"
            }
        },
        "price": 699.99,
        "ratings": [
            { "userId": "63b21d49c254d7e8456789ae", "score": 4, "reviewDate": "2023-08-25T00:00:00.000Z" }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": "2023-03-10T00:00:00.000Z",
        "meta": null,
        "dimensions": { "width": 7.5, "height": 15.0, "depth": 0.8 },
        "relatedProducts": [112, 113],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "4K Television",
        "category": "Electronics",
        "specs": {
            "screenSize": "55 inches",
            "features": {
                "type": "Smart TV",
                "resolution": "4K"
            }
        },
        "price": 1200.00,
        "ratings": [],
        "available": true,
        "tags": ["home entertainment", "TV", "UHD"],
        "releaseDate": "2023-04-20T00:00:00.000Z",
        "meta": null,
        "dimensions": { "width": 123.0, "height": 71.0, "depth": 6.0 },
        "relatedProducts": [114, 115],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "Bluetooth Headphones",
        "category": "Accessories",
        "specs": {
            "type": "Over-Ear",
            "features": {
                "noiseCancellation": true,
                "batteryLife": "24 hours"
            }
        },
        "price": 199.99,
        "ratings": [
            { "userId": "63b21d49c254d7e8456789af", "score": 4, "reviewDate": "2023-09-01T00:00:00.000Z" },
            { "userId": "63b21d49c254d7e8456789b0", "score": 5, "reviewDate": "2023-09-02T00:00:00.000Z" }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": new ISODate("2023-05-05T00:00:00.000Z"),
        "meta": null,
        "dimensions": { "width": 20.0, "height": 18.0, "depth": 7.0 },
        "relatedProducts": [116, 117],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "Electric Scooter",
        "category": "Transportation",
        "specs": {
            "maxSpeed": "25 mph",
            "range": "40 miles"
        },
        "price": 550.00,
        "ratings": [
            { "userId": "63b21d49c254d7e8456789b1", "score": 5, "reviewDate": "2023-07-15T00:00:00.000Z" }
        ],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": "2023-06-01T00:00:00.000Z",
        "meta": null,
        "dimensions": { "width": 40.0, "height": 120.0, "depth": 30.0 },
        "relatedProducts": [118, 119],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "Espresso Machine",
        "category": "Home Appliances",
        "specs": {
            "waterTankCapacity": "2 liters",
            "features": {
                "autoCleaning": true,
                "milkFrother": true
            }
        },
        "price": 850.00,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
        "meta": null,
        "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
        "relatedProducts": [120, 121],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "socket.io",
        "category": "Home Appliances",
        "specs": {
            "waterTankCapacity": "2 liters",
            "features": {
                "autoCleaning": true,
                "milkFrother": true
            }
        },
        "price": 850.00,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
        "meta": null,
        "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
        "relatedProducts": [120, 121],
        "reviews": [],
        "discounted": false
    },
    {
        "productName": "catt.in",
        "category": "Home Appliances",
        "specs": {
            "waterTankCapacity": "2 liters",
            "features": {
                "autoCleaning": true,
                "milkFrother": true
            }
        },
        "price": 850.00,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "electric", "gaming"],
        "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
        "meta": null,
        "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
        "relatedProducts": [120, 121],
        "reviews": [],
        "discounted": false
    }
])

//PS: The .find() method by default applies $and operator to its query conditions

//Question: 1
//Find products where the price is 850.00 and the category is "Home Appliances"
db.products.find({
  $and: [
    { price: { $eq: 850.00 } },
    { category: { $eq: "Home Appliances" } }
  ]
})

//Question: 2
//Find products where the price is 999.99 and the tags array contains "gaming"
db.products.find({
  $and: [
    { price: { $eq: 999.99 } },
    { tags: { $eq: "gaming" } }
  ]
})

//Question: 3
//Find products where the status is "active" and the price is 1200.00
db.products.find({
  $and: [
    { status: { $eq: "active" } },
    { price: { $eq: 1200.00 } }
  ]
})

//Question: 4
//Find products where the category is "Electronics" and the releaseDate is "2023-01-01"
db.products.find({
  $and: [
    { category: { $eq: "Electronics" } },
    { releaseDate: { $eq: "2023-01-01T00:00:00.000Z" } }
  ]
})

//Question: 5
//Find products where the productName is "Gaming PC" and the available status is true
db.products.find({
  $and: [
    { productName: { $eq: "Gaming PC" } },
    { available: { $eq: true } }
  ]
})

//Question: 6
//Find products where the price is 700.00 and the tags array contains "5G"
db.products.find({
  $and: [
    { price: { $eq: 700.00 } },
    { tags: { $eq: "5G" } }
  ]
})

//Question: 7
//Find products where the tags contain "laptop" and price is less than 1000.00
db.products.find({
  $and: [
    { tags: { $eq: "laptop" } },
    { price: { $lt: 1000.00 } }
  ]
})

//Question: 8
//Find products where the price is 1799.99 and the ratings contain a score of 5
db.products.find({
  $and: [
    { price: { $eq: 1799.99 } },
    { "ratings.score": { $eq: 5 } }
  ]
})

//Question: 9
//Find products where the price is 1200.00 and the discounted field is true
db.products.find({
  $and: [
    { price: { $eq: 1200.00 } },
    { discounted: { $eq: true } }
  ]
})

//Question: 10
//Find products where the category is "Accessories" and tags contains "bluetooth"
db.products.find({
  $and: [
    { category: { $eq: "Accessories" } },
    { tags: { $eq: "bluetooth" } }
  ]
})

//Question: 11
//Find products where the releaseDate is "2023-03-10" and price is greater than 500.00
db.products.find({
  $and: [
    { releaseDate: { $eq: "2023-03-10T00:00:00.000Z" } },
    { price: { $gt: 500.00 } }
  ]
})

//Question: 12
//Find products where the tags contains "eco-friendly" and available status is false
db.products.find({
  $and: [
    { tags: { $eq: "eco-friendly" } },
    { available: { $eq: false } }
  ]
})

//Question: 13
//Find products where the price is 850.00 and the specs.processor is "Intel Core i7"
db.products.find({
  $and: [
    { price: { $eq: 850.00 } },
    { "specs.processor": { $eq: "Intel Core i7" } }
  ]
})

//Question: 14
//Find products where the price is 699.99 and discounted is false
db.products.find({
  $and: [
    { price: { $eq: 699.99 } },
    { discounted: { $eq: false } }
  ]
})

//Question: 15
//Find products where the category is "Transportation" and price is 550.00
db.products.find({
  $and: [
    { category: { $eq: "Transportation" } },
    { price: { $eq: 550.00 } }
  ]
})

//Question: 16
//Find products where the tags contains "water-resistant" and the price is exactly 699.99
db.products.find({
  $and: [
    { tags: { $eq: "water-resistant" } },
    { price: { $eq: 699.99 } }
  ]
})

//Question: 17
//Find products where the category is "Electronics" and tags contain both "smartphone" and "5G"
db.products.find({
  $and: [
    { category: { $eq: "Electronics" } },
    { tags: { $eq: "smartphone" } },
    { tags: { $eq: "5G" } }
  ]
})

//Question: 18
//Find products where the category is "Home Appliances" and the releaseDate is "2023-06-01"
db.products.find({
  $and: [
    { category: { $eq: "Home Appliances" } },
    { releaseDate: { $eq: "2023-06-01T00:00:00.000Z" } }
  ]
})

//Question: 19
//Find products where the specs.storage.size is "1TB" or "512GB", and available is true
db.products.find({
  $and: [
    { "specs.storage.size": { $in: ["1TB", "512GB"] } },
    { available: { $eq: true } }
  ]
})

//Question:20
//Find products with a category of "Electronics" and price equal to 999.99:
db.products.find({
  $and: [
    { category: { $eq: "Electronics" } },
    { price: { $eq: 999.99 } }
  ]
})