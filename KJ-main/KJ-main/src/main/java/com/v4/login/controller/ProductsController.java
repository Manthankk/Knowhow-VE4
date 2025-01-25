package com.v4.login.controller;

import com.v4.login.entity.Products;
import com.v4.login.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping
    public List<Products> getAllProducts() {
        return productsService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Products getProductById(@PathVariable int id) {
        return productsService.getProductById(id);
    }

    @PostMapping
    public Products createProduct(@RequestBody Products product) {
        return productsService.createProduct(product);
    }

    @PutMapping("/{id}")
    public Products updateProduct(@PathVariable int id, @RequestBody Products product) {
        return productsService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable int id) {
        productsService.deleteProduct(id);
    }
}