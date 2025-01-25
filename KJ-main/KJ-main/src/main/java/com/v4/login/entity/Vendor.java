package com.v4.login.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "vendor")
@NoArgsConstructor
@AllArgsConstructor
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vendor_id;

    @Column( unique = true)
    private String email; // Vendor's email (unique)

    @Column
    private String password; // Password for vendor login

    @Column
    private String first_name; // Vendor's first name

    @Column
    private String last_name; // Vendor's last name

    @Column( unique = true)
    private String phone; // Vendor's phone number

    @Column
    private String address; // Vendor's business address

    @Column
    private String city; // City of the vendor's address

    @Column
    private String state; // State of the vendor's address

    @Column
    private String zip_code; // ZIP/Postal code of the vendor's address

    // Business Information
    @Column
    private String business_name; // Name of the business

    @Column
    private String business_type; // Type of business (e.g., retail, wholesale)

    @Column( unique = true)
    private String registration_number; // Business registration number (unique)

    @Column( unique = true)
    private String taxId; // Tax ID for the business (unique)

    @Column
    private int years_in_business; // Number of years in business

    private String website_url; // Business website URL
}