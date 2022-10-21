package com.example.fsl.controllers;

import com.example.fsl.entities.User;
import com.example.fsl.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    public List<User> allUsers = new ArrayList<>();
    public List<User> searchUsers = new ArrayList<>();
    public UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    @ResponseBody
    public List<User> getAllUsers(){
        allUsers.clear();
        allUsers.addAll(userService.getAllUsers());
        return userService.getAllUsers();
    }

    @GetMapping("/searchOneUserId/{userId}")
    @ResponseBody
    public User getOneUser(@PathVariable Long userId){
        return userService.getOneUser(userId);
    }

    @GetMapping("/searchOneLoginUsername/{username}")
    @ResponseBody
    public User getOneUserUsername(@PathVariable String username){
        return userService.getOneUserUsername(username);
    }

    @PutMapping("/searchUpdateUsernameId/{userId}")
    @ResponseBody
    public ResponseEntity<User> updateOneUserUsername(@PathVariable Long userId, @RequestBody User newUser){
        return userService.updateOneUserUsername(userId, newUser);
    }

    @PutMapping("/searchUpdatePasswordId/{userId}")
    @ResponseBody
    public ResponseEntity<User> updateOneUserPassword(@PathVariable Long userId, @RequestBody User newUser){
        return userService.updateOneUserPassword(userId, newUser);
    }

    @PutMapping("/searchUpdateLanguageId/{userId}")
    @ResponseBody
    public ResponseEntity<User> updateOneUserLanguage(@PathVariable Long userId, @RequestBody User newUser){
        return userService.updateOneUserLanguage(userId, newUser);
    }

    @DeleteMapping("/searchDeleteId/{userId}")
    @ResponseBody
    public void deleteOneUser(@PathVariable Long userId){
        userService.deleteOneUser(userId);
    }

    @GetMapping("/searchUsername/{searchUsername}")
    @ResponseBody
    public User oneSearchUsername(@PathVariable String searchUsername){
        return userService.findByUsername(searchUsername);
    }

    @GetMapping("/searchUsernameContains/{searchUsername}")
    @ResponseBody
    public List<User> oneSearchUsernameContains(@PathVariable String searchUsername){
        return userService.findByUsernameContains(searchUsername);
    }
}
