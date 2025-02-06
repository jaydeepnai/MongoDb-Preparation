# MongoDB Bitwise Operators

Bitwise operators in MongoDB are used to match numeric or binary values at the bit level. These operators are useful for working with flag-based values and binary data.

## 1. `$bitsAllClear`
**Description**: Matches documents where all specified bit positions are clear (set to `0`).

## 2. `$bitsAllSet`
**Description**: Matches documents where all specified bit positions are set (set to `1`).

## 3. `$bitsAnyClear`
**Description**: Matches documents where at least one of the specified bit positions is clear (set to `0`).

## 4. `$bitsAnySet`
**Description**: Matches documents where at least one of the specified bit positions is set (set to `1`).

---
These bitwise operators allow efficient querying of documents based on binary values, making them useful for handling permissions, flags, and low-level data manipulations in MongoDB.