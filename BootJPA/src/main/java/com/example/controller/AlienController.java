package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.dao.AlienRepo;
import com.example.model.Alien;

@RestController
public class AlienController {

	@Autowired
	AlienRepo repo;

	@RequestMapping("home")
	public String home() {
		return "home.jsp";
	}

	@DeleteMapping("/alien/{aid}")
	public String deleteAlien(@PathVariable int aid) {
		@SuppressWarnings("deprecation")
		Alien a = repo.getOne(aid);
		repo.delete(a);
		return "deleted record : " + aid;
	}

	@PostMapping("/alien")
	public Alien addAlien(@RequestBody Alien alien) {
		repo.save(alien);
		return alien;

	}

	// MVC REST Example

	@GetMapping(path = "/aliens")
	public List<Alien> getAliens() {
		return repo.findAll();
	}
	
	@PutMapping(path = "/alien",consumes = {"application/json"})
	public Alien saveOrUpdateAlien(@RequestBody Alien alien)
	{
		repo.save(alien);
		return alien;
	}

//	@RequestMapping("getAlien")
//	public ModelAndView getAlien(@RequestParam int aid) {
//		ModelAndView mv = new ModelAndView("showAlien.jsp");
//		Alien alien = repo.findById(aid).orElse(new Alien());
//		
//		System.out.println(repo.findByTech("Java"));
//		System.out.println(repo.findByAidGreaterThan(101));
//		System.out.println(repo.findByTechSorted("Java"));
//		mv.addObject(alien);
//		return mv;
//	}

	@RequestMapping("/alien/{aid}")
	@ResponseBody
	public Optional<Alien> getAlien(@PathVariable int aid) {
		Optional<Alien> res = repo.findById(aid);
		if (res.isPresent()) {
			return res;
		} else {
			return Optional.ofNullable(new Alien());
		}

	}
}
