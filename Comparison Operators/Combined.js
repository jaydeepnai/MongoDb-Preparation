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
            "releaseDate": ISODate("2022-06-01T00:00:00Z"),
            "dimensions": { "width": 45.0, "height": 120.0, "depth": 6.0 },
            "location": {
                "type": "Point",
                "coordinates": [-73.935242, 40.73061]
            },
            "relatedProducts": [118, 119, 113],
            "discounted": true,
            "isFeatured": true,
            "isBestSeller": false
        }
    ]    
)









//Question-1: Products that are not in the "Electronics" tags:
db.products.find({
  tags : { $nin : ["electric"]}
})

//Question-2:  Products whose price is not 1000:
db.products.find({
  price : {$ne : 1000 }
})


//Question-3:  Products with a price greater than 500:
db.products.find({
  price : { $gt : 500 }
})


//Question-4:  Products with inventory.quantity greater than 100 in any store:
db.products.find({
  "inventory.location" : { $elemMatch : { "quantity" : {$gt : 100}}}
}, { "inventory.location" : 1})


db.products.find({
  "inventory.location.quantity" : {$gt : 100}
}, { "inventory.location" : 1})


//Question-5:  Products priced less than 800:
db.products.find({
  price : {$lt : 800}
}, {price : 1})


//Question-6:  Products with ratings less than 4:
db.products.find({ "ratings.score": { $lt: 4 } });


//Question-7:  Products with exactly 32GB of RAM
db.products.find({
  "specs.ram": "32GB"
},{"specs.ram" : 1})

//Question-8:  Products with isFeatured equal to true:
db.products.find({
  isFeatured : true
})

//Question-9:  Which products have the tags "gaming" or "5G", are priced between $500 and 
// $2000, and are also marked as featured?
db.products.find({
  tags : {$in : ["gaming","5G"]},
  price : { $gt : 500, $lt : 4000 },
  isFeatured : true
}, {tags : 1, price : 1, isFeatured : 1})


//Question-10:  Which products have at least 1TB SSD storage and 
// dimensions with a width between 10 and 50 units?
db.products.find({
  "specs.storage.size" : '1TB',
  "dimensions.width" : { $gt : 10 ,$lt : 50 }
}, {specs:1, dimensions : 1})


//Question-11:  Which products have reviews with a score greater than 4 and were reviewed after January 1, 2023?
db.products.find({
  "ratings.score" : {$gt : 4},
  "releaseDate" : ISODate("2023-06-01T00:00:00Z")
})

//Question-12:  Which products are not available in the "Urban Scooters" or "Downtown Store"?
db.products.find({
  "inventory.location.store" : { $in : ["Urban Scooters","Downtown Store"] }
})

//Question-13:  Which products have a warranty and are available in quantities of at least 100 in any store?
db.products.find({
  "warranty" : { $exists : true},
  "inventory.location.quantity" : { $gt : 100 }
}, {"inventory" : true})




//Question-14:  Which products are marked as both featured and bestsellers and were released after June 1, 2023?
db.products.find({
  isFeatured : true,
  isBestSeller : true,
  releaseDate : ISODate("2023-01-01T00:00:00Z")
}, {releaseDate : 1})


//Question-15:  Which products have both "Touchscreen" and "Backlit Keyboard" features, and their user reviews 
// contain the words "great" or "excellent"?
db.products.find({
  "specs.features" : { $in : ["Touchscreen","Backlit Keyboard"] }
})


//Question-16:  Which products are priced between $1000 and $3000 
// and do not have the tags "eco-friendly" or "noise-cancelling"?
db.products.find({
  tags : { $in : ["eco-friendly","noise-cancelling"]  }
})


//Question-17:  Which products are available or have the tags 
// "gaming" or "portable", sorted by price (descending) and release date (ascending)?
db.products.find({
  tags : { $in : ["gaming","portable"] },
}, {price : 1, releaseDate : 1}).sort({price : -1, releaseDate: 1})


