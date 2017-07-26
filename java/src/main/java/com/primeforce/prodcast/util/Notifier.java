package com.primeforce.prodcast.util;

import javax.mail.internet.InternetAddress;
import java.util.LinkedList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by sarathan732 on 9/5/2016.
 */
public class Notifier extends TimerTask {
    private static Timer notificationHelper = new Timer();

    private String smsPhoneNumber;
    private String subject;
    private String mailMessage;
    private String[] emailIds;

    public Notifier(String smsPhoneNumber, String subject, String mailMessage , String[] mailIds ){
        this.smsPhoneNumber = smsPhoneNumber;
        this.subject = subject;
        this.mailMessage = mailMessage;
        this.emailIds = mailIds;
    }
    public void run(){
        try {
            if(smsPhoneNumber!=null) {
                Amazon.sendSMS(subject, smsPhoneNumber);
            }
        }
        catch(Exception er){
            er.printStackTrace();
        }


    }
    public static void sendNotification( String smsPhoneNumber , String subject, String mailMessage, String[] mailIds ){
        Notifier notifier = new Notifier( smsPhoneNumber , subject,  mailMessage , mailIds );
        notificationHelper.schedule( notifier, 0 );
    }
}
