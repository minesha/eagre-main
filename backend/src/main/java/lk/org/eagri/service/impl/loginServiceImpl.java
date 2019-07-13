package lk.org.eagri.service.impl;

import javax.management.loading.PrivateClassLoader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.org.eagri.dao.RegisertationDao;
import lk.org.eagri.dto.loginDto;
import lk.org.eagri.entity.RegistationEntity;
import lk.org.eagri.service.loginService;

@Service
public class loginServiceImpl implements loginService
{
	
	@Autowired
private RegisertationDao regisertationDao;

	@Override
	public boolean islogin(loginDto loginDto) throws Exception {
		RegistationEntity registation=regisertationDao.findByUserName(loginDto.getUserName());
		System.out.println(registation.getPasword());
		System.out.println(loginDto.getPassword());
		if(registation!=null) {
			if(registation.getPasword().equalsIgnoreCase(loginDto.getPassword())) {
				return true;
			}
		}
		return false;
	}
	
	

}
