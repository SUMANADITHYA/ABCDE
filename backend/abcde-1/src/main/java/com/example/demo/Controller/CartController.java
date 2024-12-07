package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Cart;
import com.example.demo.Entity.User;
import com.example.demo.Service.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping
    public Cart addToCart(@RequestBody Long itemId, @RequestHeader("Authorization") String token) {
        // Replace with actual token parsing logic
        User user = new User(); // Retrieve user using token
        return cartService.addItemToCart(user, itemId);
    }
}