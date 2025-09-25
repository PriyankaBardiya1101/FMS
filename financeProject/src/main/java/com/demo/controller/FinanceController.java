package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Model.FEntity;
import com.demo.services.FinanceSerImpl;

@RestController
@CrossOrigin(origins = "*")
public class FinanceController {
	@Autowired
	FinanceSerImpl fSer;
	
	
	@PostMapping("/insertData")
	public FEntity addD(@RequestBody FEntity fEntity) {
		return fSer.addData(fEntity);
	}
	
	@GetMapping("/fetchData")
	public List<FEntity> getD(){
		return fSer.getData();
	}
	
	@PutMapping("/updtData/{id}")
	public String updtD(@PathVariable int id, @RequestBody FEntity fEntity) {
		return fSer.UpdateDataById(id, fEntity);
	}

	@DeleteMapping("/deleteData/{id}")
	public String delD(@PathVariable int id) {
		return fSer.deleteDataById(id);
	}
}
