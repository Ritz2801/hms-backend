package com.hms.hms_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.hms_backend.model.User;
import com.hms.hms_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User login(
            String username,
            String password
    ){

        User user=
        repository.findByUsername(
            username
        );

        if(
        user!=null &&
        user.getPassword().equals(password)
        ){

            return user;

        }

        return null;

    }

}