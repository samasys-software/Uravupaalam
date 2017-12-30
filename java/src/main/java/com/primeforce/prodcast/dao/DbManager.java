package com.primeforce.prodcast.dao;


import com.primeforce.prodcast.businessobjects.*;
import com.primeforce.prodcast.businessobjects.UserRegistration;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.stereotype.Component;

import javax.servlet.Registration;
import java.sql.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Thiru on 10/1/2017.
 */
@Component ("DbManager")
public class DbManager {
    public final static String DATE_FORMAT = "dd/MM/yyyy";
    private final JdbcTemplate template1;

    @Autowired
    public DbManager(JdbcTemplate template1) {
        this.template1 = template1;
    }


    public List<UserRegistration> fetchMobileNumber1(String country, String mobilePhone) {

        Object[] args = new Object[]{country, mobilePhone};
        return template1.query(DataBaseSql.FETCH_ALL_MOBILE_NUMBER, args, new UserDetailMapper());

    }
    public List<UserRegistration> fetchEmailAddress(String email) {

        Object[] args = new Object[]{email};
        return template1.query(DataBaseSql.FETCH_EMAIL_ADDRESS, args, new UserDetailMapper());

    }

    public List<UserRegistration> fetchAadharNumber(String aadhar) {
        try {

            Object[] args = new Object[]{aadhar};
            return template1.query(DataBaseSql.FETCH_AADHAR_NUMBER, args, new UserDetailMapper());
        }
        catch (Exception e){
            return null;
        }

    }
    public List<UserRegistration> fetchPassportNumber(String passport) {
        try {

            Object[] args = new Object[]{passport};
            return template1.query(DataBaseSql.FETCH_PASSPORT_NUMBER, args, new UserDetailMapper());
        }
        catch (Exception e){
            return null;
        }

    }

    public List<CensusCountry> fetchCountries() {

        return template1.query(DataBaseSql.COUNTRY_SQL, (Object[]) null, new CensusCountryMapper());

    }

    public List<Country_S_D_T> fetchStates(String country_id) {

        Object[] args = new Object[]{country_id};

        return template1.query(DataBaseSql.STATE_SQL, args, new StateMapper());

    }

    public List<Country_S_D_T> fetchDistricts(String state_id) {

        Object[] args = new Object[]{state_id};

        return template1.query(DataBaseSql.DISTRICT_SQL, args, new DistrictMapper());

    }

    public List<Country_S_D_T> fetchTaluks(String district_id) {

        Object[] args = new Object[]{district_id};

        return template1.query(DataBaseSql.TALUK_SQL, args, new TalukMapper());

    }

    public int saveUserRegisteration(String name, int gender, String dob, String fatherName, String motherName, String race, String education, String occupation, String doorname, String street, String town, String district, String taluk, String state, String country, String mobilePhone, String email, String aadhar, String passportNo, String bloodGroup, String pinCode, String kulatheivam, String kulatheivamLocation,int code) throws ParseException {
        DateFormat df = new SimpleDateFormat(DATE_FORMAT);


        Object[] args = new Object[]{name, gender, new Date(df.parse(dob).getTime()), fatherName,
                motherName, race, education, occupation, doorname, street,
                town, district, taluk, state, country, mobilePhone, email, aadhar,passportNo, bloodGroup, pinCode, kulatheivam, kulatheivamLocation,code};
        return template1.update(DataBaseSql.SAVE_USER_REGISTRATION, args);


    }

    public int updateUserRegistration(String name, int gender, String dob, String fatherName, String motherName, String race, String education, String occupation, String doorname, String street, String town, String district, String taluk, String state, String country, String mobilePhone, String email, String aadhar, String passportNo, String bloodGroup, String pinCode, String kulatheivam, String kulatheivamLocation, long registerId) throws ParseException {
        DateFormat df = new SimpleDateFormat(DATE_FORMAT);
        Object[] args = new Object[]{name, gender, new Date(df.parse(dob).getTime()), fatherName,
                motherName, race, education, occupation, doorname, street,
                town, district, taluk, state, country, mobilePhone, email, aadhar, passportNo, bloodGroup, pinCode, kulatheivam, kulatheivamLocation, registerId};
        return template1.update(DataBaseSql.UPDATE_USER_REGISTRATION, args);

    }

