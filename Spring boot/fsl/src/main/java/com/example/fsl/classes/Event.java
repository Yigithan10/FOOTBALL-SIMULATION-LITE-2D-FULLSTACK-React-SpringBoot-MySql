package com.example.fsl.classes;

public class Event {
    private int id;

    private int value;
    private String name;
    private int eventCode = this.id + this.value + 1;

    public Event() {

    }

    public Event(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public void setEventCode(int eventCode) {
        this.eventCode = eventCode;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEventCode() {
        return this.eventCode = this.id + this.value + 1;
    }
}
