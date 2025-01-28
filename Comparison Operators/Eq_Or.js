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

//Question-1: Find products where the price is 850.00 and the tags contains "electric" or "gaming"
db.products.find({
    price: { $eq: 850.00 },
    tags: { $in: ["electric","gaming"] },
}, {tags : 1})

//Question-2: Find products where the releaseDate is exactly "2023-01-01" or category is "Transportation"
db.products.find({
    $or:[
        {releaseDate:{$eq:"2023-01-01"}},
        {category:"Transportation"}
    ]
})

//Question-3: Find products where the price is 850.00 or the category is "Home Appliances"
db.products.find({
    $or:[
        {category:"Home Appliances"},
        {price:850.00}
    ]
})

//Question-4: Find products where the tags contain "laptop" or price is less than 1000.00
db.products.find({
    $or:[
        {tags:{$in:["laptop"]}},
        {price:{$lt:1000.00}}
    ]
})

//Question-5: Find products where the price is 850.00 or the specs.processor is "Intel Core i7"
db.products.find({
    $or:[
        {price:{$eq:850.00}},
        {"specs.processor":{$eq:"Intel Core i7"}}
    ]
})

//Question-6: Find products where tags contains "smartphone" or "5G" and price is exactly 699.99
db.products.find({
    $or:[
        {
            tags:{$eq:"smartphone"}
        },
        {
            tags:{$eq:"5G"}
        }
    ],
    price:{$eq:699.99}
})

//Question-7: Find products where the releaseDate is either "2023-01-01" or "2023-03-10" and the tags array contains "high-performance"
db.products.find({
    $and:[
        {
            $or:[
                {releaseDate:{$eq:"2023-01-01"}},
                {releaseDate:{$eq:"2023-03-10"}}
            ]
        },{
            tags:{$in:["high-performance"]}
        }
    ]
})

//Question-8: Find products that are either in the "Electronics" category or have a price of exactly $550
db.products.find({
  $or: [
    { category: { $eq: "Electronics" } },
    { price: { $eq: 550 } }
  ]
});

//Question-9: Find products that are either tagged with "gaming" or have a rating of 5 from any user
db.products.find({
  $or: [
    { tags: { $eq: "gaming" } },
    { "ratings.score": { $eq: 5 } }
  ]
});

//Question-10: Find products where the price is either exactly $850 or discounted
db.products.find({
  $or: [
    { price: { $eq: 850 } },
    { discounted: { $eq: true } }
  ]
});

//Question-11: Find products that either have "Intel Core i7" or "AMD Ryzen 9" processors
db.products.find({
  $or: [
    { "specs.processor": { $eq: "Intel Core i7" } },
    { "specs.processor": { $eq: "AMD Ryzen 9" } }
  ]
});

//Question-12: Find products that are either in the "Home Appliances" category or are tagged with "eco-friendly"
db.products.find({
  $or: [
    { category: { $eq: "Home Appliances" } },
    { tags: { $eq: "eco-friendly" } }
  ]
});

//Question-13: Find products that are either available or have a "Smart TV" feature
db.products.find({
  $or: [
    { available: { $eq: true } },
    { "specs.features.type": { $eq: "Smart TV" } }
  ]
});

//Question-14: Find products that are either released in 2023 or have a width dimension of exactly 25.0 cm
db.products.find({
  $or: [
    { releaseDate: { $gte: new ISODate("2023-01-01T00:00:00.000Z") } },
    { "dimensions.width": { $eq: 25.0 } }
  ]
});

//Question-15: Find products that are either related to product ID 120 or have "noiseCancellation" as a feature
db.products.find({
  $or: [
    { relatedProducts: { $eq: 120 } },
    { "specs.features.noiseCancellation": { $eq: true } }
  ]
});

//Question-16: Find products that either have a rating score of 4 or are tagged as "bluetooth"
db.products.find({
  $or: [
    { "ratings.score": { $eq: 4 } },
    { tags: { $eq: "bluetooth" } }
  ]
});

//Question-17: Find products that are either in the "Transportation" category or have a price greater than $1000
db.products.find({
  $or: [
    { category: { $eq: "Transportation" } },
    { price: { $gt: 1000 } }
  ]
});

//Question-18: Find products where the category is either "Electronics" or "Home Appliances"
db.products.find({
    $or: [
      { category: { $eq: "Electronics" } },
      { category: { $eq: "Home Appliances" } }
    ]
})

//Question-19: Find products where the discounted field is either true or the releaseDate is in 2023:
db.products.find({
    $or: [
      { discounted: { $eq: true } },
      { releaseDate: { $gte: new Date("2023-01-01") } }
    ]
})

//Question-20: Find products where the tags contains either "gaming" or "laptop":
db.products.find({
    $or: [
      { tags: { $eq: "gaming" } },
      { tags: { $eq: "laptop" } }
    ]
})    