db.products.insertMany(
    [
        {
            "productName": "Laptop Pro",
            "brand": "TechCorp",
            "category": "Electronics",
            "specs": {
                "processor": "Intel Core i9",
                "ram": "32GB",
                "storage": [
                    { "type": "SSD", "size": "1TB" },
                    { "type": "HDD", "size": "2TB" }
                ],
                "screen": {
                    "size": "15.6 inches",
                    "resolution": "4K"
                },
                "features": ["Touchscreen", "Backlit Keyboard", "Thunderbolt Ports"]
            },
            "price": 1000,
            "discountedPrice": 830,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ab", "score": 5, "reviewDate": ISODate("2023-09-15T00:00:00Z"), "comment": "Excellent performance!" },
                { "userId": "63b21d49c254d7e8456789ac", "score": 4, "reviewDate": "2023-09-16", "comment": "A bit pricey but worth it." }
            ],
            "inventory": {
                "location": [
                    { "store": "Main Warehouse", "quantity": 50 },
                    { "store": "Downtown Store", "quantity": 20 }
                ]
            },
            "available": true,
            "tags": ["high-performance", "professional", "portable"],
            "releaseDate": ISODate("2023-01-01T00:00:00Z"),
            "dimensions": { "width": 35.8, "height": 1.8, "depth": 24.5 },
            "location": {
                "type": "Point",
                "coordinates": [-122.4194, 37.7749]
            },
            "relatedProducts": [456, 789],
            "isFeatured": true,
            "isBestSeller": true,
            "warranty": "3 years"
        },
        {
            "productName": "Gaming PC Ultra",
            "brand": "BuildMaster",
            "category": "Electronics",
            "specs": {
                "processor": "AMD Ryzen 9",
                "ram": "64GB",
                "storage": [
                    { "type": "NVMe SSD", "size": "2TB" },
                    { "type": "HDD", "size": "4TB" }
                ],
                "gpu": {
                    "type": "NVIDIA RTX 4090",
                    "memory": "24GB"
                },
                "coolingSystem": "Liquid Cooling"
            },
            "price": 3999.99,
            "discountedPrice": 1000,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ad", "score": 5, "reviewDate": ISODate("2023-09-10T00:00:00Z"), "comment": "Handles any game like a dream." }
            ],
            "inventory": {
                "location": [
                    { "store": "Gaming Hub", "quantity": 10 },
                    { "store": "Online Store", "quantity": 50 }
                ]
            },
            "available": true,
            "tags": ["desktop", "gaming", "high-end", "RTX"],
            "releaseDate": ISODate("2023-10-15T00:00:00Z"),
            "dimensions": { "width": 20.0, "height": 45.0, "depth": 50.0 },
            "location": {
                "type": "Point",
                "coordinates": [-74.006, 40.7128]
            },
            "relatedProducts": [101, 102],
            "isFeatured": true,
            "isBestSeller": true,
            "warranty": "5 years"
        },
        {
            "productName": "Smartphone X",
            "brand": "TechMobile",
            "category": "Electronics",
            "specs": {
                "processor": "Snapdragon 888",
                "ram": "8GB",
                "storage": [
                    { "type": "UFS", "size": "256GB" }
                ],
                "camera": {
                    "primary": "108MP",
                    "secondary": "32MP",
                    "features": ["Night Mode", "Portrait", "HDR"]
                },
                "battery": {
                    "capacity": "4500mAh",
                    "fastCharging": true
                }
            },
            "price": 699.99,
            "discountedPrice": null,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ae", "score": 4, "reviewDate": "2023-08-25T00:00:00Z", "comment": "Great phone but heats up occasionally." }
            ],
            "inventory": {
                "location": [
                    { "store": "Mobile World", "quantity": 100 },
                    { "store": "Main Warehouse", "quantity": 200 }
                ]
            },
            "available": true,
            "tags": ["smartphone", "5G", "water-resistant", "high-performance"],
            "releaseDate": ISODate("2023-03-10T00:00:00Z"),
            "dimensions": { "width": 7.5, "height": 15.0, "depth": 0.8 },
            "relatedProducts": [112, 113],
            "isFeatured": false,
            "isBestSeller": true,
            "warranty": "2 years"
        },
        {
            "productName": "Bluetooth Headphones X",
            "brand": "AudioMax",
            "category": "Accessories",
            "specs": {
                "type": "Over-Ear",
                "features": {
                    "noiseCancellation": true,
                    "batteryLife": "30 hours",
                    "audioCodec": ["AAC", "aptX", "LDAC"]
                }
            },
            "price": 249.99,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789af", "score": 3, "reviewDate": "2023-08-01", "comment": "Average sound quality." },
                { "userId": "63b21d49c254d7e8456789b0", "score": 5, "reviewDate": ISODate("2023-08-05T00:00:00Z"), "comment": "Fantastic for the price!" }
            ],
            "inventory": {
                "location": [
                    { "store": "Electronics Zone", "quantity": 150 },
                    { "store": "Online Store", "quantity": 300 }
                ]
            },
            "available": true,
            "tags": ["wireless", "noise-cancelling", "headphones"],
            "releaseDate": ISODate("2023-05-05T00:00:00Z"),
            "dimensions": { "width": 20.0, "height": 18.0, "depth": 7.0 },
            "relatedProducts": [116, 117],
            "isFeatured": false,
            "isBestSeller": true,
            "warranty": "1 year"
        },
        {
            "productName": "Eco Electric Scooter",
            "brand": "GreenRide",
            "category": "Transportation",
            "specs": {
                "maxSpeed": "20 mph",
                "range": "35 miles",
                "features": ["Foldable", "LED Display"]
            },
            "price": 450.00,
            "ratings": [],
            "inventory": {
                "location": [
                    { "store": "Urban Scooters", "quantity": 60 },
                    { "store": "Main Warehouse", "quantity": 150 }
                ]
            },
            "available": true,
            "tags": ["eco-friendly", "scooter", "electric"],
            "releaseDate": ISODate("2023-06-01T00:00:00Z"),
            "dimensions": { "width": 45.0, "height": 120.0, "depth": 6.0 },
            "location": {
                "type": "Point",
                "coordinates": [-73.935242, 40.73061]
            },
            "relatedProducts": [118, 119],
            "discounted": true,
            "isFeatured": true,
            "isBestSeller": false
        }
    ]    
)


