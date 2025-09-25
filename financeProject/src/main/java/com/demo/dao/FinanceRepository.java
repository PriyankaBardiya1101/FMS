package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Model.FEntity;

public interface FinanceRepository  extends JpaRepository<FEntity, Integer>{

}
