package com.cycle.rental.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cycle.rental.entity.Cart;



public interface CartRepository extends JpaRepository<Cart, Long> {

    Cart findById(long id);
    List<Cart> findAll();
}
