package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;
import com.primeforce.prodcast.businessobjects.Taluk;

import java.util.List;
/**
 * Created by Thiru on 29/1/2017.
 */
public class TalukDTO extends ProdcastDTO

{
    private List<Country_S_D_T> result;


    public List<Country_S_D_T> getResult() {
        return result;
    }

    public void setResult(List<Country_S_D_T> result) {
        this.result = result;
    }

}
