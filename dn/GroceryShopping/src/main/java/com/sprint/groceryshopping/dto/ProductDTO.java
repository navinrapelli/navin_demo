package com.sprint.groceryshopping.dto;




import java.util.Arrays;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ProductDTO {

		private static final long serialVersionUID = 1L;

		
//		@NotNull
		@Size(min=2, message = "name must not be less than 2 characters")
		private String name;
		
//		@NotNull
		private String price;
		
//		@NotNull(message = "Description cannot be empty")
		private String description;
		
//		@NotNull(message = "Quantity cannot be empty")
		private String quantity;
		
		private byte[] image; 
		
		
		
		public ProductDTO() {
			
		}
		 
		public ProductDTO(String name, String price, String description, String quantity, byte[] image) {
				
			
			
			this.name = name;
			this.price = price;
			this.description = description;
			this.quantity = quantity;
			this.image = image;
		}



		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public String getPrice() {
			return price;
		}


		public void setPrice(String price) {
			this.price = price;
		}


		public String getDescription() {
			return description;
		}


		public void setDescription(String description) {
			this.description = description;
		}


		public String getBrand() {
			return quantity;
		}


		public void setBrand(String quantity) {
			this.quantity = quantity;
		}

		public byte[] getImage() {
			return image;
		}

		public void setImage(byte[] image) {
			this.image = image;
		}

		@Override
		public String toString() {
			return "ProductDTO [name=" + name + ", price=" + price + ", description=" + description + ", quantity="
					+ quantity + ", image=" + Arrays.toString(image) + "]";
		}

		
}