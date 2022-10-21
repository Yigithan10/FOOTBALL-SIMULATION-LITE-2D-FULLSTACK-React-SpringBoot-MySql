package com.example.fsl.classes;

import java.util.List;

public class Team {
    private int teamId;
    private String teamName;
    private int atc;
    private int mid;
    private int def;
    private List<Player> players;

    public Team(){

    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getAtc() {
        return atc;
    }

    public void setAtc(int atc) {
        this.atc = atc;
    }

    public int getMid() {
        return mid;
    }

    public void setMid(int mid) {
        this.mid = mid;
    }

    public int getDef() {
        return def;
    }

    public void setDef(int def) {
        this.def = def;
    }

    public List<Player> getPlayers() {
        return players;
    }
}
