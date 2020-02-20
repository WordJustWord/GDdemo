package com.pigmo.gddemo.controllers;

import com.pigmo.gddemo.apis.services.jgyanshou.xldianlan.JiaKongXian;
import com.pigmo.gddemo.dto.JiaKongXianDto;
import com.pigmo.gddemo.utils.NormalResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("/api/line")
public class LineController {
    @Autowired
    JiaKongXian jiaKongXianService;


    @GetMapping("/getOne/{id}")
    public NormalResult getOne(@PathVariable Long id) {
        JiaKongXianDto dto = jiaKongXianService.getById(id);
        return NormalResult.ok(200, dto, "");
    }


    @PostMapping("/save")
    public NormalResult save(JiaKongXianDto dto) {
        JiaKongXianDto save = jiaKongXianService.save(dto);
        return NormalResult.ok(200, save, "");
    }
}
