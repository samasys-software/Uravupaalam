package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;
import com.primeforce.prodcast.businessobjects.MatrimonialSearch;

import java.sql.ResultSet;
import java.util.List;

/**
 * Created by Thiru on 27/3/2017.
 */
public class MatrimonialRegistrationDTO extends ProdcastDTO

    {

        private List<MatrimonialSearch> result;


        private  int totalRecords;
        private  int pageNumber;

        public List<MatrimonialSearch> getResult()
        {
        return result;
        }

    public ResultSet setResult(List<MatrimonialSearch> result) {
        this.result = result;
        return null;


    }

        public int getTotalRecords() {
            return totalRecords;
        }

        public void setTotalRecords(int totalRecords) {
            this.totalRecords = totalRecords;
        }

        public int getPageNumber() {
            return pageNumber;
        }

        public void setPageNumber(int pageNumber) {
            this.pageNumber = pageNumber;
        }
    }