//Question-1: Get only the first rating for all products
db.products.find({},{
  "ratings":{
    $slice:1
  }
}) 

//Question-2: Retrieve the last two ratings for all products that have at least two ratings
db.products.find({
  $expr:{
    $gt:[
      {$size:"$ratings"},
      1
    ]
  }
},{
  "ratings":{$slice:-2}
}) 

//Question-3: Show only the first storage option for all products
db.products.find({},{
  "inventory.location":{
    $slice:1
  }
}) 

//Question-4: Find products with a price greater than $500, showing only their first rating.
db.products.find({
  price:{
    $gt:500
  }
},{
  "ratings":{
    $slice:1
  }
}) 

//Question-5: Get the first 2 tags for all products that have at least two tags
db.products.find({
  $expr:{
    $gt:[
      {$size:"$tags"},
      1
    ]
  }
},{
  tags:{
    $slice:2
  }
}) 

//Quesiton-6: Retrieve products that are bestsellers and show only their last rating
db.products.find({
  isBestSeller:true
},{
  ratings:{
    $slice:-1
  }
})

//Question-7: Retrieve the last 2 ratings for products that have more than 1 rating.
db.products.find({
  $expr:{
    $gt:[
      {$size:"$ratings"},
      1
    ]
  }
},{
  ratings:{
    $slice:-2
  }
}) 

//Question-8: Retrieve the first 3 ratings for the "Gaming PC Ultra" product.
db.products.find({
  productName:"Gaming PC Ultra"
},{
  ratings:{
    $slice:3
  }
}) 

