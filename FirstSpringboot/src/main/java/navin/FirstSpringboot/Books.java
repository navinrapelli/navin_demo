package navin.FirstSpringboot;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class Books {
	
	
	
	long id;
	
	
	String name;
	
	@JsonProperty("MEas_Author")

	String author;
	
	
	
	
	public Books(long id, String name, String author) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	@Override
	public String toString() {
		return "Books [id=" + id + ", name=" + name + ", author=" + author + "]";
	}
	
	
	

}
