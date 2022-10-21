package com.example.fsl.entities;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="user_id", nullable=false, unique=true)
    private Long id;

    @Column(name="user_username", nullable=false, unique=false)
    private String username;

    @Column(name="user_password", nullable=false, unique=false)
    private String password;

    @Column(name="user_language", nullable=false, unique=false)
    private String language;

    // other fields, getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}
