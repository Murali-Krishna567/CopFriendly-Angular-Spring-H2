package com.app.Register.repository;



import java.util.List;
//import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;

import com.app.Register.model.complaint;
 
@Transactional
public interface ComplaintRepository extends JpaRepository<complaint, Integer> {
	
	 
//	 @Modifying
//	 @Query("DELETE FROM complaint c where c.vehicleno=:vehicleno")
//	 void deleteByvehicleno(@Param("vehicleno") String vehicleno);

	 List<complaint> findByvehicleno(String vehicleno);
	 complaint findByphoneno(String phoneno);

//void deleteById(Optional<complaint> com);

 
	  
	
	
}
