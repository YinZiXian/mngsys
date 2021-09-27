package com.zixy.mngsys.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class LoginController {

    @RequestMapping("/login")
    public String login(HttpServletRequest req) {
        System.out.println(req);
        return "Success";
    }

}
