package Order;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Order")
public class Order {
	
	@Id
	String id;
	
	String ordername;
	String oderprice;
	
	
	public Order() {
	
	}


	public Order(String id, String ordername, String orderprice) {
		super();
		this.id = id;
		this.ordername = ordername;
		this.oderprice = orderprice;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getOrdername() {
		return ordername;
	}


	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}


	public String getOrderprice() {
		return oderprice;
	}


	public void setOrderprice(String orderprice) {
		this.oderprice = orderprice;
	}


	@Override
	public String toString() {
		return "Order [id=" + id + ", ordername=" + ordername + ", orderprice=" + oderprice + "]";
	}

	
	
	
	
	
	
	
	

}
