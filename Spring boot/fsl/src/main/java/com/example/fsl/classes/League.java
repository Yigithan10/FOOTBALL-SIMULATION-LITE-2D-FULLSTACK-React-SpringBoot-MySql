package com.example.fsl.classes;

import java.util.List;

public class League {
    private int leagueId;
    private String leagueName;
    private List<Team> teams;

    public League(){

    }

    public int getLeagueId() {
        return leagueId;
    }

    public void setLeagueId(int leagueId) {
        this.leagueId = leagueId;
    }

    public String getLeagueName() {
        return leagueName;
    }

    public void setLeagueName(String leagueName) {
        this.leagueName = leagueName;
    }

    public List<Team> getTeams() {
        return this.teams;
    }
}
