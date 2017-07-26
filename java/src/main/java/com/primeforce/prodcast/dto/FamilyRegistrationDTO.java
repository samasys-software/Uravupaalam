package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.FamilyRegistration;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 25/4/2017.
 */
public class FamilyRegistrationDTO extends ProdcastDTO
{
    private List<FamilyRegistration> result;

    public List<FamilyRegistration> getResult() {
        return result;
    }

    public ResultSet setResult(List<FamilyRegistration> result) {
        this.result = result;
        return null;
    }
}
