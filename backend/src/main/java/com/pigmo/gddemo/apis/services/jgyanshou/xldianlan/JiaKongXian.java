package com.pigmo.gddemo.apis.services.jgyanshou.xldianlan;

import com.pigmo.gddemo.dto.JiaKongXianDto;

public interface JiaKongXian {
    JiaKongXianDto save(JiaKongXianDto dto);

    JiaKongXianDto getById(Long id);
}