//Question-18:  Which products are priced above $500 but below $1500, have the tags 
// "high-performance" or "5G", and do not belong to the "Accessories" category?
db.products.find({
  price : { $gt : 500, $lt : 1500 },
  tags : { $in : ["high-performance","5G"] }
},)


db.products.find({
  $and: [
    { price: { $gt: 500, $lt: 1500 } },
    { tags: { $in: ["high-performance", "5G"] } },
    { $or: [
        { category: { $ne: "Accessories" } }
      ]
    }
  ]
});

//Question-19: Find products that are missing any of the tags ["smartphone", "headphones"].
db.products.find({
  tags:{
      $nin:["smartphone", "headphones"]
  }
}, {productName:1, _id:0, tags:1}) 

//Question-20: Find products with exactly 2 related products.
db.products.find({
relatedProducts:{
  $size:2
}
},{productName:1, relatedProducts:1}) 

//Question-21: Find products with ratings where at least one score is greater than or equal to 5.
db.products.find({
"ratings.score":{
  $gte:5
}
},{productName:1,_id:0,"ratings.score":1}) 

//Question-22: Find products with a price between $500 and $1000, inclusive, and sort them by price in descending order.
db.products.find({
price: {
  $gte: 500,
  $lte: 1000
}
},{productName:1, price:1, _id:0}).sort({price:-1}) 

//question-23: Find products released after June 2022 and skip the first 2 results.
db.products.find({
releaseDate:{$gt:ISODate("2022-06-01")}
},{
productName:1, releaseDate:1, _id:0
}).skip(2) 

//Question-24: Find all products that are either "isFeatured" or "isBestSeller" and limit the results to 3 documents.
db.products.find({
$or:[
  {isFeatured:true},
  {isBestSeller:true}
]
},{productName:1, isBestSeller:1, isFeatured:1, _id:0}).limit(3) 

//Question-25: Find products with a warranty of either "3 years" or "5 years".
db.products.find({
  $or:[
    {warranty: "2 years"},  
    {warranty: "5 years"},  
  ] 
},{productName:1, warranty:1, _id:0}) 

//Question-26: Find products that do not have the tag "eco-friendly".
db.products.find({
  tags:{
    $nin:["eco-friendly"]
  }
},{productName:1,_id:0}) 

//Question-27: Find products with ratings that have exactly 2 entries
db.products.find({
  ratings:{
    $size: 2
  }
},{productName:1, ratings:1, _id:0}) 

//Question-28: Find products with a "discountedPrice" field present and sort them by discountedPrice in ascending order.
db.products.find({
  discountedPrice:{
    $exists: true
  }
},{productName:1, discountedPrice:1, _id:0}).sort({discountedPrice:1}) 

//Question-29: Find products whose dimensions.width is greater than 20 but less than 50.
db.products.find({
  "dimensions.width":{
    $gt:20,
    $lt:50
  }
},{productName:1, "dimensions.width":1, _id:0}) 

//Question-30: Find products whose ratings have at least one review from userId "63b21d49c254d7e8456789ad"
db.products.find({
  "ratings.userId":"63b21d49c254d7e8456789ad"
},{productName:1, _id:0}) 

//Question-31: Find the first product whose tags array contains exactly 3 elements, sorted by productName in ascending order.
db.products.find({
  tags:{
    $size:3
  }
},{productName:1, tags:1}).sort({productName:1}).limit(1) 

//Question-32: Find products where the specs.processor contains the word "Intel".
db.products.find({
  "specs.processor":/Intel/
},{productName:1,"specs.processor":1,_id:0}) 

//Question-33: Find products with inventory.location where at least one store has "quantity" between 50 and 150, inclusive.
db.products.find({
  "inventory.location":{
    $elemMatch:{
      quantity:{
        $gte:50,
        $lte:150
    }
    }
  }
},{productName:1, "inventory.location.quantity":1,_id:0}) 

//Question-34: Find products where the dimensions.height is greater than both dimensions.width and dimensions.depth
db.products.find({
  $expr:{
    $gt:[
      "$dimensions.height",
      {$max:["$dimensions.width","$dimensions.depth"]}
    ]
    }
}) 

