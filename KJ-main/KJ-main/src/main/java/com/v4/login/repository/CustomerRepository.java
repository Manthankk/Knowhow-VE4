package com.v4.login.repository;

import com.v4.login.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Add custom query methods if needed
}