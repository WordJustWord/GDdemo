package com.pigmo.gddemo.controllers;

import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.services.xckancha.hedui.SqxinxiService;
import com.pigmo.gddemo.utils.NormalResult;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Slf4j
public class ApplicationController {

    @Autowired
    private SqxinxiService sqxinxiService;

    @RequestMapping(value = "/ApplicationInfo/{id}",method = RequestMethod.GET)
    public NormalResult getApplicationInfo(@PathVariable String id) {
        ApplyInfoDto dto = sqxinxiService.getApplicationInfo(Long.valueOf(id));
        return NormalResult.ok(dto);
    }

    @RequestMapping(value = "/ApplicationInfo/{id}",method = RequestMethod.POST)
    public NormalResult addApplicationInfo(@PathVariable String id, ApplyInfoDto dto){
        int res = sqxinxiService.addNewApplicationInfo(Long.valueOf(id),dto);
        if (res == 1){
            return NormalResult.ok();
        }
        return NormalResult.ok(200,"","数据存入失败！");
    }
}
