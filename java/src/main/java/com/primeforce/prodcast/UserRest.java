package com.primeforce.prodcast;

/**
 * Created by Thiru on 7/1/2017.
 */


import com.amazonaws.util.IOUtils;
import com.primeforce.prodcast.businessobjects.FamilyRegistration;
import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;
import com.primeforce.prodcast.businessobjects.UserRegistration;
import com.primeforce.prodcast.dao.DbManager;
import com.primeforce.prodcast.dto.*;
import com.primeforce.prodcast.util.Amazon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import javax.inject.Named;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import java.io.*;



import java.util.List;
import java.util.Random;
import java.util.UUID;


/**
 * Created by thiru on 01/11/2016.
 */
@Named
@Path("/user/")

public class UserRest {
    private final DbManager dbManager;

    @Autowired
    public UserRest(DbManager manager)

    {
        dbManager = manager;
    }

    @GET
    @Path("getCountries")
    @Produces(MediaType.APPLICATION_JSON)
    public CensusCountryDTO getCountries() {
        CensusCountryDTO dto = new CensusCountryDTO();

        try {
            List countries = dbManager.fetchCountries();
            dto.setResult(countries);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("getStates")
    @Produces(MediaType.APPLICATION_JSON)
    public StateDTO getState(@QueryParam("country") String country) {
        StateDTO dto = new StateDTO();

        try {
            List state = dbManager.fetchStates(country);
            dto.setResult(state);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("getDistricts")
    @Produces(MediaType.APPLICATION_JSON)
    public DistrictDTO getDistrict(@QueryParam("state") String state) {
        DistrictDTO dto = new DistrictDTO();

        try {
            List district = dbManager.fetchDistricts(state);
            dto.setResult(district);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("getTaluks")
    @Produces(MediaType.APPLICATION_JSON)
    public TalukDTO getTaluk(@QueryParam("district") String district) {
        TalukDTO dto = new TalukDTO();

        try {
            List taluk = dbManager.fetchTaluks(district);
            dto.setResult(taluk);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @POST
    @Path("registration")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO userRegistration(@FormParam("name") String name,
                                     @FormParam("gender") int gender,
                                     @FormParam("dob") String dob,
                                     @FormParam("fatherName") String fatherName,
                                     @FormParam("motherName") String motherName,
                                     @FormParam("race") String race,
                                     @FormParam("education") String education,
                                     @FormParam("occupation") String occupation,
                                     @FormParam("doorNumber") String doorname,
                                     @FormParam("street") String street,
                                     @FormParam("town") String town,
                                     @FormParam("district") String district,
                                     @FormParam("taluk") String taluk,
                                     @FormParam("state") String state,
                                     @FormParam("country") String country,
                                     @FormParam("mobilePhone") String mobilePhone,
                                     @FormParam("email") String email,
                                     @FormParam("aadhar") String aadhar,
                                     @FormParam("bloodGroup") String bloodGroup,
                                     @FormParam("pinCode") String pinCode,
                                     @FormParam("kulatheivam") String kulatheivam,
                                     @FormParam("kulatheivamLocation") String kulatheivamLocation,
                                     @FormParam("registerId") String registerId)

    {
        AdminDTO dto = new AdminDTO();

        try {


            Random random = new Random();
            int code = (1000 + random.nextInt(9000));
            System.out.println(code);
            int regist;
            if (registerId == null) {
                //List userData = dbManager.fetchMobileNumber1(country, mobilePhone);
                //List userEmail = dbManager.fetchEmailAddress(email);
                List userAadhar =dbManager.fetchAadharNumber(aadhar);


               /* if (mobilePhone.equals(""))
                {
                    dbManager.registerUser(name.toUpperCase(), gender, dob, fatherName.toUpperCase(), motherName.toUpperCase(), race.toUpperCase(), education.toUpperCase(),
                            occupation.toUpperCase(), doorname.toUpperCase(), street.toUpperCase(), town.toUpperCase(), district.toUpperCase(), taluk.toUpperCase(), state.toUpperCase(),
                            country.toUpperCase(), mobilePhone.toUpperCase(), email.toLowerCase(), aadhar.toUpperCase(), bloodGroup.toUpperCase(), pinCode.toUpperCase(), kulatheivam.toUpperCase(), kulatheivamLocation.toUpperCase(), code);

                }
               else {
                    if (userData.size() > 0)

                    {
                        dto.setError(true);
                        dto.setErrorMessage("The Mobile number Already Exists");
                        return dto;
                    }
                }
                if (userEmail.size() > 0) {
                    dto.setError(true);
                    dto.setErrorMessage("The EmailId Already Exists");
                    return dto;

                }
                if (aadhar.equals(""))
                {
                    dbManager.registerUser(name.toUpperCase(), gender, dob, fatherName.toUpperCase(), motherName.toUpperCase(), race.toUpperCase(), education.toUpperCase(),
                            occupation.toUpperCase(), doorname.toUpperCase(), street.toUpperCase(), town.toUpperCase(), district.toUpperCase(), taluk.toUpperCase(), state.toUpperCase(),
                            country.toUpperCase(), mobilePhone.toUpperCase(), email.toLowerCase(), aadhar.toUpperCase(), bloodGroup.toUpperCase(), pinCode.toUpperCase(), kulatheivam.toUpperCase(), kulatheivamLocation.toUpperCase(), code);

                }
                else
                    {
                    if (userAadhar.size() > 0)
                    {
                        dto.setError(true);
                        dto.setErrorMessage("The Aadhar Number Already Exists");
                        return dto;
                    }
                }*/

                if (userAadhar.size() > 0)
                {
                    dto.setError(true);
                    dto.setErrorMessage("The Aadhar Number Already Exists");
                    return dto;
                }



                regist = dbManager.registerUser(name.toUpperCase(), gender, dob, fatherName.toUpperCase(), motherName.toUpperCase(), race.toUpperCase(), education.toUpperCase(),
                        occupation.toUpperCase(), doorname.toUpperCase(), street.toUpperCase(), town.toUpperCase(), district.toUpperCase(), taluk.toUpperCase(), state.toUpperCase(),
                        country.toUpperCase(), mobilePhone.toUpperCase(), email.toLowerCase(), aadhar.toUpperCase(), bloodGroup.toUpperCase(), pinCode.toUpperCase(), kulatheivam.toUpperCase(), kulatheivamLocation.toUpperCase(), code);

                dto.setSuccessMessage(""+code);

                try {
                    String phoneNumber = dbManager.fetchCustomerCountryId1(country) + mobilePhone;

                    String subject = "Thank you for registering with URAVUPPAALAM. Your pin number for http://www.uravuppaalam.com is :" + code + "." +
                            " You can use the PIN # to login and update your details anytime \n";
                    Amazon.sendSMS(subject, phoneNumber);

                    Amazon.sendEmail(email, "WELCOME TO URAVUPPAALAM", subject);
                }
                catch(Exception er ){
                    System.out.println("Error with SNS ");
                }
            }
            else {

                regist = dbManager.updateCustomer1(name.toUpperCase(), gender, dob, fatherName.toUpperCase(), motherName.toUpperCase(), race.toUpperCase(), education.toUpperCase(),
                        occupation.toUpperCase(), doorname.toUpperCase(), street.toUpperCase(), town.toUpperCase(), district.toUpperCase(), taluk.toUpperCase(), state.toUpperCase(),
                        country.toUpperCase(), mobilePhone.toUpperCase(), email.toLowerCase(), aadhar.toUpperCase(), bloodGroup.toUpperCase(), pinCode.toUpperCase(), kulatheivam.toUpperCase(), kulatheivamLocation.toUpperCase(), Long.parseLong(registerId));
                dto.setSuccessMessage("Successfully Updated");
            }

            if (regist == 0) {
                dto.setError(true);
            } else {
                dto.setResult(regist);
            }




        } catch (Exception er)

        {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        return dto;
    }

    @POST
    @Path("login")
    @Produces(MediaType.APPLICATION_JSON)
    public CustomerLoginDTO authenticate(@FormParam("mobilePhone") String mobilePhone, @FormParam("country") String country, @FormParam("pin") int pin,@FormParam("aadhar") String aadhar,@FormParam("email") String email) {

        CustomerLoginDTO dto = new CustomerLoginDTO();


        try {

            UserRegistration confirmation = dbManager.loginCustomer1(country,mobilePhone,aadhar,email,pin);
            System.out.println("UId=" + confirmation.getuId());
            long censusId = confirmation.getuId();
            dto.setResult(confirmation);
            List<MatrimonialRegistration> matrimonial = dbManager.martimonialView(censusId);
            dto.setMatrimonialDetail(matrimonial);

        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }


    @POST
    @Path("retrieve")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO authenticate(@FormParam("mobilePhone") String mobilePhone, @FormParam("country") String country,@FormParam("email") String email) throws Exception {
        AdminDTO dto = new AdminDTO();
        try {
            if (mobilePhone != null) {
                int pin = dbManager.getPinFromMobile1(mobilePhone);


                if (pin != -1) {
                    String phoneNumber = dbManager.fetchCustomerCountryId1(country) + mobilePhone;

                    String subject = "Your pin number for http://www.uravuppaalam.com is :" + pin;
                    System.out.println(pin);

                    Amazon.sendSMS(subject, phoneNumber);

                    return dto;

                }

                if(email!=null)
                {
                int pin1= dbManager.getPinFromEmail(email);
                if (pin1 != 1)
                {

                    String subject = "Your pin number for http://www.uravuppaalam.com is :" + pin1;
                    System.out.println(pin1);


                    Amazon.sendEmail(email, "WELCOME TO URAVUPPAALAM", subject);


                    return dto;

                }

                else {
                    dto.setError(true);
                    dto.setErrorMessage("The mobile number is not registered with URAVUPAALAM");

                }
                }
            }
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("getRegistrationDetails")
    @Produces(MediaType.APPLICATION_JSON)

    public RegistrationDTO getRegistrationDetails(@QueryParam("name") String name) {

        RegistrationDTO dto = new RegistrationDTO();
        List<UserRegistration> registration = null;

        try {

            if (!name.equals("")) {

                registration = dbManager.getAllRegistors1(name.toUpperCase());

                dto.setResult(registration);

            } else
                dto.setError(true);
            {
                dto.setErrorMessage("Please enter few characters to search");

            }
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        return dto;
    }

    @POST
    @Path("changeStatus")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO changeStatus(@FormParam("uId") String uId) {
        AdminDTO dto = new AdminDTO();

        try {
            int delete;
            delete = dbManager.deleteUser(Long.parseLong(uId));
            if (delete != 1)

            {
                dto.setError(true);
                dto.setErrorMessage("Unable to delete");

            } else {
                dto.setResult(dbManager.getDetails());
            }
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("getDetails")
    @Produces(MediaType.APPLICATION_JSON)

    public RegistrationDTO getDetails() {

        RegistrationDTO dto = new RegistrationDTO();
        List<UserRegistration> registration = null;

        try {

            registration = dbManager.getDetails();

            dto.setResult(registration);

        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        return dto;
    }

    @GET
    @Path("getUserDetails")
    public RegistrationDTO getUserDetails(@Context HttpServletResponse response) {


        String NEW_LINE_SEPARATOR = "\n";

        String FILE_HEADER = "name, gender, dob, fatherName, motherName, race, education, occupation, doorname, street, town, district, taluk, state, country, mobilePhone, email, aadhar, bloodGroup, pinCode,kulatheivam,kulatheivamLocation";


        RegistrationDTO dto = new RegistrationDTO();
        List<UserRegistration> registration = null;

        try {

            if (reportFolderLocation == null)
                reportFolderLocation = "/home/ec2-user/Samasys/Applications/apache-tomcat-8.0.33/appWorking";
            File f = new File(reportFolderLocation);

            File file = new File(f, UUID.randomUUID().toString());


            FileWriter writer = new FileWriter(file);
            //Write the CSV file header

            writer.append(FILE_HEADER.toString());

            //Add a new line separator after the header

            writer.append(NEW_LINE_SEPARATOR);

            registration = dbManager.getDetails();
            UserRegistration user;
            for (int i = 0; i < registration.size(); i++) {
                user = registration.get(i);


                writer.write(user.getName() + "," + user.getGender() + "," + user.getDob() + "," + user.getFatherName() + "," + user.getMotherName() + "," + user.getRace() + "," + user.getEducation() + "," + user.getOccupation() + "," + user.getDoorNumber() + "," + user.getStreet() + "," + user.getTown() + "," + user.getTaluk() + "," + user.getDistrict() + "," + user.getState() + "," + user.getCountry() + "," + user.getMobilePhone() + "," + user.getEmail() + "," + user.getAddar() + "," + user.getBloodGroup() + "," + user.getPinCode() + "," + user.getKulatheivam() + "," + user.getKulatheivamLocation() + System.getProperty("line.separator"));

            }

            writer.close();

            getDownload(response, file);


        } catch (Exception er) {
            dto.setError(true);
            dto.setErrorMessage(er.toString());
            er.printStackTrace();
        }
        return dto;
    }


    @Value("${reportFolder}")
    private String reportFolderLocation;

    private void getDownload(HttpServletResponse response, File file) throws IOException {
        String path = "";
        boolean bool = false;


        response.addHeader("Content-disposition", "attachment;filename=myfilename.csv");
        response.setContentType("text/plain");


        FileInputStream in = new FileInputStream(file);

        OutputStream out = response.getOutputStream();

        IOUtils.copy(in, out);

        bool = file.exists();

        path = file.getAbsolutePath();

        out.close();

        in.close();

        if (bool) {
            System.out.println(" " + file.getAbsoluteFile());
            System.out.println(path + "  " + bool);

            if (file.delete()) {
                System.out.println(file.getName() + " is deleted!");
            } else {
                file.deleteOnExit();
                System.err.println("file scheduled for deletion.");

            }

        }
    }
    @GET
    @Path("searchDetails")
    @Produces(MediaType.APPLICATION_JSON)
    public RegistrationDTO searchCensusPerson(@QueryParam("mobilePhone") String mobilePhone,@QueryParam("aadhar") String aadhar,@QueryParam("email") String email) {
        RegistrationDTO dto = new RegistrationDTO();
        List<UserRegistration> censusRegistrations = null;
        try {

             censusRegistrations = dbManager.searchDetail(mobilePhone,aadhar,email);


            dto.setResult(censusRegistrations);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }
    @POST
    @Path("searchFamilys")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO searchFamilyPerson(@FormParam("censusId")String censusId,@FormParam("existId")String existId,@FormParam("relationShip")String relationShip,@FormParam("mobilePhone")String mobilePhone){
        AdminDTO dto=new AdminDTO();

        try {

            int censusRegistrations;
            censusRegistrations = dbManager.searchRelation(Long.parseLong(censusId),Long.parseLong(existId),relationShip,mobilePhone);


            dto.setResult(censusRegistrations);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }
    @GET
    @Path("viewFamily")
    @Produces(MediaType.APPLICATION_JSON)
    public FamilyRegistrationDTO viewFamily(@QueryParam("censusId") String censusId) {
        FamilyRegistrationDTO dto = new FamilyRegistrationDTO();
        try {

            List matrimonialRegistrations = dbManager.viewFamilyPerson(Long.parseLong(censusId));


            dto.setResult(matrimonialRegistrations);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }
    @POST
    @Path("censusRegistration")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO censusRegistration(@FormParam("name") String name,
                                     @FormParam("gender") int gender,
                                     @FormParam("dob") String dob,
                                     @FormParam("fatherName") String fatherName,
                                     @FormParam("motherName") String motherName,
                                     @FormParam("race") String race,
                                     @FormParam("education") String education,
                                     @FormParam("occupation") String occupation,
                                     @FormParam("doorNumber") String doorname,
                                     @FormParam("street") String street,
                                     @FormParam("town") String town,
                                     @FormParam("district") String district,
                                     @FormParam("taluk") String taluk,
                                     @FormParam("state") String state,
                                     @FormParam("country") String country,
                                     @FormParam("childNumber") String mobilePhone,
                                     @FormParam("email") String email,
                                     @FormParam("aadhar") String aadhar,
                                     @FormParam("bloodGroup") String bloodGroup,
                                     @FormParam("pinCode") String pinCode,
                                     @FormParam("kulatheivam") String kulatheivam,
                                     @FormParam("kulatheivamLocation") String kulatheivamLocation,
                                     @FormParam("censusId") String censusId, @FormParam("relationShip")String relationShip,@FormParam("parentNumber")String parentNumber)

    {
        AdminDTO dto = new AdminDTO();

        try {


            Random random = new Random();
            int code = (1000 + random.nextInt(9000));
            System.out.println(code);
            int regist;
            int censusRegister;
                List userAadhar =dbManager.fetchAadharNumber(aadhar);

            if (userAadhar.size() > 0)
            {
                dto.setError(true);
                dto.setErrorMessage("The Aadhar Number Already Exists");
                return dto;
            }


                regist = dbManager.registerUser(name.toUpperCase(), gender, dob, fatherName.toUpperCase(), motherName.toUpperCase(), race.toUpperCase(), education.toUpperCase(),
                        occupation.toUpperCase(), doorname.toUpperCase(), street.toUpperCase(), town.toUpperCase(), district.toUpperCase(), taluk.toUpperCase(), state.toUpperCase(),
                        country.toUpperCase(), mobilePhone.toUpperCase(), email.toLowerCase(), aadhar.toUpperCase(), bloodGroup.toUpperCase(), pinCode.toUpperCase(), kulatheivam.toUpperCase(), kulatheivamLocation.toUpperCase(), code);

            try {
                String phoneNumber = dbManager.fetchCustomerCountryId1(country) + mobilePhone;

                String subject = "Thank you for registering with URAVUPPAALAM. Your pin number for http://www.uravuppaalam.com is :" + code + "." +
                        " You can use the PIN # to login and update your details anytime \n";
                Amazon.sendSMS(subject, phoneNumber);

                Amazon.sendEmail(email, "WELCOME TO URAVUPPAALAM", subject);

            }
            catch(Exception er ){
                System.out.println( er );
            }

                censusRegister = dbManager.searchFamilyPerson(Long.parseLong(censusId),mobilePhone,relationShip,parentNumber);


                dto.setResult(regist);
                dto.setResult(censusRegister);
                dto.setSuccessMessage("Successfully Registered. PIN "+code);


        } catch (Exception er)

        {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        return dto;
    }


}