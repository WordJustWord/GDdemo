package com.pigmo.gddemo.apis.services.xckancha.hedui;

import com.pigmo.gddemo.dto.ApplyInfoDto;

public interface Sqxinxi {
    ApplyInfoDto getApplicationInfo(Long appId);
    int addNewApplicationInfo(Long appId,ApplyInfoDto dto);
}
