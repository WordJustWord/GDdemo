package com.pigmo.gddemo.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "contacts")
@Data
public class ContactEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "phone")
    private String phone;
    @Column(name = "type")
    private Integer Type;
    @Column(name = "priority")
    private Integer priority;
    @Column(name = "actived")
    private Integer actived;

}
