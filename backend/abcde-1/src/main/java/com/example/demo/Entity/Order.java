package com.example.demo.Entity;

import jakarta.persistence.*;
//import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")  // Renamed table from 'order' to 'orders'
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Cart cart;

    private LocalDateTime orderDate;

    // Constructors
    public Order() {
    }

    public Order(Long id, Cart cart, LocalDateTime orderDate) {
        this.id = id;
        this.cart = cart;
        this.orderDate = orderDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    // toString
    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", cart=" + cart +
                ", orderDate=" + orderDate +
                '}';
    }
}

