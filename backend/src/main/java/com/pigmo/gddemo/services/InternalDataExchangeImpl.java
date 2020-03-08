package com.pigmo.gddemo.services;

import com.pigmo.gddemo.apis.services.InternalDataExchange;
import com.pigmo.gddemo.dto.InternalDataDto;
import org.springframework.stereotype.Service;

@Service
public class InternalDataExchangeImpl implements InternalDataExchange {
    @Override
    public int dataExchange(InternalDataDto dto) {
        return 0;
    }
}
