//go for this if it parameterization ie sending multiple values

package com.qa.runner1;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
//where is feature files and where are step definition files
@CucumberOptions(
		features= {"D:\\Users\\Swapna\\eclipse-workspace2020\\11NovBDDCucumberFramework\\src\\test\\java\\com\\qa\\features1"},
		
		glue= {"com.qa.steps1"} ,
				
				 plugin = {"pretty",
						   "html:results/html",
						    "json:results/json/results.json",
						    "junit:results/junit/cucumber.xml"}
				 
				)


//v can use full path in glue like below
/*@CucumberOptions(
features= {"D:\\Users\\Swapna\\eclipse-workspace2020\\10NovBDDCucumberEdureka1\\src\\test\\java\\com\\qa\\features"},
glue= {"D:\Users\Swapna\eclipse-workspace2020\10NovBDDCucumberEdureka1\src\test\java\com\qa\steps"}
) */


public class TestRunner1 {

}
