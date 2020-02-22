package com.pigmo.gddemo.services.xckancha.scbiaodan;

import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.AcroFields;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.pigmo.gddemo.dto.ApplyInfoDto;
import com.pigmo.gddemo.services.xckancha.hedui.SqxinxiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class ScbiaodanService {

    @Value("${my.outpath}")
    private String path;

    @Autowired
    private SqxinxiService sqxinxiService;


    public void testDoc() {
        String filename = "/kancha-doc.pdf";
        Resource resource = new ClassPathResource("/file/ywbd.pdf");
        InputStream is = null;
        FileOutputStream out = null;
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        PdfReader reader = null;
        try {
            is = resource.getInputStream();
            out = new FileOutputStream(path + filename);
            reader = new PdfReader(is);
            PdfStamper stamper = new PdfStamper(reader, bos);
            AcroFields form = stamper.getAcroFields();

            BaseFont bf = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
            ArrayList<BaseFont> fontList = new ArrayList<>();
            fontList.add(bf);
            form.setSubstitutionFonts(fontList);

            Map<String, String> map = getData(1l);
            fillData(form, map);
            stamper.setFormFlattening(true);
            stamper.close();

            out.write(bos.toByteArray());

            out.flush();
            out.close();
            bos.close();
        } catch (IOException | DocumentException e) {
            log.error(e.getMessage());
        }
    }

    private void fillData(AcroFields form, Map map) throws IOException, DocumentException {
        for (Object key : map.keySet()) {
            form.setField(key.toString(), map.get(key).toString());
        }
    }

    private Map<String, String> getData(Long id) {
        Map<String, String> map = new HashMap();
        ApplyInfoDto info = sqxinxiService.getApplicationInfo(id);
        if (info != null) {
            map.put("u1", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss")));
            map.put("u2", info.getAppNum());
            map.put("u3", info.getClientName());
            map.put("u4", "测试联系人");
            map.put("u5", "18392839201");
            map.put("u6", "成都市");
            map.put("u7", "双流区");
            map.put("u8", "东升街道");
            map.put("u9", "东升社区");
            map.put("u10", "华府大道");
            map.put("u11", "438");
            map.put("u12", "测试备注");
            map.put("u13", String.valueOf(LocalDate.now().getYear()));
            map.put("u14", String.valueOf(LocalDate.now().getMonth().getValue()));
            map.put("u15", String.valueOf(LocalDate.now().getDayOfMonth()));
            map.put("u16", info.getPowerUseType().toString());
            map.put("u17", "√");
            map.put("u18", "□");
            map.put("u20", info.getIndustryType().toString());
            map.put("u21", "√");
            map.put("u22", "□");
            map.put("u24", info.getOriginalVolume());
            map.put("u25", info.getOriginalVolume());
            map.put("u26", "√");
            map.put("u27", "□");
            map.put("u28", "□");
            map.put("u29", "□");
            map.put("u30", "□");
            map.put("u32", "测试接入点");
            map.put("u33", "√");
            map.put("u34", "□");
            map.put("u35", "测试组成");
            map.put("u36", "√");
            map.put("u37", "□");
            map.put("u38", "□");
            map.put("u39", "√");
            map.put("u40", "□");
            map.put("u41", "□");
            map.put("u44", "√");
            map.put("u45", "130");
            map.put("u46", "□");
            map.put("u47", "测试计量方式");
            map.put("u48", "测试安装位置");
            map.put("u49", "测试备注");
        }
        return map;
    }
}
