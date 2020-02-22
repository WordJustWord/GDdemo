package com.pigmo.gddemo.controllers;

import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.services.xckancha.hedui.SqxinxiService;
import com.pigmo.gddemo.services.xckancha.scbiaodan.ScbiaodanService;
import com.pigmo.gddemo.utils.NormalResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

@RestController
@RequestMapping("/api")
@Slf4j
public class ApplicationController {

    @Autowired
    private SqxinxiService sqxinxiService;
    @Autowired
    private ScbiaodanService scbiaodanService;
    @Value("${my.outpath}")
    private String path;

    @GetMapping(value = "/ApplicationInfo/{id}")
    public NormalResult getApplicationInfo(@PathVariable String id) {
        ApplyInfoDto dto = sqxinxiService.getApplicationInfo(Long.valueOf(id));
        return NormalResult.ok(dto);
    }

    @PostMapping(value = "/ApplicationInfo/{id}")
    public NormalResult addApplicationInfo(@PathVariable String id, ApplyInfoDto dto) {
        int res = sqxinxiService.addNewApplicationInfo(Long.valueOf(id), dto);
        if (res == 1) {
            return NormalResult.ok();
        }
        return NormalResult.ok(200, "", "数据存入失败！");
    }

    @GetMapping("/scbiaodan")
    public NormalResult getBiaodan() {
        scbiaodanService.testDoc();
        return NormalResult.ok();
    }

    @GetMapping("/read/{title}")
    public void readFile(HttpServletResponse res, @PathVariable String title) throws Exception {
        File file = new File(path + "/" + title + "-doc.pdf");
        if (file.exists()) {
            byte[] data = null;
            try {
                FileInputStream input = new FileInputStream(file);
                data = new byte[input.available()];
                input.read(data);
                res.getOutputStream().write(data);
                input.close();
            } catch (Exception e) {
                System.out.println(e);
            }

        } else {
            return;
        }
    }
}
