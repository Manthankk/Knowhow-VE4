package com.v4.login.repository;

import com.v4.login.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    // Add custom query methods if needed
}