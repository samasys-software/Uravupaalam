package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialSearch;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 17/4/2017.
 */
public class MatrimonialProfileDTO extends ProdcastDTO {
    private List<MatrimonialSearch> result;

    public List<MatrimonialSearch> getResult() {
        return result;
    }

    public ResultSet setResult(List<MatrimonialSearch> result) {
        this.result = result;
        return null;
    }
}
