package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.MatrimonialSearch;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Thiru on 6/4/2017.
 */
public class  MatrimonialSearchMapper implements RowMapper<MatrimonialSearch> {

public  MatrimonialSearchMapper ()
{
}
    public MatrimonialSearch mapRow(ResultSet rs, int rowNum) throws SQLException {
        MatrimonialSearch reg = new MatrimonialSearch();
        reg.setName(rs.getString("name"));
        reg.setOccupation(rs.getString("occupation"));
        reg.setDob(rs.getString("date_of_birth"));
        reg.setCity(rs.getString("city"));
        reg.setCountry(rs.getString("country"));
        reg.setGender(rs.getInt("gender"));
        reg.setProfilePictureFile(rs.getString("profile_pic_file"));
        reg.setMatrimonial_id(rs.getLong("matrimonial_id"));


        return reg;
    }
}