package lk.org.eagri.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.org.eagri.dto.loginDto;
import lk.org.eagri.service.loginService;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class loginController {
	
	
@Autowired
private loginService loginService;


@PostMapping (value = "/islogin")
private ResponseEntity<Object>islogin(@RequestBody loginDto loginDto){
	
	try {
		return new ResponseEntity<Object>(loginService.islogin(loginDto),HttpStatus.OK);
	} catch (Exception e) {
		return new ResponseEntity<Object>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
}


}
