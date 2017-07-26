package com.primeforce.prodcast;



import javax.inject.Named;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Path;


import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;
import com.primeforce.prodcast.businessobjects.MatrimonialSearch;
import com.primeforce.prodcast.dao.DbManager;
import com.primeforce.prodcast.dao.SearchResult;
import com.primeforce.prodcast.dto.*;


import org.springframework.beans.factory.annotation.Autowired;


import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.*;
import java.util.Calendar;
import java.util.List;

import com.primeforce.prodcast.dto.AdminDTO;


import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.factory.annotation.Value;


import javax.servlet.ServletException;



import javax.ws.rs.core.Context;

import java.util.UUID;


/**
 * Created by Thiru on 20/3/2017.
 */
@Named
@Path("/matrimony/")

public class MatrimonialRest {
    private final DbManager dbManager;
    @Value("${baseDir}")
    private String baseDir;
    @Autowired
    public MatrimonialRest(DbManager manager)

    {
        dbManager = manager;
    }


    @POST
    @Path("saveDetails")
    @Consumes({MediaType.MULTIPART_FORM_DATA, MediaType.APPLICATION_JSON})
    @Produces(MediaType.APPLICATION_JSON)

    public AdminDTO<String> matrimonialRegistration(@FormDataParam("name") String name,
                                                    @FormDataParam("gender")int gender,
                                                    @FormDataParam("race") String race,
                                                    @FormDataParam("color") String color,
                                                    @FormDataParam("height") int height,
                                                    @FormDataParam("education") String education,
                                                    @FormDataParam("occupation") String occupation,
                                                    @FormDataParam("monthlySalary") String monthlySalary,
                                                    @FormDataParam("dob") String dob,
                                                    @FormDataParam("dobTP") String dobTP,
                                                    @FormDataParam("balanceDirection") String balanceDirection,
                                                    @FormDataParam("year") int year,
                                                    @FormDataParam("month") String month,
                                                    @FormDataParam("date") int date,
                                                    @FormDataParam("star") String star,
                                                    @FormDataParam("padam") String padam,
                                                    @FormDataParam("fatherName") String fatherName,
                                                    @FormDataParam("motherName") String motherName,
                                                    @FormDataParam("fatherOccupation") String fatherOccupation,
                                                    @FormDataParam("motherOccupation") String motherOccupation,
                                                    @FormDataParam("fatherCaste") String fatherCaste,
                                                    @FormDataParam("motherCaste") String motherCaste,
                                                    @FormDataParam("assetsDetails") String assetsDetails,
                                                    @FormDataParam("siblings") String siblings,
                                                    @FormDataParam("marriedPerson") String marriedPerson,
                                                    @FormDataParam("firstMarriage") String firstMarriage,
                                                    @FormDataParam("details") String details,
                                                    @FormDataParam("physicallyChallenged") String physicallyChallenged,
                                                    @FormDataParam("physicalDetail") String physicalDetail,
                                                    @FormDataParam("address") String address,
                                                    @FormDataParam("city") String city,
                                                    @FormDataParam("country") String country,
                                                    @FormDataParam("phoneNumber") String phoneNumber,
                                                    @FormDataParam("proposalDetails") String proposalDetails,
                                                    @FormDataParam("profilePictureFile") InputStream profilePictureFileInputStream,
                                                    @FormDataParam("profilePictureFile") FormDataContentDisposition profilePictureFileMetaData,
                                                    @FormDataParam("additionalPictureFile") InputStream additionalPictureFileInputStream,
                                                    @FormDataParam("additionalPictureFile") FormDataContentDisposition additionalPictureFileMetaData ,
                                                    @FormDataParam("astroChartFile") InputStream astroChartFileInputStream,
                                                    @FormDataParam("astroChartFile") FormDataContentDisposition astroChartFileMetaData,
                                                    @FormDataParam("matrimonialId") String matrimonialId,
                                                    @FormDataParam("censusId") String censusId)throws IOException,ServletException



