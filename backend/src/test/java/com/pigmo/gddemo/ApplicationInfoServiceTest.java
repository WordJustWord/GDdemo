package com.pigmo.gddemo;


import com.pigmo.gddemo.apis.repository.ApplicationInfoRepository;
import com.pigmo.gddemo.apis.repository.ClientRepository;
import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.entities.ApplicationEntity;
import com.pigmo.gddemo.entities.ClientEntity;
import com.pigmo.gddemo.services.xckancha.hedui.SqxinxiService;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationInfoServiceTest {

    private ApplicationEntity applicationEntity;
    private ClientEntity clientEntity;

    @InjectMocks
    private SqxinxiService sqxinxiService;
    @Mock
    private ApplicationInfoRepository repository;
    @Mock
    private ClientRepository clientRepository;

    @Before
    public void before() {
        MockitoAnnotations.initMocks(this);
        applicationEntity = initEntity();
        clientEntity = initClient();
    }

    @Test
    public void testApplicationAddNew() {


        Mockito.doReturn(null).when(repository).findById(Mockito.anyLong());
        Mockito.doReturn(clientEntity).when(repository).save(Mockito.any(ApplicationEntity.class));
        Mockito.doReturn(clientEntity).when(clientRepository).save(Mockito.any(ClientEntity.class));

        ApplyInfoDto applyInfoDto = fillDto(applicationEntity,clientEntity);
        int i = sqxinxiService.addNewApplicationInfo(1l, applyInfoDto);

        Mockito.isNotNull().equals(i);
        Assert.assertEquals(1,i);

        Mockito.verify(repository,Mockito.times(1)).findById(Mockito.anyLong());
        Mockito.verify(repository,Mockito.times(1)).save(Mockito.any(ApplicationEntity.class));
        Mockito.verify(clientRepository,Mockito.times(1)).save(Mockito.any(ClientEntity.class));
    }

    @After
    public void After() {
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


    private String dateToString(java.util.Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        return sdf.format(date);
    }

    private ApplicationEntity initEntity() {
        ApplicationEntity entity = new ApplicationEntity();
        entity.setId(1l);
        entity.setAppId("1918213");
        entity.setAppDate(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));
        entity.setBusinessType("test type");
        entity.setClientId(1l);
        entity.setIdCardOwner("zhangsan");
        entity.setAppType(1);
        entity.setProvideUnit(2);
        entity.setPowerUseType(3);
        entity.setPowerUseAddr("test address");
        entity.setIndustryType(5);
        entity.setVoltage(220);
        entity.setOriginalVolume("32");
        entity.setAfterPowerType(7);
        entity.setComments("test comments");
        entity.setActived(1);
        return entity;
    }


    private ClientEntity initClient() {
        ClientEntity entity = new ClientEntity();
        entity.setId(1L);
        entity.setIdcardNum("510811192310214231");
        entity.setIdcardType(1);
        entity.setClientName("zhangsan");
        entity.setClientNum("15213");
        return entity;
    }
}
