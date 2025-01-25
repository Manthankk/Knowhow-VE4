package com.v4.login.service;

import com.v4.login.entity.Review;
import com.v4.login.entity.Products;
import com.v4.login.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // Add a new review
    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    // Get all reviews for a specific product
    public List<Review> getReviewsByProduct(Products product) {
        return reviewRepository.findByProduct(product);
    }

    // Get a review by its ID
    public Review getReviewById(int id) {
        return reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("Review not found with ID: " + id));
    }

    // Delete a review by its ID
    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }
}