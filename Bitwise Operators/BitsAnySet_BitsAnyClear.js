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
      },
       {
        "_id": 6,
        "userId": 1006,
        "username": "frank",
        "permissions": 5,   // (Binary: 00000101) -- Read, Execute
        "accountStatus": 1, // (Binary: 00000001) -- Active
        "flags": 6,         // (Binary: 00000110) -- NotificationsEnabled, EmailVerified
        "age": 31,
        "isAdmin": false,
        "lastLogin": ISODate("2025-02-02T14:20:00Z"),
        "location": { "type": "Point", "coordinates": [-122.42, 37.77] },
        "tags": ["security", "researcher"],
        "failedLoginAttempts": 1
      },
      {
        "_id": 7,
        "userId": 1007,
        "username": "grace",
        "permissions": 3,   // (Binary: 00000011) -- Read, Write
        "accountStatus": 3, // (Binary: 00000011) -- Active, Verified
        "flags": 5,         // (Binary: 00000101) -- NotificationsEnabled, EmailVerified
        "age": 27,
        "isAdmin": false,
        "lastLogin": ISODate("2025-02-04T09:00:00Z"),
        "location": { "type": "Point", "coordinates": [-87.62, 41.88] },
        "tags": ["writer", "editor"],
        "failedLoginAttempts": 3
      },
      {
        "_id": 8,
        "userId": 1008,
        "username": "henry",
        "permissions": 14,  // (Binary: 00001110) -- Write, Execute, Admin
        "accountStatus": 2, // (Binary: 00000010) -- Verified
        "flags": 8,         // (Binary: 00001000) -- NotificationsDisabled
        "age": 39,
        "isAdmin": true,
        "lastLogin": ISODate("2025-01-29T20:15:00Z"),
        "location": { "type": "Point", "coordinates": [-95.36, 29.76] },
        "tags": ["engineer", "techlead"],
        "failedLoginAttempts": 0
      },
      {
        "_id": 9,
        "userId": 1009,
        "username": "isabella",
        "permissions": 1,   // (Binary: 00000001) -- Read
        "accountStatus": 0, // (Binary: 00000000) -- Suspended
        "flags": 2,         // (Binary: 00000010) -- EmailVerified
        "age": 22,
        "isAdmin": false,
        "lastLogin": ISODate("2025-02-05T11:10:00Z"),
        "location": { "type": "Point", "coordinates": [-80.19, 25.76] },
        "tags": ["intern", "student"],
        "failedLoginAttempts": 4
      },
      {
        "_id": 10,
        "userId": 1010,
        "username": "jack",
        "permissions": 12,  // (Binary: 00001100) -- Execute, Admin
        "accountStatus": 1, // (Binary: 00000001) -- Active
        "flags": 7,         // (Binary: 00000111) -- EmailVerified, NotificationsEnabled, TwoFactorEnabled
        "age": 33,
        "isAdmin": true,
        "lastLogin": ISODate("2025-01-31T16:05:00Z"),
        "location": { "type": "Point", "coordinates": [-71.06, 42.36] },
        "tags": ["cto", "investor"],
        "failedLoginAttempts": 0
      }
    ]      
)

//Question-1: Find users who have at least one of Write (bit 2) or Execute (bit 3) set in permissions, but do not have Admin (bit 4) set.
db.users.find({
    permissions:{
      $bitsAnySet: 0b0110,
      $bitsAllClear: 0b1000
    }
}).count()

//Question-2:Find users whose permissions field has at least one of Read (bit 1), Write (bit 2), or Execute (bit 3), 
//but do not have Admin (bit 4), 
//and whose userId is even.
db.users.find({
permissions:{
    $bitsAnySet: 0b0111,
    $bitsAllClear: 0b1000
},
$expr:{
    $eq:[
    {$mod:["$userId",2]},
    0
    ]
}
}).count()

//Question-3: Find users who have at least one of Write (bit 2) or Admin (bit 4) set, 
//are younger than 40, 
//and do not have Execute (bit 3) in permissions.
db.users.find({
permissions:{
    $bitsAnySet:0b1010,
    $bitsAllClear:0b0100
},
age:{
    $lt: 40
}
}).count()

//Question-4: Find users whose permissions field has at least one of Execute (bit 3) or Admin (bit 4), 
//but do not have Read (bit 1) or Write (bit 2), 
//and who failed at least 1 login attempt.
db.users.find({
permissions:{
    $bitsAnySet: 0b1100,
    $bitsAnyClear: 0b0011
},
failedLoginAttempts:{
    $gte:1
}
}).count()

//Question-5: Find users who have at least one of Write (bit 2) or Execute (bit 3) set in permissions, 
//do not have Admin (bit 4), 
//and have failed more than 3 login attempts.
db.users.find({
permissions: { 
    $bitsAnySet: 0b0110, 
    $bitsAnyClear: 0b1000 
},
failedLoginAttempts: { $gt: 3 }
}).count()