//Question-35:Find the top 3 most expensive products based on price, but only return productName and price.
db.products.find({},{
  productName:1, price:1, _id:0
}).sort({price:-1}).limit(3) 

//Question-36: Find products with a location.coordinates longitude less than -100 (Western Hemisphere) and sort them by latitude in ascending order.
db.products.find({
  "location.coordinates.0":{
    $lt:-100
  }
  
},{productName:1, "location.coordinates":1,_id:0}).sort({"location.coordinates.1":1}) 

//Question-37: Find products where the total inventory quantity across all locations is greater than 200.
db.products.find({
  $expr:{
    $gt:[
      200,
      {$sum:[
        "inventory.location.quantity"
      ]}
    ]
  }
},{productName:1, "inventory.location.quantity":1, _id:0 }) 

//Question-38: Find products with at least one rating comment that starts with the letter "E".
db.products.find({
  "ratings.comment":/^E/
},{productName:1, "ratings.comment":1, _id:0 }) 

//Question-39: Find products where the inventory quantity for any store is greater than 100 but less than 200
db.products.find({
  "inventory.location.quantity":{
    $gt:100,
    $lt:200
  }
},{"inventory.location.quantity":1, productName:1, _id:0}) 

//Question-40: Find products that have more tags than ratings.
db.products.find({
  $expr:{
    $gt:[
      {$size:"$tags"},
      {$size:"$ratings"}
    ]
  }
},{productName:1,_id:0})

//Question-41: Find products with all tags in the list ["high-performance", "portable"].
db.products.find({
  tags:{
    $all:["high-performance", "portable"]
  }
},{productName:1, tags:1,_id:0}) 

//Question-42: Find products where the discountedPrice is more than 20% lower than the original price.
db.products.find({
  $expr:{
    $gt:[
      "$discountedPrice"  ,
      {$multiply:["$price",0.8]}
    ]
  }
},{productName:1, price:1, discountedPrice:1, _id:0}) 

//Question-43: Find products where the location is within 100 km of a point (-122.4194, 37.7749)
db.products.find({
  $expr:{
    $lt:["$location.coordinates.0",-122.4194],
    $lt:["$location.coordinates.0",37.7749],
  }
},{productName:1, _id:0 }) 

//Question:-44: Find products where the total inventory across all locations is greater than 200.
db.products.find({
  $expr:{
    $gt:[
      {$sum:"$inventory.location.quantity"},
      200
    ]
  }
},{productName:1, _id:0}) 

//Question-45: Find the second most recently released product
db.products.find({},{
  releaseDate:1, productName:1
}).sort({releaseDate:-1}).skip(1).limit(1) 

//Question-46: Find products where at least one feature in specs.features contains the word "LED".
db.products.find({
  "specs.features":/LED/
},{productName:1, specs:1, _id:0 }) 

//Question-47: Find products with a total rating score of at least 5 across all ratings
db.products.find({
  $expr:{
    $gte:[
      {$sum:"$ratings.score"},
      5
    ]
  }
},{productName:1, ratings:1, _id:0}) 

//Question-48: Find products with an inventory store named "Online Store" that has a quantity of more than 50
db.products.find({
  "inventory.location.store":"Online Store",
  "inventory.location.quantity":{
    $gt:50
  },
},{productName:1, inventory:1, _id:0}) 

//Question-49: Find products that are both isBestSeller and isFeatured, but exclude those with no ratings
db.products.find({
  isBestSeller: true,
  isFeatured:true,
  $expr:{
    $gt:[
      {$size:"$ratings"},
      0
    ]
  }
},{productName:1, isBestSeller: 1, isFeatured: 1, _id:0}) 

db.products.find({
  isBestSeller: true,
  isFeatured: true,
  ratings: { $exists: true, $not: { $size: 0 } }
}, { productName: 1, isBestSeller: 1, isFeatured: 1, _id: 0 }) 

//Question-50: Find products where the maximum inventory quantity across all locations exceeds 150
db.products.find({
  $expr:{
    $gt:[
      {$max:"$inventory.location.quantity"},
      150
    ]
  }
},{productName:1, _id:0})

