package com.primeforce.prodcast.dao;
import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by Thiru on 13/3/2017.
 */
public class MatrimonialRegistrationMapper implements RowMapper<MatrimonialRegistration> {
    public MatrimonialRegistrationMapper()
    {

    }

    public MatrimonialRegistration mapRow(ResultSet rs, int rowNum) throws SQLException {
        MatrimonialRegistration reg = new MatrimonialRegistration();
        reg.setName(rs.getString("name"));
        reg.setRace(rs.getString("race"));
        reg.setColor(rs.getString("color"));
        reg.setHeight(rs.getInt("height"));
        reg.setEducation(rs.getString("education"));
        reg.setOccupation(rs.getString("occupation"));
        reg.setMonthlySalary(rs.getString("monthly_salary"));
        reg.setDob(rs.getString("date_of_birth"));
        reg.setDobTP(rs.getString("dob_time_place"));
        reg.setBalanceDirection(rs.getString("balance_direction"));
        reg.setYear(rs.getInt("year"));
        reg.setMonth(rs.getString("month"));
        reg.setDate(rs.getInt("date"));
        reg.setStar(rs.getString("star"));
        reg.setPadam(rs.getString("padam"));
        reg.setFatherName(rs.getString("father_name"));
        reg.setMotherName(rs.getString("mother_name"));
        reg.setFatherOccupation(rs.getString("father_occupation"));
        reg.setMotherOccupation(rs.getString("mother_occupation"));
        reg.setFatherCaste(rs.getString("father_caste"));
        reg.setMotherCaste(rs.getString("mother_caste"));
        reg.setAssetsDetails(rs.getString("assets_details"));
        reg.setSiblings(rs.getString("siblings"));
        reg.setMarriedPerson(rs.getString("married_person"));
        reg.setFirstMarriage(rs.getString("first_marriage"));
        reg.setDetails(rs.getString("details"));
        reg.setPhysicallyChallenged(rs.getString("physically_challenged"));
        reg.setPhysicalDetail(rs.getString("physical_detail"));
        reg.setAddress(rs.getString("address"));
        reg.setPhoneNumber(rs.getString("phone_number"));
        reg.setProposalDetails(rs.getString("proposal_details"));
        reg.setProfilePictureFile(rs.getString("profile_pic_file"));
        reg.setAdditionalPictureFile(rs.getString("additional_pic_file"));
        reg.setAstroChartFile(rs.getString("astro_chart_file"));
        reg.setCreated_by(rs.getLong("Created_by"));
        reg.setActive(rs.getShort("active_flag"));
        reg.setMatrimonial_id(rs.getLong("matrimonial_id"));
        reg.setCity(rs.getString("city"));
        reg.setCountry(rs.getString("country"));

        return reg;
    }
}




