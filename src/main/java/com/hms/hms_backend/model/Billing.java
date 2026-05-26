package com.hms.hms_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="billing")

public class Billing {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private String patientName;

    private double amount;

    public Billing(){}

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id=id;
    }

    public String getPatientName(){
        return patientName;
    }

    public void setPatientName(String patientName){
        this.patientName=patientName;
    }

    public double getAmount(){
        return amount;
    }

    public void setAmount(double amount){
        this.amount=amount;
    }

}