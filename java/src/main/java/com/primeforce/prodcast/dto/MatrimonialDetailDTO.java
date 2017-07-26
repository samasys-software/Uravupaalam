package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 6/4/2017.
 */
public class MatrimonialDetailDTO extends ProdcastDTO
{

    private List<MatrimonialRegistration> result;

    public List<MatrimonialRegistration> getResult()
    {
        return result;
    }

    public ResultSet setResult(List<MatrimonialRegistration> result) {
        this.result = result;
        return null;
    }
}
