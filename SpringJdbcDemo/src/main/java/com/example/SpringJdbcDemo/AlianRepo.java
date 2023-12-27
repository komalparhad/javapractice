package com.example.SpringJdbcDemo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public class AlianRepo {
	@Autowired
	private JdbcTemplate template;

	public void save(Alien alien) {
		String sql = "insert into alien(id,name,tech) values(?,?,?)";
		int r = template.update(sql, alien.getId(), alien.getName(), alien.getTech());
		System.out.println("Added :" + r);

	}

	public List<Alien> findAll() {

		String sql = "select * from alien";
		RowMapper<Alien> mapper = new RowMapper<Alien>() {

			@Override
			public Alien mapRow(ResultSet rs, int rowNum) throws SQLException {
				Alien a = new Alien();
				a.setId(rs.getInt(1));
				a.setName(rs.getString(2));
				a.setTech(rs.getString(3));

				return a;
			}
		};
		List<Alien> aliens = template.query(sql, mapper);
		return aliens;
	}
}