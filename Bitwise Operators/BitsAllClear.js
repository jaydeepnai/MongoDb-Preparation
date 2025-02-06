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

//Question-1: Find users whose permissions field has neither Read (bit 1) nor Write (bit 2) set.
db.users.find({
  permissions: { $bitsAllClear: 0b0011 }
},{
  permissions:1,
  username:1,
  _id:0
}) 

//Question-2: Find users whose flags field has neither EmailVerified (bit 1) nor NotificationsEnabled (bit 3) set.
db.users.find({
  flags:{
    $bitsAllClear: 0b1010
  }
},{
  flags:1,
  username:1,
  _id:0
}) 

//THE QUERIES ABOVE AND BELOW ARE SAME, READ THE QUESTIONS CAREFULY 

//Question-3: Find users whose flags field has both EmailVerified (bit 1) and NotificationsEnabled (bit 3) clear.
db.users.find({
  flags:{
    $bitsAllClear: 0b1010
  }
},{
  flags:1,
  username:1,
  _id:0
}) 

//Question-4: Find users whose permissions field has only Execute (bit 4) set and no other permission bits set.
db.users.find({
  permissions:{
    $bitsAllClear: 0b0111
  }
},{
  username:1,
  _id:0,
  permissions:1
}) 

//Question-5: Find users whose permissions field has neither Admin (bit 4) nor Write (bit 2) set.
db.users.find({
  permissions:{
    $bitsAllClear: 0b1010
  }
},{
  username:1,
  _id:0,
  permissions:1
}) 

//Question-6: Find users whose flags field has neither NotificationsEnabled (bit 3) nor EmailVerified (bit 1) set.
db.users.find({
  flags:{
    $bitsAllClear: 0b1010
  }
},{
  username:1,
  _id:0,
  permissions:1
}) 

//Question-7: Find users whose permissions field has no Read (bit 1) or Admin (bit 4) permission set.
db.users.find({
  permissions:{
    $bitsAllClear: 0b1001
  }
}) 

//Question-8: Find users whose permissions field has only Read (bit 1) set and no other permission bits set.
db.users.find({
  permissions:{
    $bitsAllClear: 0b1110
  }
}) 

//Question-9: Find users whose flags field has neither NotificationsEnabled (bit 3) nor EmailVerified (bit 1) set, and no other flags set.
db.users.find({
  flags:{
    $bitsAllClear: 0b1110
  }
}) 

//Question-10: Find users whose permissions field has no Execute (bit 4) set.
db.users.find({
  permissions:{
    $bitsAllClear: 0b1000
  }
}) 
 
//Question-11: Find users whose permissions field has neither Read (bit 1), Write (bit 2), nor Execute (bit 3) set.
db.users.find({
  permissions: { 
    $bitsAllClear: 0b0111 
    }
})
 
//Question-12: Find users whose permissions field has neither Read (bit 1), Execute (bit 3), nor Admin (bit 4) set.
db.users.find({
  permissions: { 
    $bitsAllClear: 0b1011 
    }
})
 
//Question-13: Find users whose flags field has neither EmailVerified (bit 1), NotificationsEnabled (bit 3), nor Write (bit 2) set.
db.users.find({
  flags: { 
    $bitsAllClear: 0b1100 
    }
})
 
//Question-14: Find users whose permissions field has only Write (bit 2) and Admin (bit 4) set, and no other bits set.
db.users.find({
  permissions: { 
    $bitsAllClear: 0b0101 
    }
})
 
//Question-15: Find users whose flags field has only EmailVerified (bit 1) and NotificationsEnabled (bit 3) set, and no other bits set.
db.users.find({
  flags: { 
    $bitsAllClear: 0b0100 
    }
})
 
//Question-16: Find users whose permissions field has neither Read (bit 1) nor Write (bit 2) set, and only Execute (bit 3) set.
db.users.find({
  permissions: { 
    $bitsAllClear: 0b0011 
    }
})

//Question-17: Find users whose flags field has neither EmailVerified (bit 1), NotificationsEnabled (bit 3), nor Admin (bit 4) set, and has only Write (bit 2) set.
db.users.find({
  flags: { 
    $bitsAllClear: 0b1001 
    }
})

//Question-18: Find users whose flags field has only EmailVerified (bit 1) set and no other flags set.
db.users.find({
  flags: { $bitsAllClear: 0b1100 }
})

//Question-19: Find users whose flags field has neither EmailVerified (bit 1) nor NotificationsEnabled (bit 3) set.
db.users.find({
  flags: { $bitsAllClear: 0b1010 }
})

//Question-20: Find users whose permissions field has only Admin (bit 4) set and no other permission bits set.
db.users.find({
  permissions: { $bitsAllClear: 0b0111 }
})







