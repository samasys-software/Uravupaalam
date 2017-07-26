package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Thiru on 6/2/2017.
 */
public class Country_S_D_TMapper implements RowMapper<Country_S_D_T> {
    public Country_S_D_TMapper() {
    }

    public Country_S_D_T mapRow(ResultSet rs, int rowNum) throws SQLException {
        Country_S_D_T con = new Country_S_D_T();
               con.setCountryId(rs.getString("country_id"));
               con.setCountryName(rs.getString("country_name"));
               con.setStateId(rs.getString("state_id"));
               con.setStateName(rs.getString("state_name"));
               con.setDistrictId(rs.getString("district_id"));
               con.setDistictName(rs.getString("district_name"));
               con.setTalukId(rs.getString("taluk_id"));
               con.setTalukName(rs.getString("taluk_name"));
        return con;
    }
}