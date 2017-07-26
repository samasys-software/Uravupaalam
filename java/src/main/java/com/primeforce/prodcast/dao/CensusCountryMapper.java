package com.primeforce.prodcast.dao;
import com.primeforce.prodcast.businessobjects.CensusCountry;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Thiru on 12/1/2017.
 */
public class CensusCountryMapper implements RowMapper<CensusCountry>
{
    public CensusCountry mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        CensusCountry country = new CensusCountry();
        country.setCountryId(rs.getString("country_id"));
        country.setCountryName(rs.getString("country_name"));

        return country;
    }
}