    {

        MatrimonialRegistration existingRegistration=null;

        if(matrimonialId!=null)
        {

            existingRegistration = dbManager.martimonialDisplay(Long.parseLong(matrimonialId)).get(0);

        }
        if( baseDir == null )
         baseDir ="/home/ec2-user/Samasys/Applications/apache-tomcat-8.0.33/appWorking/upaalamimages/";

        String fileName = UUID.randomUUID().toString();


        if(profilePictureFileMetaData!=null && profilePictureFileMetaData.getFileName() != null) {

                String uploadedFileName = profilePictureFileMetaData.getFileName();
                int indexOfDot = uploadedFileName.lastIndexOf(".");
                String extension = uploadedFileName.substring(indexOfDot);
                fileName = fileName + extension;
                java.io.File file = new java.io.File(baseDir, fileName);
                FileOutputStream fos = new FileOutputStream(file);
                IOUtils.copy(profilePictureFileInputStream, fos);
                fos.flush();
                fos.close();
                System.out.println("Uploading to File " + fileName);
            }

        else
        {
            if(existingRegistration!=null)
            {
                fileName=existingRegistration.getProfilePictureFile();
            }
        }
        String fileName1 = UUID.randomUUID().toString();

       if(additionalPictureFileMetaData!=null && additionalPictureFileMetaData.getFileName() != null) {


               String uploadedAdditionalPicture = additionalPictureFileMetaData.getFileName();
               int indexOfDot1 = uploadedAdditionalPicture.lastIndexOf(".");
               String extension1 = uploadedAdditionalPicture.substring(indexOfDot1);
               fileName1 = fileName1 + extension1;
               java.io.File file1 = new java.io.File(baseDir, fileName1);
               FileOutputStream fos1 = new FileOutputStream(file1);
               IOUtils.copy(additionalPictureFileInputStream, fos1);
               fos1.flush();
               fos1.close();
               System.out.println("Uploading to File " + fileName1);
           }

       else
       {
           if(existingRegistration!=null)
           {
               fileName1=existingRegistration.getAdditionalPictureFile();
           }
       }

        String fileName2 = UUID.randomUUID().toString();

      if(astroChartFileMetaData!=null && astroChartFileMetaData.getFileName()!=null)
      {


              String uploadedAstroChartFile = astroChartFileMetaData.getFileName();
              int indexOfDot2 = uploadedAstroChartFile.lastIndexOf(".");
              String extension2 = uploadedAstroChartFile.substring(indexOfDot2);
              fileName2 = fileName2 + extension2;
              java.io.File file2 = new java.io.File(baseDir, fileName2);
              FileOutputStream fos2 = new FileOutputStream(file2);
              IOUtils.copy(astroChartFileInputStream, fos2);
              fos2.flush();
              fos2.close();
              System.out.println("Uploading to File " + fileName2);
          }

       else
      {
          if (existingRegistration!=null)
          {
              fileName2=existingRegistration.getAstroChartFile();
          }

      }

        AdminDTO<String> dto = new AdminDTO<String>();


        try {


            int matrimonialreg;

                if (existingRegistration== null)

                {

                    matrimonialreg = dbManager.matrimonialRegister(name.toUpperCase(), gender, race.toUpperCase(), color.toUpperCase(), height, education.toUpperCase(), occupation.toUpperCase(), monthlySalary, dob, dobTP.toUpperCase(), balanceDirection.toUpperCase(), year, month, date, star, padam, fatherName.toUpperCase(), motherName.toUpperCase(), fatherOccupation.toUpperCase(), motherOccupation.toUpperCase(), fatherCaste.toUpperCase(), motherCaste.toUpperCase(), assetsDetails.toUpperCase(), siblings, marriedPerson, firstMarriage, details.toUpperCase(), physicallyChallenged, physicalDetail.toUpperCase(), address.toUpperCase(), city.toUpperCase(), country.toUpperCase(), phoneNumber, proposalDetails.toUpperCase(), fileName, fileName1, fileName2, Long.parseLong(censusId));
                }
                else
                    {

                    matrimonialreg = dbManager.updatematrimony(name.toUpperCase(), gender, race.toUpperCase(), color.toUpperCase(), height, education.toUpperCase(), occupation.toUpperCase(), monthlySalary, dob, dobTP.toUpperCase(), balanceDirection.toUpperCase(), year, month, date, star, padam, fatherName.toUpperCase(), motherName.toUpperCase(), fatherOccupation.toUpperCase(), motherOccupation.toUpperCase(), fatherCaste.toUpperCase(), motherCaste.toUpperCase(), assetsDetails.toUpperCase(), siblings, marriedPerson, firstMarriage, details.toUpperCase(), physicallyChallenged, physicalDetail.toUpperCase(), address.toUpperCase(), city.toUpperCase(), country.toUpperCase(), phoneNumber, proposalDetails.toUpperCase(),fileName,fileName1,fileName2, Long.parseLong(matrimonialId));

                }


            if (matrimonialreg == 0)
            {
                dto.setError(true);
            }
            else
            {
                dto.setResult(String.valueOf( matrimonialreg));

            }
        }
        catch(Exception er)

        {
            er.printStackTrace();

            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        System.out.println("Before Returning DTO for Matrimonial Registration");
        return dto;
    }
    @GET
    @Path("getImage/{imageId}")
    @Produces("image/*")
    public void getImage(@PathParam(value = "imageId") String imageId,@Context HttpServletResponse response)throws IOException
    {
        baseDir ="/home/ec2-user/Samasys/Applications/apache-tomcat-8.0.33/appWorking/upaalamimages/";

        File file = new File(baseDir,imageId);




        getDownload(response,file);




    }
    private void getDownload(HttpServletResponse response, File file) throws IOException {
        String path = "";
        boolean bool = false;


        response.addHeader("Content-disposition", "attachment;filename=" + file.getName());
        response.setContentType("image/" + file.getName().substring(file.getName().lastIndexOf(".") + 1));


        FileInputStream in = new FileInputStream(file);

        OutputStream out = response.getOutputStream();

        IOUtils.copy(in, out);


        out.close();

        in.close();

    }
    @GET
    @Path("viewDetails")
    @Produces(MediaType.APPLICATION_JSON)
    public MatrimonialDTO viewDetails(@QueryParam("censusId") String censusId) {
        MatrimonialDTO dto = new MatrimonialDTO();
        try {

            List matrimonialRegistrations = dbManager.martimonialView(Long.parseLong(censusId));


            dto.setResult(matrimonialRegistrations);
        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

       @POST
    @Path("matrimonialStatus")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO changeStatus(@FormParam("matrimonialId") String matrimonialId) {
        AdminDTO dto = new AdminDTO();

        try {
            int delete;
            delete = dbManager.deleteMatrimonial(Long.parseLong(matrimonialId));
            if (delete != 1)

            {
                dto.setError(true);
                dto.setErrorMessage("Unable to delete");

            }

        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }


    @GET
    @Path("matrimonialDetails")
    @Produces(MediaType.APPLICATION_JSON)

    public SearchResultDTO getPag( @QueryParam("gender") int gender,@QueryParam("minAge") int minDate,
                                   @QueryParam("maxAge") int maxDate,@QueryParam("pageNo") int pageNo) {

        SearchResultDTO dto = new SearchResultDTO();


        try {
            Calendar now = Calendar.getInstance();
            System.out.println("Current date : " + (now.get(Calendar.MONTH) + 1) + "-"
                    + now.get(Calendar.DATE) + "-" + now.get(Calendar.YEAR));

            now = Calendar.getInstance();
            now.add(Calendar.YEAR, -maxDate);
            System.out.println("date before years : " + now.get(Calendar.YEAR) + "-" + (now.get(Calendar.MONTH) + 1) + "-" + now.get(Calendar.DATE));
            String startAge = now.get(Calendar.YEAR) + "-" + (now.get(Calendar.MONTH) + 1) + "-" + now.get(Calendar.DATE);

            Calendar now1 = Calendar.getInstance();
            System.out.println("Current date : " + (now1.get(Calendar.MONTH) + 1) + "-"
                    + now1.get(Calendar.DATE) + "-" + now1.get(Calendar.YEAR));

            now1.add(Calendar.YEAR, -minDate);
            System.out.println("date after years : " + now1.get(Calendar.YEAR) + "-" + (now1.get(Calendar.MONTH) + 1) + "-" + now1.get(Calendar.DATE));
            String endAge = now1.get(Calendar.YEAR) + "-" + (now1.get(Calendar.MONTH) + 1) + "-" + now1.get(Calendar.DATE);


            int recordsPerPage = 20;

            if (pageNo <= 0)
            {
                pageNo = 1;
            }

            int pageNumber = 0;
            SearchResult search = dbManager.matrimonialSearch(gender, startAge, endAge, recordsPerPage, pageNo);
            int totalRecords = search.getTotalRecords();

            dto.setResult( search.getMatrimonialSearchList() );
            pageNumber = totalRecords / 20;


            dto.setTotalRecords(totalRecords);
            if (totalRecords % 20 == 0)
            {
                dto.setPageNumber(pageNumber);
            }
            else
            {
                dto.setPageNumber(pageNumber + 1);
            }
        }


        catch (Exception er)
        {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());

        }
        return dto;
    }


    @GET
    @Path("displayDetails")
    @Produces(MediaType.APPLICATION_JSON)
    public MatrimonialDetailDTO displayDetails(@QueryParam("matrimonialId") String matrimonialId) {
        MatrimonialDetailDTO dto = new MatrimonialDetailDTO();
        List<MatrimonialRegistration> matrimonial = null;

        try {

            matrimonial = dbManager.martimonialDisplay(Long.parseLong(matrimonialId));

            dto.setResult(matrimonial);

        } catch (Exception er)
        {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }
    @POST
    @Path("storeProfile")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO storeProfile(@FormParam("matrimonialId") String matrimonialId,@FormParam("censusId") String censusId) {
        AdminDTO dto = new AdminDTO();
        try {

            List storeProfile=dbManager.fetchProfile(Long.parseLong(matrimonialId),Long.parseLong(censusId));
            if(storeProfile.size()>0)
            {
                dto.setError(true);
                dto.setErrorMessage("You Are Liked This Profile");
                return dto;
            }

            int matrimonial;


            matrimonial = dbManager.storeProfile(Long.parseLong(matrimonialId), Long.parseLong(censusId));

                if(matrimonial==0)
                {
                  dto.setError(true);
                }
                else
                    {
                    dto.setResult(matrimonial);
                }


        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }

    @GET
    @Path("likeProfile")
    @Produces(MediaType.APPLICATION_JSON)
    public MatrimonialProfileDTO likeProfile(@QueryParam("censusId") String censusId) {
        MatrimonialProfileDTO dto = new MatrimonialProfileDTO();
        List<MatrimonialSearch> matrimonial = null;
        try
        {
            matrimonial = dbManager.getProfile(Long.parseLong(censusId));


            dto.setResult(matrimonial);
        }

        catch(Exception er)
        {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }
    @POST
    @Path("profileStatus")
    @Produces(MediaType.APPLICATION_JSON)
    public AdminDTO unlikeProfile(@FormParam("matrimonialId") String matrimonialId) {
        AdminDTO dto = new AdminDTO();

        try {
            int unlike;
            unlike = dbManager.deleteProfile(Long.parseLong(matrimonialId));
            dto.setResult(unlike);

        } catch (Exception er) {
            er.printStackTrace();
            dto.setError(true);
            dto.setErrorMessage(er.toString());
        }
        return dto;
    }


}

