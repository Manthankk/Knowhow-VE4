package com.v4.login.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "customer")
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customer_id;

    @Column(nullable = false)
    private String first_name; // Customer's first name

    @Column(nullable = false)
    private String last_name; // Customer's last name

    @Column(nullable = false)
    private LocalDate dob; // Date of birth

    @Column(nullable = false)
    private String gender; // Gender (e.g., MALE, FEMALE, OTHER)

    private String blood_group; // Blood group (e.g., A+, O-, etc.)

    @Column(nullable = false, unique = true)
    private String email; // Email address (unique)

    private double height; // Height in cm or inches

    private double weight; // Weight in kg or pounds

    private String skin_color; // Skin color or complexion

    private boolean physically_abled; // Physically abled or not

    @Column(nullable = false, unique = true)
    private String phone; // Phone number (unique)

    private String lifestyle; // Lifestyle description (e.g., active, sedentary)

    private String address; // Customer's address

    @Column(nullable = false)
    private String password; // Password for account login

    @Column(nullable = false)
    private String city; // City of residence

    private int age; // Age of the customer

    @Column(nullable = false)
    private String state; // State of residence

    @Column(nullable = false)
    private String zip_code; // ZIP/Postal code
}