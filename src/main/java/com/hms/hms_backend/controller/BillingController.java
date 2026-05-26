package com.hms.hms_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.hms_backend.model.Billing;
import com.hms.hms_backend.service.BillingService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/billing")

public class BillingController {

@Autowired
BillingService billingService;


@GetMapping
public List<Billing> getAllBills(){

return billingService.getAllBills();

}


@PostMapping
public Billing addBill(

@RequestBody Billing bill

){

return billingService.saveBill(
bill
);

}


@PutMapping("/{id}")

public Billing updateBill(

@RequestBody Billing bill,

@PathVariable int id

){

return billingService.updateBill(

bill,
id

);

}


@DeleteMapping("/{id}")

public void deleteBill(

@PathVariable int id

){

billingService.deleteBill(
id
);

}

}