package navin.FirstSpringboot.Q3;

public class UserAddress {
	int zipcode;
	String state;
	String city;
	String country;
	
	
	
	public UserAddress(int zipcode, String state, String city, String country) {
		super();
		this.zipcode = zipcode;
		this.state = state;
		this.city = city;
		this.country = country;
	}
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "UserAddress [zipcode=" + zipcode + ", state=" + state + ", city=" + city + ", country=" + country + "]";
	}
	
	
	
	
	

}
