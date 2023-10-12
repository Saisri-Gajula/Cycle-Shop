package com.cycle.rental.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import lombok.Data;

    @Entity
    @Data
public class BorrowedCycles {
    
    @Id
    private int borrowedCycleId;
    
    private int stock;
    private String cycleName;
    private int userId;

}
