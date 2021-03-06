package com.sprint.groceryshopping.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sprint.groceryshopping.dto.OrderDTO;
import com.sprint.groceryshopping.exception.OrderNotFoundException;

@Service
public interface IOrderService {
	
	public List<OrderDTO> getAllOrders();

	public OrderDTO findOrder(Integer orderId);

	public String deleteOrder(Integer orderId) throws OrderNotFoundException;

	public OrderDTO createOrder(OrderDTO order);

	public List<OrderDTO> updateOrder(OrderDTO order);

	public List<OrderDTO> findOrdersByDate(LocalDate date);
	
	public List<OrderDTO> findOrdersByUser(String emailId);
	
}
