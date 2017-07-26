package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;
import com.primeforce.prodcast.businessobjects.District;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by Thiru on 29/1/2017.
 */
public class DistrictMapper implements RowMapper<Country_S_D_T>{
    public Country_S_D_T mapRow(ResultSet rs, int rowNum) throws SQLException {
        Country_S_D_T district = new Country_S_D_T();
        district.setCountryId(rs.getString("country_id"));
        district.setStateId(rs.getString("state_id"));
        district.setDistrictId(rs.getString("district_id"));
        district.setDistictName(rs.getString("district_name"));

        return district;

    }
}