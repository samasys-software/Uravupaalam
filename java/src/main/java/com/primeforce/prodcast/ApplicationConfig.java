package com.primeforce.prodcast;

import javax.inject.Named;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

@Configuration

public class ApplicationConfig {

	@Named
	static class JerseyConfig extends ResourceConfig {
		public JerseyConfig() {
			this.packages("com.primeforce.prodcast");
			this.packages("com.primeforce.prodcast").register(MultiPartFeature.class);
		}
	}

}