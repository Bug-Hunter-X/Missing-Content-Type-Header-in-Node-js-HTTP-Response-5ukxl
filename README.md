# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior in the client (e.g., browser) as it might not be able to correctly interpret the response body.  The solution shows how to add the correct header for text-based responses.

## Bug

The `bug.js` file showcases a Node.js HTTP server that lacks a `Content-Type` header.  This can cause issues in various clients attempting to interpret the response.

## Solution

The `bugSolution.js` file demonstrates the correct way to include the `Content-Type` header, ensuring clients can properly handle the response.