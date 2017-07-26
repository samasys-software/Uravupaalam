package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;
import com.primeforce.prodcast.businessobjects.State;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by Thiru on 29/1/2017.
 */
public class StateMapper implements RowMapper<Country_S_D_T>{
    public Country_S_D_T mapRow(ResultSet rs, int rowNum) throws SQLException {
        Country_S_D_T state = new Country_S_D_T();
        state.setCountryId(rs.getString("country_id"));
        state.setStateId(rs.getString("state_id"));
        state.setStateName(rs.getString("state_name"));

        return state;
    }
}