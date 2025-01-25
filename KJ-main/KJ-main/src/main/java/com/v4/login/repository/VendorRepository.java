package com.v4.login.repository;

import com.v4.login.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
    // Add custom query methods if needed
}