package com.pigmo.gddemo.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "remote_fee_info")
public class RemoteFeeInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
