package dk.subhive.subhivebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "dk.subhive.subhivebackend")
public class BootSubhive {

	public static void main(String[] args) {
		SpringApplication.run(BootSubhive.class, args);
		System.out.println("Subhive backend booted");
	}
}
