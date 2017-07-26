package com.primeforce.prodcast.businessobjects;

/**
 * Created by Thiru on 6/4/2017.
 */
public class MatrimonialSearch {
    private String name, dob, occupation, city, country, profilePictureFile;
    private int gender;
    private long matrimonial_id,census_id,fav_profile;
    private boolean liked;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProfilePictureFile() {
        return profilePictureFile;
    }

    public void setProfilePictureFile(String profilePictureFile) {
        this.profilePictureFile = profilePictureFile;
    }

    public long getMatrimonial_id() {
        return matrimonial_id;
    }

    public void setMatrimonial_id(long matrimonial_id) {
        this.matrimonial_id = matrimonial_id;
    }


    public boolean isLiked() {
        return liked;
    }

    public void setLiked(boolean liked) {
        this.liked = liked;
    }

    public long getCensus_id() {
        return census_id;
    }

    public void setCensus_id(long census_id) {
        this.census_id = census_id;
    }

    public long getFav_profile() {
        return fav_profile;
    }

    public void setFav_profile(long fav_profile) {
        this.fav_profile = fav_profile;
    }
}