//Question-9: Retrieve products that are best sellers, have at least 2 ratings, and show only the first 2 ratings
db.products.find({
  isBestSeller:true,
  $expr:{
    $gte:[
      {$size:"$ratings"},
      2
    ]
  }
},{
  ratings:{
    $slice:2
  }
}) 

//Question-10: Retrieve products in the "Electronics" category that have more than 1 rating and show the last rating
db.products.find({
  category:"Electronics",
  $expr:{
    $gt:[
      {$size:"$ratings"},
      1
    ]
  }
},{
  ratings:{
    $slice:-1
  }
}) 

//Question-11: Retrieve all products in the "Accessories" category with at least 1 rating and show the last 2 store locations from the inventory array
db.products.find({
  category:"Accessories",
  $expr:{
    $gte:[
      {$size:"$ratings"},
      1
    ]
  }
},{
  "inventory.locations":{
    $slice:2
  }
}).pretty() 

//Question-12: Retrieve products that have a release date before 2023-01-01 and show the first 2 ratings
db.products.find({
  releaseDate:{
    $gt:ISODate("2023-01-01")
  }
},{
  ratings:{
    $slice:2
  }
}) 

//Question-13: Retrieve products that have at least 2 ratings, where the price is greater than 500, and show the last 3 ratings.
db.products.find({
  $expr:{
    $gt:[
      {$size:"$ratings"},
      1
    ]
  },
  price:{
    $gt:500
  }
},{
  ratings:{
    $slice:-3
  }
}) 

//Question-14: Retrieve products with at least 2 ratings, a discounted price, and display the first rating only
db.products.find({
  $expr:{
    $gte:[
      {$size:"$ratings"},
      2
    ]
  },
  discountedPrice:{
    $gt:0
  }
},{
  ratings:{
    $slice:1
  }
}) 

//Question-15: Retrieve products that are in the "Transportation" category, have no ratings, and show the first 2 related products.
db.products.find({
  category:"Transportation",
  ratings:{
    $size:0
  }
},{
  relatedProducts:{
    $slice:2
  }
}) 

//Question-16: Retrieve best-selling products in the "Electronics" category with more than 1 ratings, and show only the first 3 ratings.
db.products.find({
  isBestSeller:true,
  category:"Electronics",
  $expr:{
    $gte:[
      {$size:"$ratings"},
      2
    ]
  }
},{
  ratings:{
    $slice:3
  }
}) 

//Question-17: Retrieve products in the "Accessories" category that have between 1 and 3 ratings, and show only the last 2 ratings
db.products.find({
  category:"Electronics",
  $expr:{
    $and:[
      {$gte:[
        {$size:"$ratings"},
        1
      ]},
      {$lte:[
        {$size:"$ratings"},
        3
      ]},
      
    ]
  }
},{
  ratings:{
    $slice:-2
  }
}) 

//Question-18: Retrieve products that have a discounted price, are in the "Electronics" category, and show only the first rating for each
db.products.find({
  discountedPrice:{
    $ne:null
  },
  category:"Electronics"
},{
  ratings:{
    $slice:1
  }
}) 

//Question-19: Retrieve products that have more than 1 rating, and their price is between 500 and 2000, and show the last 3 ratings
db.products.find({
  $expr:{
    $gt:[
      {$size:"$ratings"},
      1
    ]
  },
  price:{
    $gte:500,
    $lte:2000
  }
},{
  ratings:{
    $slice:3
  }
}) 

//Question-20: Retrieve products in the "Electronics" category with less than 3 ratings, where inventory has at least 2 store locations, and show the first rating
db.products.find({
  category: "Electronics",
  $expr: {
    $and: [
      { $lt: [{ $size: "$ratings" }, 3] },
      { $gt: [{ $size: "$inventory.location" }, 1] }
    ]
  }
}, {
  ratings: { $slice: 1 }
})




