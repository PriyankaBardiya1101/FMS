package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Model.FEntity;
import com.demo.dao.FinanceRepository;

@Service
public class FinanceSerImpl  implements FinanceService{
	@Autowired
	FinanceRepository fRepo;

	@Override
	public FEntity addData(FEntity fEntity) {
		// TODO Auto-generated method stub
		return fRepo.save(fEntity);
	}

	@Override
	public List<FEntity> getData() {
		// TODO Auto-generated method stub
		return fRepo.findAll();
	}

	@Override
	public String UpdateDataById(int id, FEntity fEntity) {
		// TODO Auto-generated method stub
		FEntity existingData=fRepo.findById(id).orElse(null);
		if(existingData!=null) {
			existingData.setDate(fEntity.getDate());
			existingData.setDescription(fEntity.getDescription());
			existingData.setAmount(fEntity.getAmount());
		}
		fRepo.save(existingData);
		return id+" th Record Updated Successfully..";
	}

	@Override
	public String deleteDataById(int id) {
		// TODO Auto-generated method stub
		
		FEntity exFEntity=fRepo.findById(id).orElse(null);
		if(exFEntity!=null) {
			fRepo.deleteById(id);
		}
		return id+" th Record Deleted Successfully...";
	}
	

	
	
	
	

}
