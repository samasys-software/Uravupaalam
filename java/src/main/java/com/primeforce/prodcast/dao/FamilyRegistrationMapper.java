package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.FamilyRegistration;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Thiru on 25/4/2017.
 */
public class FamilyRegistrationMapper implements RowMapper<FamilyRegistration> {
    public FamilyRegistrationMapper() {
    }


    public FamilyRegistration mapRow(ResultSet rs, int rowNum) throws SQLException {
        FamilyRegistration register = new FamilyRegistration();

        register.setName(rs.getString("name"));
        register.setGender(rs.getInt("gender"));
        register.setDob(rs.getString("date_of_birth"));
        register.setFatherName(rs.getString("fathers_name"));
        register.setMotherName(rs.getString("mothers name"));
        register.setRace(rs.getString("race"));
        register.setEducation(rs.getString("education"));
        register.setOccupation(rs.getString("occupation"));
        register.setDoorNumber(rs.getString("door_number"));
        register.setStreet(rs.getString("street"));
        register.setTown(rs.getString("town"));
        register.setDistrict(rs.getString("district"));
        register.setTaluk(rs.getString("taluk"));
        register.setState(rs.getString("state_id"));
        register.setCountry(rs.getString("country_id"));
        register.setMobilePhone(rs.getString("mobile_no"));
        register.setEmail(rs.getString("email"));
        register.setAddar(rs.getString("aadhar_no"));
        register.setPassportNo(rs.getString("passport_no"));
        register.setBloodGroup(rs.getString("blood_group"));
        register.setPinCode(rs.getString("pinCode"));
        register.setuId(rs.getLong("uid"));
        register.setPin(rs.getLong("pin_no"));
        register.setKulatheivam(rs.getString("kulatheivam"));
        register.setKulatheivamLocation(rs.getString("kulatheivamLocation"));
        register.setActive(rs.getShort("active_flag"));
        register.setParentId(rs.getLong("parent_id"));
        register.setChildId(rs.getLong("child_id"));
        register.setRelationShip(rs.getString("relationShip"));
        register.setCreatedby(rs.getLong("created_by"));

        return register;


    }
}