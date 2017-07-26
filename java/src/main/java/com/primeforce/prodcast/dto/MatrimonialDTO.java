package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 16/3/2017.
 */
public class MatrimonialDTO extends ProdcastDTO
{
    private List<MatrimonialRegistration> result;

    public List<MatrimonialRegistration> getResult() {
        return result;
    }

    public void setResult(List<MatrimonialRegistration> result) {
        this.result = result;

    }
}
