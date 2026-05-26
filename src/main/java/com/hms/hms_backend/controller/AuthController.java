package com.hms.hms_backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.hms_backend.model.User;
import com.hms.hms_backend.service.UserService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/auth")

public class AuthController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public User login(
            @RequestBody
            Map<String,String> data
    ){

        return userService.login(

            data.get("username"),
            data.get("password")

        );

    }

}