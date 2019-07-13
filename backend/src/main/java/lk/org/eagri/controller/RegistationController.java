package lk.org.eagri.controller;

import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.org.eagri.dto.RegistationDto;
import lk.org.eagri.service.RegistationService;

@RestController
@CrossOrigin
@RequestMapping("/registation")
public class RegistationController {

	@Autowired
	private RegistationService registationService;
	
	@PostMapping(value = "/addReg")
	public ResponseEntity<Object> addRegistation(@RequestBody RegistationDto registationDto) {
		try {
			return new ResponseEntity<Object>(registationService.addRegistation(registationDto),HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
