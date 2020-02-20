package com.pigmo.gddemo.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "line_jkx")
public class LineJKXEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private boolean dgzuli;
    @Column
    private boolean ttzuzhuang;
    @Column
    private boolean lxanzhuang;
    @Column
    private boolean jjanzhuang;
    @Column
    private boolean dxjiashe;
}
