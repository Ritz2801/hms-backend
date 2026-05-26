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

import com.hms.hms_backend.model.Appointment;
import com.hms.hms_backend.service.AppointmentService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/appointments")

public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;


    @GetMapping
    public List<Appointment> getAllAppointments(){

        return appointmentService.getAllAppointments();

    }


    @PostMapping
    public Appointment addAppointment(

            @RequestBody Appointment appointment

    ){

        return appointmentService.saveAppointment(
                appointment
        );

    }


    @PutMapping("/{id}")
    public Appointment updateAppointment(

            @RequestBody Appointment appointment,

            @PathVariable int id

    ){

        return appointmentService.updateAppointment(

                appointment,
                id

        );

    }


    @DeleteMapping("/{id}")
    public void deleteAppointment(

            @PathVariable int id

    ){

        appointmentService.deleteAppointment(id);

    }

}