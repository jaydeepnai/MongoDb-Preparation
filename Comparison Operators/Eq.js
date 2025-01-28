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
        "releaseDate": "2023-01-01",
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
        "reviews": ["good","not good","fine"],
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

//Question-1: Find products with a price exactly equal to 999.99
db.products.find({
    price:{$eq:999.99}
})

//Question-2: Update the status field of a product where the productName is "Laptop" to "Out of Stock"
db.products.update(
    {productName:{$eq:"Laptop"}},
    {$set:{status:"Out Of Stock"}}
)

//Question-3: Update all products where category is "Electronics" and set the discounted field to true.
db.products.updateMany(
    {category:{$eq:"Electronics"}},
    {$set:{
        discounted:true
    }}
)

//Question-4: Delete a product where the price is exactly 1200.00.
db.products.deleteOne({price:{$eq:1200.00}})

//Question-5: Delete products where the tags array contains the tag "gaming".
db.products.deleteMany({tags:{$eq:"gaming"}})

//Question-6: Find distinct tags where the category is "Home Appliances".
db.products.distinct("tags",{
    category:{$eq:"Home Appliances"}
})

//Question-7: Find products where the tags array contains "eco-friendly" and available is true but the price is not 1200.00
db.products.find({
    tags:{$in:"eco-friendly"},
    available:{$eq:true},
    price:{$ne:1200.00}
})

//Question-8: Find products where the ratings contain a score of 5 and ratings.userId is "63b21d49c254d7e8456789ab"
db.products.find({
  "ratings.score": { $eq: 5 },
  "ratings.userId": { $eq: "63b21d49c254d7e8456789ab" }
})

//Question-9: Find products where the tags contain "gaming" and the releaseDate is "2023-02-15"
db.products.find({
  tags: { $in: ["gaming"] },
  releaseDate: { $eq: "2023-02-15T00:00:00.000Z" }
})

//Question-10: Find products where specs.features.type is "Smart TV" and specs.screenSize is "55 inches"
db.products.find({
  "specs.features.type": { $eq: "Smart TV" },
  "specs.screenSize": { $eq: "55 inches" }
})

//Question-11: Find products where the tags array exists and contains exactly 3 elements, and the productName is "Bluetooth Headphones"
db.products.find({
    $and:[
        {
            tags:{
                $exists:true,
                $size:3
            }
        },
        {
            productName:{$eq:"Bluetooth Headphones"}
        }
    ]
})

//Question-12: Find products where the reviews array contains exact 3 elements and the category is "Electronics"
db.products.find({
    $and:[
        {category:{
            $eq:"Electronics"
        }},
        {reviews:{
            $size:3 
        }}
    ]
})

//Question-13: Find products where the tags array contains "laptop" or "gaming", and the specs.ram is "16GB"
db.products.find({
    $and:[
        {
            tags:{
                $in:["laptop","gaming"]
            }
        },
        {
            "specs.ram":{
                $eq:"32GB"
            }
        }
    ]
})

//Question-14: Find products where the releaseDate is either "2023-01-01" or "2023-03-10" and the tags array contains "high-performance"
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

//Question-15: Count products where the category is "Electronics"
db.products.countDocuments({
    category:"Electronics"
})

//Question-16: Find distinct product names where the price is exactly 999.99
db.products.distinct("productName",{
  price:999.99
})

//Question-17: Update products to set a new discount value if the product price is greater than 1000
db.products.updateMany({
  price:{
    $gt: 1000
  }
},{
  $set:{
    discounted:true
  }
})

//Question-18: Delete a product by its name
db.products.deleteOne({
  productName:"catt.in"
})

//Question-19: Find products where the tags array contains exactly 3 items:
db.products.find({
  tags:{
    $size:3
  }
})

//Question-20: Find products where the "dimensions.width" is exactly 35.8.
db.products.find({
    "dimensions.width": { $eq: 35.8 }
})