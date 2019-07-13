package lk.org.eagri.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.org.eagri.entity.RegistationEntity;

public interface RegisertationDao extends JpaRepository<RegistationEntity, String>{
	
	
	RegistationEntity findByUserName(String userName)throws Exception;
	

}
