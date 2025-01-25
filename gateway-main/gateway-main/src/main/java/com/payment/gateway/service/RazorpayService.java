package com.payment.gateway.service;

import com.payment.gateway.controller.RazorpayController;
import com.payment.gateway.entity.Payment;
import com.payment.gateway.repositiory.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.Utils;
import jakarta.annotation.PostConstruct;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class RazorpayService {

    private static final Logger logger = LoggerFactory.getLogger(RazorpayService.class);

    private static final String AMOUNT = "amount";
    private static final String CURRENCY = "currency";
    private static final String RECEIPT = "receipt";
    private static final String STATUS = "status";

    @Value("${razorpay.api.key}")
    private String RAZORPAY_API_KEY;

    @Value("${razorpay.api.secret}")
    private String RAZORPAY_API_SECRET;

    private RazorpayClient razorpayClient;
    private final PaymentRepository paymentRepository;

    public RazorpayService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @PostConstruct
    public void init() throws Exception {
        this.razorpayClient = new RazorpayClient(RAZORPAY_API_KEY, RAZORPAY_API_SECRET);
    }

    public Payment createOrder(Long amount, String currency, String receipt) throws Exception {
        if (amount == null || amount <= 0 || currency == null || receipt == null) {
            throw new IllegalArgumentException("Invalid input parameters for creating an order");
        }

        try {
            BigDecimal amountInPaise = BigDecimal.valueOf(amount).multiply(BigDecimal.valueOf(100));

            JSONObject options = new JSONObject();
            options.put(AMOUNT, amountInPaise.longValueExact());
            options.put(CURRENCY, currency);
            options.put(RECEIPT, receipt);

            Order order = razorpayClient.orders.create(options);

            String orderId = order.get("id");
            String status = order.get(STATUS);

            logger.info("Order created with ID: {} and status: {}", orderId, status);

            Payment payment = new Payment();
            payment.setOrderId(orderId);
            payment.setAmount(amount);
            payment.setCurrency(currency);
            payment.setReceipt(receipt);
            payment.setStatus(status);
            payment.setCreatedAt(LocalDateTime.now());

            return paymentRepository.save(payment);
        } catch (Exception e) {
            logger.error("Error creating Razorpay order", e);
            throw new Exception("Error creating Razorpay order", e);
        }
    }

    public boolean verifyPaymentSignature(String razorpayOrderId, String razorpayPaymentId, String razorpaySignature) {
        try {
            JSONObject attributes = new JSONObject();
            attributes.put("razorpay_order_id", razorpayOrderId);
            attributes.put("razorpay_payment_id", razorpayPaymentId);

            Utils.verifyPaymentSignature(attributes, razorpaySignature);

            logger.info("Payment signature verified successfully for payment ID: {}", razorpayPaymentId);
            return true;
        } catch (Exception e) {
            logger.error("Payment signature verification failed for order ID: {}", razorpayOrderId, e);
            return false;
        }
    }


}