//Question-51: Find the top 3 tallest products in dimentions
db.products.find({},{
  productName:1,_id:0
}).sort({"dimensions.height":-1}).limit(3) 

//Question-52: Find products where any of the tags contains "eco" as a substring, ignoring case.
db.products.find({
  tags:/eco/i
},{tags:1,productName:1})

db.products.find({
  tags:{
    $in:[/eco/i]
  }
},{tags:1,productName:1})

db.products.find({
  tags: { $elemMatch: { $regex: /eco/i } }
},{tags:1,productName:1})


//Question-53: Find products where the releaseDate is in 2023, and sort them by price in ascending order
db.products.find({
  releaseDate:{
    $gte:ISODate("2023-01-01"),
    $lte:ISODate("2024-12-31")
  }
},{productName:1,price:1,_id:0}).sort({
  price:1
}) 

//Question-54: Find products where the releaseDate is in june of 2023, and sort them by price in ascending order
db.products.find({
  releaseDate:{
    $gte:ISODate("2023-06-01"),
    $lte:ISODate("2024-06-31")
  }
},{productName:1,price:1,_id:0}).sort({
  price:1
}) 

//Question-55: Find products that are available, have a warranty of "2 years", and have a price greater than 500
db.products.find({
  available:true,
  warranty:"2 years",
  price:{$gt:500}
},{productName:1, _id:0}) 

//Question-56: Find products where the ratings field has more than one review, but the average score of all reviews is greater than or equal to 4.
db.products.find({
  $expr:{
    $gt:[
      {$size:"ratings"},
      0
    ]
  },
  $expr: {
    $gte: [{ $avg: "$ratings.score" }, 4]
  }
}, { productName: 1, ratings: 1, _id: 0 }) 

//Question-57: Find products whose price is between 200 and 1000, but not equal to 450.
db.products.find({
  price:{
    $lt:1000,
    $gt:200,
    $ne:450
  }
},{productName:1,price:1}) 

//Question-58: Find products that have both isFeatured and isBestSeller set to true, and return only their productName and tags.
db.products.find({
  isFeatured: true,
  isBestSeller: true
}, { productName: 1, tags: 1, _id: 0 }) 


//Question-59: Find products with at least one relatedProduct that has a price greater than 2000.
db.products.find({
  $expr:{
    $gt:[
      {$size:"$relatedProducts"},
      0
    ]
  },
  price:{$gt:2000}
},{productName:1,relatedProducts:1, price:1, _id:0}) 

//Question-60: Find products whose dimensions field contains both width and depth greater than 20
db.products.find({
  "dimensions.width":{
    $gt:20
  },
  "dimensions.depth":{
    $gt:20
  }
}) 

//Question-61: Find products where the ratings array contains a review with a score of 5, and that is by the user with userId "63b21d49c254d7e8456789ab".
db.products.find({
  "ratings.score":5,
  "ratings.userId":"63b21d49c254d7e8456789ab"
},{productName:1, _id:0}) 

//Question-62: Find products where the ratings field contains a review with a score greater than or equal to 4.5, and sort by the reviewDate in descending order.
db.products.find({
  "ratings.score": { 
    $gte: 4.5 
    
  }
},{productName:1, _id:0}).sort({ "ratings.reviewDate": -1 }) 

//Question-63: Find products where price is less than 1000, and they have at least one inventory.location with quantity greater than 50.
db.products.find({
  price: { $lt: 1000 },
  "inventory.location.quantity": { $gt: 50 }
}, { productName: 1, price: 1, inventory: 1, _id: 0 })


//Question-64: Find products with relatedProducts containing exactly 3 products, and display their productName, relatedProducts, and warranty.
db.products.find({
  relatedProducts:{
    $size:3
  }
},{productName:1, relatedProducts:1,warranty:1 })

//Question-65: Find products with inventory.location in either "Main Warehouse" or "Downtown Store" and that have a discountedPrice less than 1000.
db.products.find({
  "inventory.location.store":{
    $in:["Main Warehouse" , "Downtown Store"]
  },
  discountedPrice:{
    $lt: 1000
  }
})