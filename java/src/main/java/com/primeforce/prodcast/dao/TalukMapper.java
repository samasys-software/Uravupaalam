package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;
import com.primeforce.prodcast.businessobjects.Taluk;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by Thiru on 29/1/2017.
 */
public class TalukMapper  implements RowMapper<Country_S_D_T> {
    public Country_S_D_T mapRow(ResultSet rs, int rowNum) throws SQLException {
        Country_S_D_T taluk = new Country_S_D_T()  ;
        taluk.setCountryId(rs.getString("country_id"));
        taluk.setStateId(rs.getString("state_id"));
        taluk.setDistrictId(rs.getString("district_id"));
        taluk.setTalukId(rs.getString("taluk_id"));
        taluk.setTalukName(rs.getString("taluk_name"));

        return taluk;
    }
}
