package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = {"com.dao"})//扫描的包是com.dao,自顶向下MVC：controller->service->dao
public class SpringbootSchemaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootSchemaApplication.class, args);
	}

}
