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

import com.hms.hms_backend.model.Patient;
import com.hms.hms_backend.service.PatientService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/patients")

public class PatientController {

@Autowired
PatientService patientService;


@GetMapping
public List<Patient> getAllPatients(){

return patientService.getAllPatients();

}


@PostMapping
public Patient addPatient(
@RequestBody Patient patient
){

return patientService.savePatient(
patient
);

}


@PutMapping("/{id}")

public Patient updatePatient(

@RequestBody Patient patient,
@PathVariable int id

){

return patientService.updatePatient(
patient,
id
);

}


@DeleteMapping("/{id}")

public void deletePatient(

@PathVariable int id

){

patientService.deletePatient(
id
);

}

}