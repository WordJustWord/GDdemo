package com.pigmo.gddemo.services.jgyanshou.xldianlan;

import com.pigmo.gddemo.apis.repository.LineJKXRepository;
import com.pigmo.gddemo.apis.services.jgyanshou.xldianlan.JiaKongXian;
import com.pigmo.gddemo.dto.JiaKongXianDto;
import com.pigmo.gddemo.entities.LineJKXEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class JiaKongXianService implements JiaKongXian {

    @Autowired
    LineJKXRepository repository;


    @Override
    public JiaKongXianDto save(JiaKongXianDto dto) {
        LineJKXEntity entity = toEntity(dto);
        LineJKXEntity res = repository.save(entity);
        return toDto(res);
    }

    @Override
    public JiaKongXianDto getById(Long id){
        Optional<LineJKXEntity> optional = repository.findById(id);
        return toDto(optional.orElseGet(LineJKXEntity::new));
    }


    private JiaKongXianDto toDto(LineJKXEntity entity) {
        JiaKongXianDto jkx = new JiaKongXianDto();
        jkx.setId(entity.getId());
        jkx.setDgzuli(entity.isDgzuli());
        jkx.setDxjiashe(entity.isDxjiashe());
        jkx.setJjanzhuang(entity.isJjanzhuang());
        jkx.setLxanzhuang(entity.isLxanzhuang());
        jkx.setTtzuzhuang(entity.isTtzuzhuang());
        return jkx;
    }

    private LineJKXEntity toEntity(JiaKongXianDto dto) {
        LineJKXEntity entity = new LineJKXEntity();
        entity.setId(dto.getId());
        entity.setDgzuli(dto.isDgzuli());
        entity.setDxjiashe(dto.isDxjiashe());
        entity.setJjanzhuang(dto.isJjanzhuang());
        entity.setLxanzhuang(dto.isLxanzhuang());
        entity.setTtzuzhuang(dto.isTtzuzhuang());
        return entity;
    }
}
