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
  