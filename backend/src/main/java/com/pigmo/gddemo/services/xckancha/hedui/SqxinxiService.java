package com.pigmo.gddemo.services.xckancha.hedui;

import com.pigmo.gddemo.apis.repository.ApplicationInfoRepository;
import com.pigmo.gddemo.apis.repository.ClientRepository;
import com.pigmo.gddemo.apis.services.InternalDataExchange;
import com.pigmo.gddemo.apis.services.xckancha.hedui.Sqxinxi;
import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.dto.InternalDataDto;
import com.pigmo.gddemo.entities.ApplicationEntity;
import com.pigmo.gddemo.entities.ClientEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Optional;

@Service
@Transactional
public class SqxinxiService implements Sqxinxi {

    private final ApplicationInfoRepository applicationInfoRepository;
    private final ClientRepository clientRepository;

    private ClientEntity clientEntity;
    private ApplicationEntity applicationEntity;

    @Autowired
    private InternalDataExchange internalDataExchangeService;

    @Autowired
    public SqxinxiService(ApplicationInfoRepository applicationInfoRepository, ClientRepository clientRepository) {
        this.applicationInfoRepository = applicationInfoRepository;
        this.clientRepository = clientRepository;
    }

    @Override
    public ApplyInfoDto getApplicationInfo(Long appId) {
        ApplyInfoDto applyInfoDto = null;
        Optional<ApplicationEntity> optionalApplicationEntity = applicationInfoRepository.findById(appId);
        if (optionalApplicationEntity.isPresent()) {
            ApplicationEntity applicationEntity = optionalApplicationEntity.get();
            Optional<ClientEntity> optionalClientEntity = clientRepository.findById(applicationEntity.getClientId());
            if (optionalClientEntity.isPresent()) {
                applyInfoDto = fillDto(applicationEntity, optionalClientEntity.get());
            }
        }
        return applyInfoDto;
    }

    @Override
    public int addNewApplicationInfo(Long appId, ApplyInfoDto dto) {
        ApplicationEntity applicationEntity = null;
        ClientEntity clientEntity = null;
        Optional<ApplicationEntity> optionalApplicationEntity = applicationInfoRepository.findById(appId);
        if (optionalApplicationEntity.isPresent()) {
            //modify
            applicationEntity = optionalApplicationEntity.get();
            Optional<ClientEntity> optionalClientEntity = clientRepository.findById(applicationEntity.getClientId());
            if (optionalClientEntity.isPresent()) {
                clientEntity = optionalClientEntity.get();
                clientEntity = fillClientValue(clientEntity, dto);
                applicationEntity = fillApplicationValue(applicationEntity, dto);
                applicationInfoRepository.save(applicationEntity);
                clientRepository.save(clientEntity);
            }
        } else {
            //add new
            clientEntity = new ClientEntity();
            applicationEntity = new ApplicationEntity();
            clientEntity = fillClientValue(clientEntity, dto);
            clientEntity = clientRepository.save(clientEntity);
            applicationEntity.setClientId(clientEntity.getId());
            applicationEntity.setActived(1);
            applicationEntity.setAppId(dto.getAppNum());
            applicationEntity = fillApplicationValue(applicationEntity, dto);
            applicationInfoRepository.save(applicationEntity);
            internalDataExchange(new InternalDataDto());
        }
        return 1;
    }

    private int internalDataExchange(InternalDataDto dto){
        return internalDataExchangeService.dataExchange(dto);
    }

    private ApplicationEntity fillApplicationValue(ApplicationEntity entity, ApplyInfoDto dto) {
        entity.setAppDate(stringToDate(dto.getAppDate(), "yyyy/MM/dd"));
        entity.setBusinessType(dto.getBusinessType());
        entity.setIdCardOwner(dto.getIdCardOwner());
        entity.setAppType(dto.getAppType());
        entity.setProvideUnit(dto.getProvideUnit());
        entity.setPowerUseType(dto.getPowerUseType());
        entity.setPowerUseAddr(dto.getPowerUseAddr());
        entity.setIndustryType(dto.getIndustryType());
        entity.setVoltage(dto.getVoltage());
        entity.setOriginalVolume(dto.getOriginalVolume());
        entity.setAfterPowerType(dto.getAfterChangePowerUseType());
        entity.setComments(dto.getComments());
        return entity;
    }

    private ClientEntity fillClientValue(ClientEntity entity, ApplyInfoDto dto) {
        entity.setClientNum(dto.getClientNum());
        entity.setClientName(dto.getClientName());
        entity.setIdcardType(dto.getClientIdCardType());
        entity.setIdcardNum(dto.getIdCardNum());
        return entity;
    }

    private ApplyInfoDto fillDto(ApplicationEntity applicationEntity, ClientEntity clientEntity) {
        ApplyInfoDto dto = new ApplyInfoDto();
        dto.setAppNum(applicationEntity.getAppId());
        dto.setAppDate(dateToString(applicationEntity.getAppDate()));
        dto.setBusinessType(applicationEntity.getBusinessType());
        dto.setClientId(applicationEntity.getClientId());
        dto.setClientNum(clientEntity.getClientNum());
        dto.setAppType(applicationEntity.getAppType());
        dto.setProvideUnit(applicationEntity.getProvideUnit());
        dto.setClientIdCardType(clientEntity.getIdcardType());
        dto.setIdCardOwner(applicationEntity.getIdCardOwner());
        dto.setIdCardNum(clientEntity.getIdcardNum());
        dto.setClientName(clientEntity.getClientName());
        dto.setPowerUseType(applicationEntity.getPowerUseType());
        dto.setPowerUseAddr(applicationEntity.getPowerUseAddr());
        dto.setIndustryType(applicationEntity.getIndustryType());
        dto.setVoltage(applicationEntity.getVoltage());
        dto.setOriginalVolume(applicationEntity.getOriginalVolume());
        dto.setAfterChangePowerUseType(applicationEntity.getAfterPowerType());
        dto.setComments(applicationEntity.getComments());
        return dto;
    }

    private String dateToString(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        return sdf.format(date);
    }

    private Date stringToDate(String dateStr, String pattern) {
        LocalDate localDate = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern(pattern));
        Instant instant = localDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        return Date.from(instant);
    }

}
