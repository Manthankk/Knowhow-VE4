package com.v4.login.controller;

import com.v4.login.entity.Review;
import com.v4.login.entity.Products;
import com.v4.login.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Add a new review
    @PostMapping
    public ResponseEntity<Review> addReview(@RequestBody Review review) {
        Review savedReview = reviewService.addReview(review);
        return ResponseEntity.ok(savedReview);
    }

    // Get all reviews for a specific product
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getReviewsByProduct(@PathVariable int productId) {
        Products product = new Products();
        product.setId(productId); // Create a product instance with the given ID
        List<Review> reviews = reviewService.getReviewsByProduct(product);
        return ResponseEntity.ok(reviews);
    }

    // Get a review by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable int id) {
        Review review = reviewService.getReviewById(id);
        return ResponseEntity.ok(review);
    }

    // Delete a review by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable int id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok("Review deleted successfully.");
    }
}