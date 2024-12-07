package com.example.demo.Controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

import com.example.demo.Entity.User;

public class LoginController {

    private static final String SECRET_KEY = "yourSecretKey";  // Replace with a stronger secret key

    // Method to generate JWT token
    private String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getUsername())  // Use the username or user ID
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))  // Set expiration time (1 hour)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // Sign with your secret key
                .compact();
    }
}
