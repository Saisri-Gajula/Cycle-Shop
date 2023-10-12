package com.cycle.rental;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cycle.rental.repository.CyclesRepository;

@Configuration
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(CyclesRepository cycleRepository) {
        return args -> {

            cycleRepository.findAll().forEach(System.out::println);
        };
    }
}