package com.sprint.groceryshopping.model;

import java.time.LocalDate;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Payment {

	private static final long serialVersionUID = 1L;

	@Id
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int paymentId;
	

	private String mode;
	
	private LocalDate date;
	
	private String paymentStatus;
	
	
	public Payment() {
		
	}


	public Payment(String mode, LocalDate date, String paymentStatus) {
		super();
		this.mode = mode;
		this.date = date;
		this.paymentStatus = paymentStatus;
	}


	public int getPayment_id() {
		return paymentId;
	}


	public void setPayment_id(int paymentId) {
		this.paymentId = paymentId;
	}


	public String getMode() {
		return mode;
	}


	public void setMode(String mode) {
		this.mode = mode;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getPaymentStatus() {
		return paymentStatus;
	}


	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}


	@Override
	public String toString() {
		return "Payment [payment_id=" + paymentId + ", mode=" + mode + ", date=" + date + ", paymentStatus="
				+ paymentStatus + "]";
	}
	
	
}
		
		