//Question-6: Find users who have at least one of EmailVerified (bit 1) or NotificationsEnabled (bit 3) in flags, 
//do not have Read (bit 1) in permissions, 
//and are either an admin or developer.
db.users.find({
flags:{
    $bitsAnySet: 0b0101,
},
permissions:{
    $bitsAllClear: 0b0001
},
tags:{
    $nin:["admin","developer"]
}
}).count()

//Question-7: Find users who have at least one of Read (bit 1) or Execute (bit 3), do not have Write (bit 2), and have an even userId.
db.users.find({
permissions: { 
    $bitsAnySet: 0b0101, 
    $bitsAnyClear: 0b0010 
},
$expr: { $eq: [
    { $mod: ["$userId", 2] 
}, 0] }
})

//Question-8: Find users who have at least one of Write (bit 2), Execute (bit 3), or Admin (bit 4), do not have EmailVerified (bit 1), and are freelancers.
db.users.find({
permissions: { 
    $bitsAnySet: 0b1110 
},
flags: { $bitsAnyClear: 0b0001 },
tags: "freelancer"
})

//Question-9: Find users whose flags field has at least one of EmailVerified (bit 1) or NotificationsEnabled (bit 3), 
//and who have either isAdmin as true or failed login attempts greater than 2.
db.users.find({
flags: { $bitsAnySet: 0b1010 },
$or: [
    { isAdmin: true },
    { failedLoginAttempts: { $gt: 2 } }
]
})

//Question-10: Find users who have at least one of Read (bit 1), Write (bit 2), or Admin (bit 4), do not have Execute (bit 3), 
//and have logged in within the last 15 days.
db.users.find({
permissions: { 
    $bitsAnySet: 0b1011, 
    $bitsAnyClear: 0b0100 
},
lastLogin: { 
    $gte: new Date(new Date().setDate(new Date().getDate() - 15)) 
}
})

//Question-11: Find users who have at least one of Execute (bit 3) or Admin (bit 4), do not have Read (bit 1), and have an odd userId.
db.users.find({
permissions: { 
    $bitsAnySet: 0b1100, 
    $bitsAnyClear: 0b0001 
},
$expr: { $eq: [{ $mod: ["$userId", 2] }, 1] }
})

//Question-12: Find users whose permissions field has at least one of Read (bit 1), Write (bit 2), or Execute (bit 3),
//do not have Admin (bit 4), 
//and have age between 25 and 40.
db.users.find({
permissions:{
    $bitsAnySet: 0b0111,
    $bitsAllClear: 0b1000
},
age:{
    $gte:25,
    $lte: 40
}
})

//Question-13: Find users who have either "Write" or "Execute" permissions set, but not both "Admin" and "Suspended" account status.
db.users.find({
    permissions: {
      $bitsAnySet: 0b0010
    },
    accountStatus: {
      $bitsAnyClear: 0b0011
    }
})

//Question-14: Find users whose flags field has "EmailVerified" (bit 1) set and "NotificationsDisabled" (bit 3) clear.
db.users.find({
flags: {
    $bitsAnySet: 0b00000010,
    $bitsAnyClear: 0b00001000
}
})

//Question-15: Find users whose permissions field has either "Write" (bit 2) or "Execute" (bit 3) set, 
//but not both "Read" (bit 1) and "Write" (bit 2) set.
db.users.find({
permissions: {
    $bitsAnySet: 0b0010,
    $bitsAnyClear: 0b00000011 
}
})

//Question-16: Find users whose failedLoginAttempts is greater than 1, 
//but they have either "EmailVerified" (bit 1) or "NotificationsEnabled" (bit 2) set in flags.
db.users.find({
failedLoginAttempts: { $gt: 1 },
flags: {
    $bitsAnySet: 0b00000011
}
})

//Question-17: Find users who have "Admin" (bit 4) or "Execute" (bit 3) permissions but do not have "NotificationsDisabled" (bit 3) set.
db.users.find({
permissions: {
    $bitsAnySet: 0b00001000,
},
flags: {
    $bitsAnyClear: 0b00001000
}
})

//Question-18: Find users who have "NotificationsEnabled" (bit 2) and "EmailVerified" (bit 1) but have not logged in for more than 7 days.
db.users.find({
flags: {
    $bitsAnySet: 0b00000110,
},
lastLogin: {
    $lt: new Date(
    new Date().setDate(
        new Date().getDate() - 7)
        )
}
})

//Question-19: Find users who have both "Execute" (bit 3) and "Write" (bit 2) permissions set, but whose failedLoginAttempts is equal to 0.
db.users.find({
permissions: {
    $bitsAnySet: 0b0010,
},
failedLoginAttempts: 0
})

//Question-20: Find users who have both "Write" (bit 2) and "Execute" (bit 3) permissions set, 
//but their accountStatus is "Verified" (bit 2) and they haven't logged in for more than 5 days.
db.users.find({
    permissions: {
      $bitsAnySet: 0b0010,
    },
    accountStatus: {
      $bitsAnySet: 0b00000010, 
    },
    lastLogin: {
      $lt: new Date(new Date().setDate(new Date().getDate() - 5))
    }
})
  
  