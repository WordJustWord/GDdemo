package com.pigmo.gddemo.entities;

import lombok.Data;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Data
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "userid")
    private String userId;
    @Column(name = "username")
    private String userName;
    @Column(name = "userpwd")
    private String userPwd;
    @Column(name = "realname")
    private String realName;
    @Column(name = "email")
    private String email;
    @Column(name = "actived")
    private Integer actived;
}
