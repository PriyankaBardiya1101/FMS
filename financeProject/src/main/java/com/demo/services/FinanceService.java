package com.demo.services;

import java.util.List;

import com.demo.Model.FEntity;

public interface FinanceService {

	FEntity addData(FEntity fEntity);
	
	List<FEntity> getData();
	
	String UpdateDataById(int id, FEntity fEntity);
	
	String deleteDataById(int id);
}
