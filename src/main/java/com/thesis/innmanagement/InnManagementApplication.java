package com.thesis.innmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
//@EnableConfigurationProperties({
//        FileStorageProperties.class
//})
public class InnManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(InnManagementApplication.class, args);
    }

}
