package com.primeforce.prodcast.dao;

/**
 * Created by Thiru on 7/1/2017.
 */
public class DataBaseSql
{
    public final static String FETCH_ALL_MOBILE_NUMBER = "select  * from census_person where country_id=? and mobile_no=? ";

    public final static String FETCH_EMAIL_ADDRESS="select * from census_person where email=?";

    public final static String FETCH_AADHAR_NUMBER ="select * from census_person where aadhar_no=?";
    public final static String FETCH_PASSPORT_NUMBER ="select * from census_person where passport_no=?";

    //  public final static String FETCH_ALL_MOBILE_NUMBER = "select * from census_person cns left join user_role urole on cns.uid=urole.user_id where cns.country_id=? and cns.mobile_no=?";
    public final static String SEARCH_CENSUS_PERSON="select * from census_person where mobile_no=? or aadhar_no=? or email=? or passport_no=?;";

    public final static String  SAVE_USER_REGISTRATION = "insert into census_person (name,gender,date_of_birth,fathers_name,`mothers name`," +
            "race,education,occupation,door_number,street," +
            "town,district,taluk,state_id,country_id," +
            "mobile_no,email,aadhar_no,passport_no,blood_group," +
            "pinCode,kulatheivam,kulatheivamLocation,pin_no,active_flag," +
            "created_ts,updated_ts) values(" +
            "?,?,?,?,?," +
            "?,?,?,?,?," +
            "?,?,?,?,?," +
            "?,?,?,?,?," +
            "?,?,?,?,'1'," +
            "NOW(),NOW())";
    public final static String UPDATE_USER_REGISTRATION="update census_person set name=?,gender=?,date_of_birth=?,fathers_name=?,`mothers name`=?," +
            "race=?,education=?,occupation=?,door_number=?,street=?," +
            "town=?,district=?,taluk=?,state_id=?,country_id=?," +
            "mobile_no=?,email=?,aadhar_no=?,passport_no=?,blood_group=?," +
            "pinCode=?,kulatheivam=?,kulatheivamLocation=?,updated_ts=NOW()  where uid=?";



    public final static String FETCH_NEW_REGISTRATION_COUNTRY = "select isd_code from country where country_id=?";

    public final static String GET_LOGIN_BY_AADHAR ="select * from census_person cns left join user_role urole on cns.uid=urole.user_id where cns.country_id=? and cns.aadhar_no=? and cns.pin_no=? ";
    public final static String GET_LOGIN_BY_PASSPORT ="select * from census_person cns left join user_role urole on cns.uid=urole.user_id where cns.country_id=? and cns.passport_no=? and cns.pin_no=? ";

    //public final static String GET_LOGIN_U = "SELECT census_person.*, user_role.role FROM census_person LEFT JOIN user_role ON census_person.uid=user_role.uid ORDER BY census_person.name" ;


    public final static String CENSUS_PERSON_REGISTRATION="insert into census_relationship(parent_id,child_id,relationship,created_by,created_ts,updated_ts)values(?,?,?,?,NOW(),NOW())";

    public final static String CENSUS_PERSON_VIEWS = "select * from census_person b left join census_relationship a on a.child_id=b.uid where a.created_by=?";

    public final static String CENSUS_RELATION_REGISTRATION="insert into census_relationship(parent_id,child_id,relationship,created_by,created_ts,updated_ts)values(?,?,?,?,NOW(),NOW())";

    public final static String STATE_SQL = "select * from country_state where country_id=? ";

    public final static String DISTRICT_SQL = "select * from state_district where state_id=? ";

    public final static String TALUK_SQL = "select * from district_taluk where district_id=?";

    public final static String COUNTRY_SQL = "select * from country ";

    public final static String GET_CUSTOMER_PHONENUMBER = "select pin_no from census_person where mobile_no = ? ";

    public final static String GET_CUSTOMER_EMAIL = "select pin_no from census_person where email = ? ";


    public final static String GET_ALL_REGISTORS = "select * from census_person where active_flag=1 and name like ";

    public final static String USER_DETAILS = "select * from census_person where active_flag=1";

    public final  static String USER_DELETE_SQL ="update census_person set active_flag='0' where uid=?";


    public final static String MATRIMONIAL_REGISTRATION ="insert into matrimonial_entry (name,gender,race,color,height,education,occupation,monthly_salary,date_of_birth,dob_time_place,balance_direction,year,month,date,star,padam,father_name,mother_name,father_occupation,mother_occupation,father_caste,mother_caste,assets_details,siblings,married_person,first_marriage,details,physically_challenged,physical_detail,address,city,country,phone_number,proposal_details,profile_pic_file,additional_pic_file,astro_chart_file,active_flag,created_by)values("+
            "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'1',?)";

    public final static String UPDATE_MATRIMONIAL_REGISTRATION ="update matrimonial_entry set name=?,gender=?,race=?,color=?,height=?,education=?,occupation=?,monthly_salary=?,date_of_birth=?,dob_time_place=?,balance_direction=?,year=?,month=?,date=?,star=?,padam=?,father_name=?,mother_name=?,father_occupation=?,mother_occupation=?,father_caste=?,mother_caste=?,assets_details=?,siblings=?,married_person=?,first_marriage=?,details=?,physically_challenged=?,physical_detail=?,address=?,city=?,country=?,phone_number=?,proposal_details=?,profile_pic_file=?,additional_pic_file=?,astro_chart_file=? where matrimonial_id=?";

    public final static String MATRIMONIAL_VIEWS ="select * from matrimonial_entry where active_flag=1 and created_by=?";

    public final static String MATRIMONIAL_DELETE_SQL="update matrimonial_entry set active_flag='0' where matrimonial_id=?";


    public final static String MATRIMONIAL_DISPLAY="select * from matrimonial_entry where matrimonial_id=?";


    public final static String MATRIMONIAL_SEARCH="select * from matrimonial_entry where gender=? and date_of_birth between ? and ? and active_flag='1' ";

    public final static String MATRIMONIAL_STORE="INSERT INTO favorite_profile (matrimonial_id,census_id,active)values(?,?,'1')";


    public final static String MATRIMONIAL_PROFILE="select * from favorite_profile fav left join matrimonial_entry mat on mat.matrimonial_id=fav.matrimonial_id where fav.census_id=? and fav.active='1'";

    public final static String FETCH_PROFILE="select * from favorite_profile where matrimonial_id=? and census_id=? and active='1'";

    public final static String DELETE_PROFILE="update favorite_profile set active='0' where matrimonial_id=?";

    public final static String GET_UID="select uid from census_person where aadhar_no=? or passport_no=?";




}
