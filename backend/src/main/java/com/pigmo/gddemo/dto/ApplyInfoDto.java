package com.pigmo.gddemo.dto;

import lombok.Data;
import org.springframework.context.annotation.Scope;

import java.io.Serializable;
import java.util.Date;

/**
 * 申请信息核对
 */
@Data
@Scope("request")
public class ApplyInfoDto implements Serializable {
    /**
     * 申请编号
     */
    private String appNum;
    /**
     * 受理日期
     */
    private String appDate;
    /**
     * 业务类型
     */
    private String businessType;
    /**
     * 客户ID
     */
    private Long clientId;
    /**
     * 客户编号
     */
    private String clientNum;
    /**
     * 申请方式
     */
    private Integer appType;
    /**
     * 供电单位
     */
    private Integer provideUnit;
    /**
     * 证件类型
     */
    private Integer clientIdCardType;
    /**
     * 证件持有人姓名
     */
    private String idCardOwner;
    /**
     * 证件号码
     */
    private String idCardNum;
    /**
     * 用户名称
     */
    private String clientName;
    /**
     * 用电类别
     */
    private Integer powerUseType;
    /**
     * 用电地址
     */
    private String powerUseAddr;
    /**
     * 行业分类
     */
    private Integer industryType;
    /**
     * 供电电压
     */
    private Integer voltage;
    /**
     * 原有合同容量
     */
    private String originalVolume;
    /**
     * 改类后用电类别
     */
    private Integer afterChangePowerUseType;
    /**
     * 申请备注
     */
    private String comments;
    /**
     * 审核状态
     */
    private Integer status;
    /**
     * 审核消息
     */
    private String  approveMsg;

    /**
     * 当前环节
     */
    private Integer currentLink;
}
