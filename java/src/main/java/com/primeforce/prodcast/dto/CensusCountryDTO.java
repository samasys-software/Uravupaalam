package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.Country_S_D_T;


import java.util.List;


    public class CensusCountryDTO extends ProdcastDTO {
        private List<Country_S_D_T> result;

        public List<Country_S_D_T> getResult() {
            return result;
        }

        public void setResult(List<Country_S_D_T> result) {
            this.result = result;
        }


    }