    public String fetchCustomerCountryId1(String countryId) {
        return template1.queryForObject(DataBaseSql.FETCH_NEW_REGISTRATION_COUNTRY, new Object[]{countryId}, String.class);
    }


    public UserRegistration loginUser( String country, String loginOption,String aadhar,String passport,int pin) {

        if(loginOption.equals("aadhar"))
            return template1.queryForObject(DataBaseSql.GET_LOGIN_BY_AADHAR, new Object[]{country,aadhar,pin}, new UserRegistrationMapper());
        else
            return template1.queryForObject(DataBaseSql.GET_LOGIN_BY_PASSPORT, new Object[]{country,passport,pin}, new UserRegistrationMapper());

    }



    public int searchRelation(Long censusId,Long existId,String relationShip)

    {
        Object[] args=new Object[]{censusId,existId,relationShip,censusId};
        return template1.update(DataBaseSql.CENSUS_RELATION_REGISTRATION,args);
    }
    public int registerFamilyPerson(long censusId,long existId,String relationShip)

    {
        Object[] args=new Object[]{censusId,existId,relationShip,censusId};
        return template1.update(DataBaseSql.CENSUS_RELATION_REGISTRATION,args);
    }
    public List<FamilyRegistration> viewFamilyPerson(long censusId) {

        Object[] args = new Object[]{censusId};

        return template1.query(DataBaseSql.CENSUS_PERSON_VIEWS, args, new FamilyRegistrationMapper());

    }
    public int getPinFromMobile1(String mobilePhone) {
        try {

            return template1.queryForObject(DataBaseSql.GET_CUSTOMER_PHONENUMBER, new Object[]{mobilePhone}, Integer.class);
        } catch (Exception er) {
            System.out.println(er.toString());
            return -1;
        }
    }

    public int getPinFromEmail(String Email) {
        try {

            return template1.queryForObject(DataBaseSql.GET_CUSTOMER_EMAIL, new Object[]{Email}, Integer.class);
        } catch (Exception er) {
            System.out.println(er.toString());
            return 1;
        }
    }
    public List<UserRegistration> getAllRegistorsDetails(String name)

    {
        return template1.query(DataBaseSql.GET_ALL_REGISTORS + "'%" + name.trim() + "%'", (Object[]) null, new UserDetailMapper());
    }


    public List<UserRegistration> getDetails() {
        return template1.query(DataBaseSql.USER_DETAILS, (Object[]) null, new UserDetailMapper());

    }
    public List<UserRegistration> searchDetail(String mobilePhone,String aadhar,String email,String passportNo) {

        Object [] args=new Object[]{mobilePhone,aadhar,email,passportNo};
        return template1.query(DataBaseSql.SEARCH_CENSUS_PERSON,args, new UserDetailMapper());

    }

    public int matrimonialRegister(String name, int gender, String race, String color, int height, String education, String occupation, String monthlySalary, String dob, String dobTP, String balanceDirection, int year, String month, int date, String star, String padam, String fatherName, String motherName, String fatherOccupation, String motherOccupation, String fatherCaste, String motherCaste, String assetsDetails, String siblings, String marriedPerson,String firstMarriage, String details, String physicallyChallenged, String physicalDetail, String address, String city, String country, String phoneNumber, String proposalDetails, String profilePictureFile, String additionalPictureFile, String astroChartFile, long censusId) throws ParseException {
        DateFormat df = new SimpleDateFormat(DATE_FORMAT);

        Object[] args = new Object[]{name, gender, race, color, height, education, occupation, monthlySalary, new Date(df.parse(dob).getTime()), dobTP, balanceDirection, year, month, date, star, padam, fatherName, motherName, fatherOccupation, motherOccupation, fatherCaste, motherCaste, assetsDetails, siblings, marriedPerson, firstMarriage, details, physicallyChallenged, physicalDetail, address, city, country, phoneNumber, proposalDetails, profilePictureFile, additionalPictureFile, astroChartFile, censusId};

        return template1.update(DataBaseSql.MATRIMONIAL_REGISTRATION, args);
    }

