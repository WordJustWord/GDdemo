package com.pigmo.gddemo.entities;

import lombok.Data;
import org.springframework.context.annotation.Scope;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "applications")
@Data
@Scope("prototype")
public class ApplicationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "appid")
    private String appId;
    @Column(name = "app_date")
    private Date appDate;
    @Column(name = "business_type")
    private String businessType;
    @Column(name = "clientid")
    private Long clientId;
    @Column(name = "id_card_owner")
    private String idCardOwner;
    @Column(name = "app_type")
    private Integer appType;
    @Column(name = "provide_unit")
    private Integer provideUnit;
    @Column(name = "power_use_type")
    private Integer powerUseType;
    @Column(name = "power_use_addr")
    private String powerUseAddr;
    @Column(name = "industry_type")
    private Integer industryType;
    @Column(name = "voltage")
    private Integer voltage;
    @Column(name = "original_volume")
    private String originalVolume;
    @Column(name = "after_power_type")
    private Integer afterPowerType;
    @Column(name = "comments")
    private String comments;
    @Column(name = "actived")
    private Integer actived;
}
