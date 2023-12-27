package com.example.SpringJdbcDemo;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringJdbcDemoApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SpringJdbcDemoApplication.class, args);
		Alien a = context.getBean(Alien.class);
		a.setId(101);
		a.setName("komal");
		a.setTech("Java");

		AlianRepo repo = context.getBean(AlianRepo.class);
		repo.save(a);
		
		
		List<Alien> list = repo.findAll();
		list.forEach(alien ->{
			System.out.println("Id: "+ alien.getId());
			System.out.print(" Name: "+ alien.getName());
			System.out.print(" Tech: "+ alien.getTech());
		});

	}

}
