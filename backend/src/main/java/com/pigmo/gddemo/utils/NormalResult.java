package com.pigmo.gddemo.utils;

import lombok.Data;

@Data
public class NormalResult {
    private Integer code;
    private Object data;
    private String msg;

    private NormalResult() {
    }

    private NormalResult(Integer code, Object data) {
        this.code = code;
        this.data = data;
    }

    private NormalResult(Integer code, Object data, String msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    public static NormalResult ok(){
        return new NormalResult(1,"");
    }
    public static NormalResult ok(Object data){
        return new NormalResult(1,data);
    }
    public static NormalResult ok(Integer code, Object data, String msg){
        return  new NormalResult(code,data,msg);
    }
}
