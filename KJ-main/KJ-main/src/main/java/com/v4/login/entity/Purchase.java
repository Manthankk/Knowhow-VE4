package com.v4.login.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "purchase")
@NoArgsConstructor
@AllArgsConstructor
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer; // Customer who made the purchase

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products product; // Product that was purchased

    @Column(nullable = false)
    private int quantity; // Quantity of the product purchased

    @Column(nullable = false)
    private double total_price; // Total price for the quantity purchased

    @Column(nullable = false)
    private LocalDateTime purchase_date = LocalDateTime.now(); // Date and time of the purchase
}