package com.primeforce.prodcast.dto;

import com.primeforce.prodcast.businessobjects.MatrimonialRegistration;
import com.primeforce.prodcast.businessobjects.UserRegistration;

import java.util.List;

/**
 * Created by Hai on 11/2/2016.
 */
public class CustomerLoginDTO<T> extends ProdcastDTO {
      private boolean verified;
      private T result;
      private List<UserRegistration> registrations;
      private List<MatrimonialRegistration> matrimonialRegistrations;


    public T getResult(){
            return result;
        }

        public void setResult(T result){
            this.result = result;
        }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

       public List<MatrimonialRegistration> getMatrimonialDetail() {
        return matrimonialRegistrations;
    }

    public void setMatrimonialDetail(List<MatrimonialRegistration> matrimonialRegistrations) {
        this.matrimonialRegistrations = matrimonialRegistrations;
    }

}

