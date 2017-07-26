package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialSearch;
import com.primeforce.prodcast.dao.SearchResult;

import java.util.List;

/**
 * Created by Thiru on 16/4/2017.
 */
public class SearchResultDTO extends ProdcastDTO

{
    public SearchResult getSearch()
    {
        return search;
    }
    public void setSearch(SearchResult search)
    {
        this.search=search;
    }
    private SearchResult search;
    private int totalRecords,pageNumber;

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

    public List<MatrimonialSearch> getResult() {
        return result;
    }

    public void setResult(List<MatrimonialSearch> result) {
        this.result = result;
    }

    private List<MatrimonialSearch> result;

}
