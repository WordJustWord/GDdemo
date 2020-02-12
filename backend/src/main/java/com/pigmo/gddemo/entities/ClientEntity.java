package com.pigmo.gddemo.entities;

import lombok.Data;
import org.springframework.context.annotation.Scope;

import javax.persistence.*;

@Entity
@Table(name = "clients")
@Data
@Scope("prototype")
public class ClientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "client_num")
    private String clientNum;
    @Column(name = "client_name")
    private String clientName;
    @Column(name = "idcard_type")
    private Integer idcardType;
    @Column(name = "idcard_num")
    private String idcardNum;
}
