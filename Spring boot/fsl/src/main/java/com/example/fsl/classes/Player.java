package com.example.fsl.classes;

import java.util.UUID;

public class Player {
    private int id;

    private UUID uuid;

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    private String position1;
    private String position2;
    private String name;
    private String surname;
    private int rating;
    private int energy;

    public Player(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPosition1() {
        return position1;
    }

    public void setPosition1(String position1) {
        this.position1 = position1;
    }

    public String getPosition2() {
        return position2;
    }

    public void setPosition2(String position2) {
        this.position2 = position2;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }
}
