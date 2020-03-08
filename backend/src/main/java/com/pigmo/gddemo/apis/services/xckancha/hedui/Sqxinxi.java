package com.pigmo.gddemo.apis.services.xckancha.hedui;

import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.entities.ApplicationEntity;
import com.pigmo.gddemo.entities.UserEntity;

public interface Sqxinxi {
    ApplyInfoDto getApplicationInfo(Long appId);
    int addNewApplicationInfo(Long appId,ApplyInfoDto dto);

    int approve(ApplicationEntity app, UserEntity user);
}
