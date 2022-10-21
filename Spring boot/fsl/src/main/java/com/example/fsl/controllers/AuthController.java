package com.example.fsl.controllers;

import com.example.fsl.entities.User;
import com.example.fsl.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    public UserService userService;

    @PostMapping("/login")
    @ResponseBody
    @CrossOrigin
    public ResponseEntity<User> login(@RequestBody User newUser){
        return userService.loginOneUser(newUser);
    }

    @PostMapping("/register")
    @ResponseBody
    @CrossOrigin
    public ResponseEntity<User> register(@RequestBody User newUser){
        return userService.createOneUser(newUser);
    }
}
