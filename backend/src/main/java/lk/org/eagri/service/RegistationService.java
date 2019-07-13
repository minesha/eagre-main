package lk.org.eagri.service;

import lk.org.eagri.dto.RegistationDto;

public interface RegistationService {
	
	public boolean addRegistation(RegistationDto registationDto)throws Exception;
}
