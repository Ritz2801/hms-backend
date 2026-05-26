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

import com.hms.hms_backend.model.Doctor;
import com.hms.hms_backend.service.DoctorService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/doctors")

public class DoctorController {

    @Autowired
    DoctorService doctorService;


    @GetMapping
    public List<Doctor> getAllDoctors(){

        return doctorService.getAllDoctors();

    }


    @PostMapping
    public Doctor addDoctor(

            @RequestBody Doctor doctor

    ){

        return doctorService.saveDoctor(
                doctor
        );

    }


    @PutMapping("/{id}")

    public Doctor updateDoctor(

            @RequestBody Doctor doctor,

            @PathVariable int id

    ){

        return doctorService.updateDoctor(

                doctor,
                id

        );

    }


    @DeleteMapping("/{id}")

    public void deleteDoctor(

            @PathVariable int id

    ){

        doctorService.deleteDoctor(
                id
        );

    }

}