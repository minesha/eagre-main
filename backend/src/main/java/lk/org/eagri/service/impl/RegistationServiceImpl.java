package lk.org.eagri.service.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.org.eagri.dao.RegisertationDao;
import lk.org.eagri.dto.RegistationDto;
import lk.org.eagri.entity.RegistationEntity;
import lk.org.eagri.service.RegistationService;

@Service
public class RegistationServiceImpl implements RegistationService{
	
	@Autowired
	private RegisertationDao regisertationDao;

	@Override
	public boolean addRegistation(RegistationDto registationDto) throws Exception {
		
		RegistationEntity registationEntity=new RegistationEntity();
		registationEntity.setId(UUID.randomUUID().toString());
		registationEntity.setUserName(registationDto.getUserName());
		registationEntity.setEmail(registationDto.getEmail());
		registationEntity.setPasword(registationDto.getPasword());
		
		regisertationDao.save(registationEntity);
		
		return true;
	}

}
