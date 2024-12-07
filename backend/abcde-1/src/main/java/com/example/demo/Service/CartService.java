package com.example.demo.Service;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Cart;
import com.example.demo.Entity.User;
import com.example.demo.Repository.CartRepository;
import com.example.demo.Repository.ItemRepository;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ItemRepository itemRepository;

    public Cart addItemToCart(User user, Long itemId) {
        Cart cart = cartRepository.findById(user.getId()).orElse(new Cart());
        cart.setUser(user);
        com.example.demo.Entity.Item item = itemRepository.findById(itemId).orElseThrow(() -> new RuntimeException("Item not found"));
        cart.getItems().add(item);
        return cartRepository.save(cart);
    }
}