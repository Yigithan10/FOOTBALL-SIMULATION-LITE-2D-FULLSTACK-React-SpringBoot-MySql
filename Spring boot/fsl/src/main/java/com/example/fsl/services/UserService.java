package com.example.fsl.services;

import com.example.fsl.entities.User;
import com.example.fsl.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    public UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    public ResponseEntity<User> loginOneUser(User newUser){
        if(userRepository.findByUsernameAndPassword(newUser.getUsername(), newUser.getPassword())!=null){
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }else if(userRepository.findByUsername(newUser.getUsername())!=null || userRepository.findByPassword(newUser.getPassword()) != null){
            return new ResponseEntity<>(newUser, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(newUser, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> createOneUser(User newUser){
        if(userRepository.findByUsername(newUser.getUsername())!=null){
            return new ResponseEntity<>(newUser, HttpStatus.BAD_REQUEST);
        }else {
            User user = new User();
            user.setUsername(newUser.getUsername());
            user.setPassword(newUser.getPassword());
            user.setLanguage(newUser.getLanguage());
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }

    public User getOneUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User getOneUserUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public ResponseEntity<User> updateOneUserUsername(Long userId, User newUser) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            User foundUser = user.get();
            if(userRepository.findByUsername(newUser.getUsername())==null){
                foundUser.setUsername(newUser.getUsername());
                foundUser.setPassword(newUser.getPassword());
                foundUser.setLanguage(newUser.getLanguage());
                userRepository.save(foundUser);
                return new ResponseEntity<>(newUser, HttpStatus.OK);
            }else {
                return new ResponseEntity<>(newUser, HttpStatus.BAD_REQUEST);
            }
        }else {
            return new ResponseEntity<>(newUser, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> updateOneUserPassword(Long userId, User newUser) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            User foundUser = user.get();
            foundUser.setUsername(newUser.getUsername());
            foundUser.setPassword(newUser.getPassword());
            foundUser.setLanguage(newUser.getLanguage());
            userRepository.save(foundUser);
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(newUser, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> updateOneUserLanguage(Long userId, User newUser) {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            User foundUser = user.get();
            foundUser.setUsername(newUser.getUsername());
            foundUser.setPassword(newUser.getPassword());
            foundUser.setLanguage(newUser.getLanguage());
            userRepository.save(foundUser);
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(newUser, HttpStatus.NOT_FOUND);
        }
    }

    public void deleteOneUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public User findByUsername(String searchUsername) {
        return userRepository.findByUsername(searchUsername.toLowerCase());
    }

    public List<User> findByUsernameContains(String searchUsername) {
        return userRepository.findByUsernameContains(searchUsername.toLowerCase());
    }
}
