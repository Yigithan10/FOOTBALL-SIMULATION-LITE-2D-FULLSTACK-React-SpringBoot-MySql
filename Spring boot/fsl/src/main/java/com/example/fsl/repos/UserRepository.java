package com.example.fsl.repos;

import com.example.fsl.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String searchUsername);
    List<User> findByUsernameContains(String searchUsername);
    List<User> findByPassword(String searchPassword);

    User findByLanguage(String language);

    User findByUsernameAndPassword(String username, String password);
}
