package com.thesis.innmanagement.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tblRooms")
public class Rooms {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "room_no")
    private String roomNo;

    private String position;

    @OneToMany(mappedBy = "room")
    private Set<Users> users;

    @OneToMany(mappedBy = "room")
    private Set<Facilities> facilities;

    public Rooms() {
    }

    public Rooms(Long id, String roomNo, String position, Set<Users> users, Set<Facilities> facilities) {
        this.id = id;
        this.roomNo = roomNo;
        this.position = position;
        this.users = users;
        this.facilities = facilities;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set<Users> users) {
        this.users = users;
    }

    public Set<Facilities> getFacilities() {
        return facilities;
    }

    public void setFacilities(Set<Facilities> facilities) {
        this.facilities = facilities;
    }
}