    public int updatematrimony(String name, int gender, String race, String color, int height, String education, String occupation, String monthlySalary, String dob, String dobTP, String balanceDirection, int year, String month, int date, String star, String padam, String fatherName, String motherName, String fatherOccupation, String motherOccupation, String fatherCaste, String motherCaste, String assetsDetails, String siblings, String marriedPerson, String firstMarriage, String details, String physicallyChallenged, String physicalDetail, String address, String city, String country, String phoneNumber, String proposalDetails,String profilePictureFile, String additionalPictureFile, String astroChartFile,long matrimonial_id) throws ParseException {
        DateFormat df = new SimpleDateFormat(DATE_FORMAT);

        Object[] args = new Object[]{name, gender, race, color, height, education, occupation, monthlySalary, new Date(df.parse(dob).getTime()), dobTP, balanceDirection, year, month, date, star, padam, fatherName, motherName, fatherOccupation, motherOccupation, fatherCaste, motherCaste, assetsDetails, siblings, marriedPerson, firstMarriage, details, physicallyChallenged, physicalDetail, address, city, country, phoneNumber, proposalDetails,profilePictureFile, additionalPictureFile, astroChartFile, matrimonial_id};

        return template1.update(DataBaseSql.UPDATE_MATRIMONIAL_REGISTRATION, args);
    }


    public List<MatrimonialRegistration> martimonialView(Long censusId) {

        Object[] args = new Object[]{censusId};

        return template1.query(DataBaseSql.MATRIMONIAL_VIEWS, args, new MatrimonialRegistrationMapper());

    }

    public int deleteUser(Long uId) {
        return template1.update(DataBaseSql.USER_DELETE_SQL, new Object[]{uId});

    }

    public int deleteMatrimonial(Long matrimonialId) {

        return template1.update(DataBaseSql.MATRIMONIAL_DELETE_SQL, new Object[]{matrimonialId});

    }

    public List<MatrimonialRegistration> martimonialDisplay(long matrimonialId) {

        Object[] args = new Object[]{matrimonialId};

        return template1.query(DataBaseSql.MATRIMONIAL_DISPLAY, args, new MatrimonialRegistrationMapper());

    }

    public SearchResult matrimonialSearch(int gender, String startAge, String endAge, int recordsPerPage, int pageNumber) throws SQLException {


        Connection con = template1.getDataSource().getConnection();
        PreparedStatement preparedStatement = con.prepareStatement(DataBaseSql.MATRIMONIAL_SEARCH);
        preparedStatement.setInt(1, gender);
        preparedStatement.setString(2, startAge);
        preparedStatement.setString(3, endAge);
        ResultSet rs = preparedStatement.executeQuery();
        List<MatrimonialSearch> matrimonialSearchList = new LinkedList<MatrimonialSearch>();


        int endRecord = pageNumber * recordsPerPage;
        int firstRecords = endRecord - recordsPerPage + 1;
        int counter = 0;
        MatrimonialSearchMapper matrimonialSearchMapper = new MatrimonialSearchMapper();
        while (rs.next())
        {
            counter++;
            if (counter >= firstRecords && counter <= endRecord)
            {
                matrimonialSearchList.add(matrimonialSearchMapper.mapRow(rs, counter));

            }

        }

        SearchResult searchResult = new SearchResult();
        searchResult.setTotalRecords(counter);
        searchResult.setMatrimonialSearchList(matrimonialSearchList);
        return searchResult;
    }

    public int storeProfile(long matrimonialId,long censusId)
    {
        Object[] args = new Object[]{matrimonialId,censusId};
        return template1.update(DataBaseSql.MATRIMONIAL_STORE, args);

    }
    public List<MatrimonialSearch>fetchProfile(long matrimonialId,long censusId)
    {
        Object[] args= new Object[]{matrimonialId,censusId};
        return template1.query(DataBaseSql.FETCH_PROFILE,args,new FavoriteMatrimonialMapper());
    }

    public List<MatrimonialSearch> getProfile(Long censusId)

    {
        Object[] args=new Object[]{censusId};
        return template1.query(DataBaseSql.MATRIMONIAL_PROFILE, args, new MatrimonialProfileMapper());

    }
    public long getUId(String aadhar,String passport)

    {
        Object[] args=new Object[]{aadhar,passport};
        return template1.queryForObject(DataBaseSql.GET_UID, args,long.class);
    }
    public int deleteProfile(Long matrimonialId) {

        return template1.update(DataBaseSql.DELETE_PROFILE, new Object[]{matrimonialId});

    }
}



