db.users.insertMany(
    [
        {
          "_id": 1,
          "userId": 1001,
          "username": "alice",
          "permissions": 7,   // (Binary: 00000111) -- Read, Write, Execute
          "accountStatus": 3, // (Binary: 00000011) -- Active, Verified
          "flags": 12,        // (Binary: 00001100) -- NotificationEnabled, EmailVerified
          "age": 28,
          "isAdmin": true,
          "lastLogin": ISODate("2025-01-30T12:00:00Z"),
          "location": { "type": "Point", "coordinates": [-73.97, 40.77] }, // Geospatial data
          "tags": ["developer", "opensource"],
          "failedLoginAttempts": 2
        },
        {
          "_id": 2,
          "userId": 1002,
          "username": "bob",
          "permissions": 15,  // (Binary: 00001111) -- Read, Write, Execute, Admin
          "accountStatus": 1, // (Binary: 00000001) -- Active
          "flags": 9,         // (Binary: 00001001) -- EmailVerified, NotificationsDisabled
          "age": 35,
          "isAdmin": true,
          "lastLogin": ISODate("2025-01-25T08:30:00Z"),
          "location": { "type": "Point", "coordinates": [-118.24, 34.05] }, // Geospatial data
          "tags": ["admin", "devops"],
          "failedLoginAttempts": 0
        },
        {
          "_id": 3,
          "userId": 1003,
          "username": "charlie",
          "permissions": 2,   // (Binary: 00000010) -- Write
          "accountStatus": 0, // (Binary: 00000000) -- Suspended
          "flags": 4,         // (Binary: 00000100) -- NotificationsEnabled
          "age": 42,
          "isAdmin": false,
          "lastLogin": ISODate("2025-01-20T15:00:00Z"),
          "location": { "type": "Point", "coordinates": [-74.00, 40.71] },
          "tags": ["designer"],
          "failedLoginAttempts": 5
        },
        {
          "_id": 4,
          "userId": 1004,
          "username": "david",
          "permissions": 0,   // (Binary: 00000000) -- No permissions
          "accountStatus": 3, // (Binary: 00000011) -- Active, Verified
          "flags": 1,         // (Binary: 00000001) -- EmailVerified
          "age": 24,
          "isAdmin": false,
          "lastLogin": ISODate("2025-02-01T17:00:00Z"),
          "location": { "type": "Point", "coordinates": [-77.04, 38.90] },
          "tags": ["freelancer"],
          "failedLoginAttempts": 1
        },
        {
          "_id": 5,
          "userId": 1005,
          "username": "eve",
          "permissions": 8,   // (Binary: 00001000) -- Execute
          "accountStatus": 2, // (Binary: 00000010) -- Verified
          "flags": 3,         // (Binary: 00000011) -- EmailVerified, NotificationsEnabled
          "age": 29,
          "isAdmin": true,
          "lastLogin": ISODate("2025-02-03T10:45:00Z"),
          "location": { "type": "Point", "coordinates": [-79.38, 43.65] },
          "tags": ["manager", "operations"],
          "failedLoginAttempts": 0
        }
    ]      
)

//Question-1: Find users whose permissions field has both Read (bit 1) and Write (bit 2) set.
db.users.find({
  permissions: { $bitsAllSet: 0b0011 }
})

//Question-2: Find users whose permissions field has both Write (bit 2) and Execute (bit 3) set.
db.users.find({
  permissions: { $bitsAllSet: 0b0110 }
})

//Question-3: Find users whose flags field has both EmailVerified (bit 1) and NotificationsEnabled (bit 3) set.
db.users.find({
  flags: { $bitsAllSet: 0b0100 }
})

//Question-4: Find users whose permissions field has only Write (bit 2) and Admin (bit 4) set, and their location is within a radius of 3000 miles from a given point.
//given point: [-73.97, 40.77]
db.users.find({
    permissions:{
        $bitsAllSet: 0b1010
    },
    "location.coordinates":{
        $geoWithin:{
        $centerSphere:[
            [-73.97, 40.77],
            3000/3963.2
        ]
        }
    }
})  

//Question-5: Find users whose permissions field has Write (bit 2) and Execute (bit 3) set
db.users.find({
    permissions: { $bitsAllSet: 0b0110 }
})  

//Question-6: Find users whose permissions field has both Write (bit 2) and Execute (bit 3) set, and who have logged in within the last 7 days.
db.users.find({
permissions:{
    $bitsAllSet: 0b0110
},
lastLogin:{
    $gte: new Date(
    new Date().setDate(
        new Date().getDate() - 7
    )
    )
}
})  

