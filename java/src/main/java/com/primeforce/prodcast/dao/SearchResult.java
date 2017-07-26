package com.primeforce.prodcast.dao;

import com.primeforce.prodcast.businessobjects.MatrimonialSearch;

import java.util.List;

/**
 * Created by Thiru on 16/4/2017.
 */
public class SearchResult
{
    private List<MatrimonialSearch> matrimonialSearchList;
    private int totalRecords;

    public List<MatrimonialSearch> getMatrimonialSearchList() {
        return matrimonialSearchList;
    }

    public void setMatrimonialSearchList(List<MatrimonialSearch> matrimonialSearchList) {
        this.matrimonialSearchList = matrimonialSearchList;
    }

    public int getTotalRecords() {
        return totalRecords;
    }

    public void setTotalRecords(int totalRecords) {
        this.totalRecords = totalRecords;
    }
}
