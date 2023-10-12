package com.cycle.rental.repository;


import com.cycle.rental.entity.Cycles;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

@Repository
public interface CyclesRepository extends JpaRepository<Cycles, Integer> {
    @Query("SELECT c FROM Cycles c WHERE c.cartQuantity > 0")
    List<Cycles> findAllInCart();
}





