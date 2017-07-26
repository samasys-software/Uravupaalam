package com.primeforce.prodcast.dao;
import com.primeforce.prodcast.businessobjects.MatrimonialSearch;

/**
 * Created by Thiru on 17/4/2017.
 */

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by Thiru on 20/4/2017.
 */
public class FavoriteMatrimonialMapper implements RowMapper<MatrimonialSearch> {

    public  FavoriteMatrimonialMapper()

    {
    }

    public MatrimonialSearch mapRow(ResultSet rs, int rowNum) throws SQLException {
    MatrimonialSearch reg = new MatrimonialSearch();


    reg.setMatrimonial_id(rs.getLong("matrimonial_id"));
    reg.setCensus_id(rs.getLong("census_id"));
    reg.setLiked(rs.getBoolean("active"));
    reg.setFav_profile(rs.getLong("favorite_profile_id"));

    return reg;
}
}
