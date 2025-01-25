package com.v4.login.service;

import com.v4.login.entity.Products;
import com.v4.login.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    public Products getProductById(int id) {
        return productsRepository.findById(id).orElse(null);
    }

    public Products createProduct(Products product) {
        return productsRepository.save(product);
    }

    public Products updateProduct(int id, Products product) {
        if (productsRepository.existsById(id)) {
            product.setId(id);
            return productsRepository.save(product);
        }
        return null;
    }

    public void deleteProduct(int id) {
        productsRepository.deleteById(id);
    }

}