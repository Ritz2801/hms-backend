package com.hms.hms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hms.hms_backend.model.User;

public interface UserRepository
extends JpaRepository<User,Integer>{

    User findByUsername(
        String username
    );

}