//Question-7: Find users whose flags field has both NotificationsEnabled (bit 3) and EmailVerified (bit 1) set, and who have at least 3 tags in their tags array.
db.users.find({
flags:{
    $bitsAllSet: 0b0101
},
$expr:{
    $gte:[
    {$size:"$tags"},
    3
    ]
}
})  

//Question-8: Find users whose flags field has Admin (bit 4) set, but they haven't logged in for over 6 months
db.users.find({
flags:{
    $bitsAllSet: 0b1000
},
lastLogin: { 
    $lte: new Date(
      new Date().setMonth(
          new Date().getMonth() - 6
      )
    ) 
  }
})  

//Question-9: Find users whose flags field has EmailVerified set, and who have an even userId.
db.users.find({
flags:{
    $bitsAllSet: 0b0001
},
$expr: { 
    $eq: [
    { $mod: ["$userId", 2] }, 
    0
    ]
}
})  

//Question-10: Find users whose permissions field has Read (bit 1) and Execute (bit 3) set, and who belong to the "Admin" role.
db.users.find({
    permissions:{
      $bitsAllSet: 0b0101
    },
    isAdmin: true
})

//Question-11: Find users whose permissions field has both Read (bit 1) and Execute (bit 3) set, and who last logged-in before june 2024.
db.users.find({
    permissions:{
      $bitsAllSet: 0b0101
    },
    lastLogin:{
      $lte: ISODate("2024-06-01")
    }
})  

//Question-12: Find users whose permissions field has Read (bit 1) set, and they have made more than 3 failed login attempts.
db.users.find({
    permissions:{
        $bitsAllSet: 0b0001
    },
    failedLoginAttempts:{
        $gte:1
    }
})  

//Question-13: Find users whose permissions field has both Read (bit 1) and Write (bit 2) set, and who have logged in within the last 10 days.
db.users.find({
  permissions: {
    $bitsAllSet:0b0011
  },
  lastLogin:{
    $gte:
      new Date(
        new Date().setDate(
          new Date().getDate()-10
        )  
      )
    
  }
}) 

//Question-14: Find users whose flags field has NotificationsEnabled (bit 3) set, and who have more than 2 failed login attempts.
db.users.find({
  flags:{
    $bitsAllSet: 0b0100
  },
  failedLoginAttempts:{
    $gt:2
  }
}) 

//Question-15: Find users whose permissions field has both Execute (bit 3) and Admin (bit 4) set, and who are marked as admins.
db.users.find({
  permissions: {
    $bitsAllSet: 0b1100
  },
  isAdmin:true
}) 

//Question-16: Find users whose permissions field has both Read (bit 1) and Execute (bit 3) set, and who belong to either the "developer" or "admin" tags.
db.users.find({
  permissions:{
    $bitsAllSet: 0b0101
  },
  tags:{
    $in:["developer","admin"]
  }
}) 

//Question-17: Find users whose flags field has EmailVerified (bit 1) set, and whose userId is an even number.
db.users.find({
  flags:{
    $bitsAllSet: 0b0001
  },
  $expr:{
    $eq:[
      {
        $mod:["$userId",2]
      },
      0
    ]
  }
}) 

//Question-18: Find users whose permissions field has both Read (bit 1) and Write (bit 2) set, 
//have logged in within the last 10 months, and are either developers or admins
db.users.find({
  permissions:{
    $bitsAllSet: 0b0011
  },
  lastLogin:{
    $gte: new Date(
      new Date().setMonth(
        new Date().getMonth()-10
      )
    )
  },
  tags:{
    $in:["developer","admin"]
  }
}) 

//Question-19: Find users whose permissions field has Execute (bit 3) and Admin (bit 4) set, 
//are active (accountStatus contains bit 0), 
//and have usernames starting with "b".
db.users.find({
  permissions: {
    $bitsAllSet: 0b1100
  },
  accountStatus:{
    $bitsAllSet: 0b0001
  },
  username:/^b/
}) 

//Question-20: Find users whose permissions field has Write (bit 2) and Admin (bit 4) set, 
//who have logged in after January 1, 2025, 
//and whose userId is even odd.
db.users.find({
  permissions:{
    $bitsAllSet: 0b1010
  },
  lastLogin:{
    $gt:new Date("2025-01-01")
  },
  $expr:{
    $eq:[
      {$mod:[
        "$userId",2
      ]},0
    ]
  }
})

