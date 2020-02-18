package com.pigmo.gddemo.services.xckancha.scbiaodan;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
@Slf4j
public class ScbiaodanService {

    public void testDoc(){
        Resource resource = new ClassPathResource("/file/ywbd.pdf");
        Document document = new Document();
        try {
            InputStream is = resource.getInputStream();
            final FileOutputStream out = new FileOutputStream("/Users/jchen/Documents/file/test.pdf");
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            PdfReader reader = new PdfReader(is);
            PdfStamper stamper = new PdfStamper(reader, bos);
            AcroFields form = stamper.getAcroFields();

            form.setField("u1","武藏顺");
            stamper.setFormFlattening(true);
            stamper.close();
            PdfCopy cp = new PdfCopy(document, out);
            document.open();
            PdfImportedPage ip = cp.getImportedPage(new PdfReader(bos.toByteArray()), 1);
            cp.addPage(ip);
            document.close();


//            PdfWriter.getInstance(document,new FileOutputStream("/file"));
        } catch (IOException | DocumentException e) {
            log.error(e.getMessage());
        }
    }
}
