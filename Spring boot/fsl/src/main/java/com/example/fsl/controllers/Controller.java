package com.example.fsl.controllers;

import com.example.fsl.classes.*;
import com.sun.security.auth.UnixNumericUserPrincipal;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class Controller {

    public static List<League> myLeagues = new ArrayList<>();
    public static List<Team> myTeams = new ArrayList<>();
    public static List<Player> myPlayers = new ArrayList<>();


    @PostMapping("/events")
    @ResponseBody
    public ResponseEntity<List<Event>> createEvent1(@RequestBody List<Event> events){
        return new ResponseEntity<List<Event>> ( events, HttpStatus.OK);
    }

    @PostMapping("/statistics")
    @ResponseBody
    public ResponseEntity<List<Statistic>> createStatistics1(@RequestBody List<Statistic> statistics){
        return new ResponseEntity<> ( statistics, HttpStatus.OK);
    }

    @PostMapping("/setLeagues")
    @ResponseBody
    public ResponseEntity<List<League>> createLeague1(@RequestBody List<League> leagues){


        for(League lig : leagues){
            for(Team team : lig.getTeams()){
                for(Player player : team.getPlayers()){
                    UUID uuid = UUID.randomUUID();
                    player.setUuid(uuid);
                    myPlayers.add(player);
                }
                myTeams.add(team);
            }
            myLeagues.add(lig);
        }

        System.out.println("-----");

        System.out.println("leagues size : "+ myLeagues.size());
        System.out.println("teams size : "+ myTeams.size());
        System.out.println("players size : "+ myPlayers.size());


        return new ResponseEntity<>( leagues, HttpStatus.OK);
    }

    @PostMapping("/getLeagues")
    @ResponseBody
    public ResponseEntity<List<League>> getLeaguesUuid(){
        return new ResponseEntity<List<League>>( myLeagues, HttpStatus.OK);
    }

    @PostMapping("/getTeams")
    @ResponseBody
    public ResponseEntity<List<Team>> getTeamsUuid(){
        return new ResponseEntity<List<Team>>( myTeams, HttpStatus.OK);
    }

    @PostMapping("/getPlayers")
    @ResponseBody
    public ResponseEntity<List<Player>> getPlayersUuid(){
        return new ResponseEntity<List<Player>>( myPlayers, HttpStatus.OK);
    }
}
