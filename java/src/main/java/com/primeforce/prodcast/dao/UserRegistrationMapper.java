package com.primeforce.prodcast.dao;
import com.primeforce.prodcast.businessobjects.UserRegistration;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Thiru on 7/1/2017.
 */
public class UserRegistrationMapper implements RowMapper<UserRegistration> {
    public UserRegistrationMapper() {

    }

    public UserRegistration mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserRegistration register = new UserRegistration();

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
        register.setBloodGroup(rs.getString("blood_group"));
        register.setPinCode(rs.getString("pinCode"));
        register.setKulatheivam(rs.getString("kulatheivam"));
        register.setKulatheivamLocation(rs.getString("kulatheivamLocation"));
        register.setuId(rs.getLong("uid"));
        register.setRole(rs.getString("role"));
        register.setuserId(rs.getLong("user_id"));
        register.setPin(rs.getLong("pin_no"));
        register.setActive(rs.getShort("active_flag"));

        return register;
    }

}