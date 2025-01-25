package com.payment.gateway.controller;

import com.payment.gateway.service.RazorpayService;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
public class RazorpayController {

    private static final Logger logger = LoggerFactory.getLogger(RazorpayController.class);

    private final RazorpayService razorpayService;

    public RazorpayController(RazorpayService razorpayService) {
        this.razorpayService = razorpayService;
    }

    // Endpoint to create an order
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody PaymentRequest paymentRequest) {
        try {
            var payment = razorpayService.createOrder(paymentRequest.getAmount(), "INR", "receipt#123");
            return ResponseEntity.ok(payment);
        } catch (Exception e) {
            logger.error("Error creating Razorpay order", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating Razorpay order.");
        }
    }

    // Endpoint to verify payment
//    @PostMapping("/verify-payment")
//    public ResponseEntity<Map<String, String>> verifyPayment(@RequestBody PaymentVerificationRequest request) {
//        if (razorpayService.verifyPaymentSignature(request)) {
//            Map<String, String> response = new HashMap<>();
//            response.put("message", "Payment verified successfully.");
//            return ResponseEntity.ok(response);
//        } else {
//            Map<String, String> response = new HashMap<>();
//            response.put("message", "Payment verification failed.");
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
//        }
//    }


    // DTO for creating an order
    @Setter
    @Getter
    public static class PaymentRequest {
        private Long amount;

    }

    // DTO for verifying payment
    @Setter
    @Getter
    public static class PaymentVerificationRequest {
        private String razorpayOrderId;
        private String razorpayPaymentId;
        private String razorpaySignature;

        @Override
        public String toString() {
            return "PaymentVerificationRequest{" +
                    "razorpayOrderId='" + razorpayOrderId + '\'' +
                    ", razorpayPaymentId='" + razorpayPaymentId + '\'' +
                    ", razorpaySignature='" + razorpaySignature + '\'' +
                    '}';
        }
    }
}
