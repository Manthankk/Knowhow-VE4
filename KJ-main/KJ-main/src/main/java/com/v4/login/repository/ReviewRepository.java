package com.v4.login.repository;

import com.v4.login.entity.Review;
import com.v4.login.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    // Find all reviews for a specific product
    List<Review> findByProduct(Products product);
}