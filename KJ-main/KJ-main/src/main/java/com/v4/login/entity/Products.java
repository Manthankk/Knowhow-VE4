package com.v4.login.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;


    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "category", nullable = false)
    private String category; // Main category of the product

    @Column(name = "type")
    private String type; // Type of product

    @Column(name = "sub_category")
    private String subCategory; // Sub-category for more granularity

    @Column(name = "ingredients", length = 500)
    private String ingredients; // List of ingredients

    @Column(name = "price")
    private double price;

    @Column(name = "dosage")
    private String dosage; // Recommended dosage for the product

    @Column(name = "size")
    private String size; // Size of the product (e.g., 100ml, 500g)

    @Column(name = "quantity")
    private int quantity; // Quantity available in stock

    @Column(name = "brand_name")
    private String brandName; // Brand of the product

    @Column(name = "exp_date")
    private LocalDateTime expDate; // Expiry date of the product

    @Column(name = "image")
    private String image; // URL or path for the product image

    @Column(name = "precaution", length = 1000)
    private String precaution; // Precautions or warnings related to the product

    @Column(name = "description", length = 2000)
    private String description; // Detailed description of the product

    @Column(name = "added_at")
    private LocalDateTime addedAt = LocalDateTime.now(); // When the product was added

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();



}