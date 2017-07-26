package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.UserRegistration;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 12/1/2017.
 */
public class RegistrationDTO extends ProdcastDTO
{

    private List<UserRegistration> result;

    public List<UserRegistration> getResult() {
        return result;
    }

    public ResultSet setResult(List<UserRegistration> result) {
        this.result = result;
        return null;
    }

}
