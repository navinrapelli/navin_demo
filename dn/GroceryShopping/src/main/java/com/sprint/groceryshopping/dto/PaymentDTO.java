package com.sprint.groceryshopping.dto;

import java.time.LocalDate;



public class PaymentDTO {

		private static final long serialVersionUID = 1L;

		private int paymentId;
		
		private String mode;
		
		private LocalDate date;
		
		private String paymentStatus;
		
		
		public PaymentDTO() {
			
		}


		public PaymentDTO(String mode, LocalDate date, String paymentStatus) {
			super();
			this.mode = mode;
			this.date = date;
			this.paymentStatus = paymentStatus;
		}


		public int getPayment_id() {
			return paymentId;
		}


		public void setPayment_id(int payment_id) {
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
			return "PaymentDTO [payment_id=" + paymentId + ", mode=" + mode + ", date=" + date + ", paymentStatus="
					+ paymentStatus + "]";
		}
		
		
	}
