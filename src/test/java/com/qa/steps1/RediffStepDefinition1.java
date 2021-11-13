//go for this if it parameterization ie sending multiple values 

package com.qa.steps1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class RediffStepDefinition1 {
	
	WebDriver driver;
	
	@Given("I am on ebayHomepage")
	public void i_am_on_ebayHomepage() {
	System.out.println("HomePage") ;   
	}

	 
	 @Given("I am on RediffPage")
	 public void I_am_on_RediffPage()
	 {
	  driver = new ChromeDriver();
	  driver.manage().window().maximize();
	  driver.get("https://mypage.rediff.com/login/dologin");
	  
	 }
	 
	 @When("I enter EmailID {string} & Password {string}")
	 public void i_enter_EmailID_sonal04_gmail_com_Password_abc(String id, String pwd) throws InterruptedException {
	  
	  driver.findElement(By.id("txtlogin")).sendKeys(id);
	  driver.findElement(By.id("pass_box")).sendKeys(pwd);
	 Thread.sleep(2000);
	     
	 }


	 @When("click on Login")
	 public void click_on_Login() throws InterruptedException {
	   
	  driver.findElement(By.xpath("//*[@id=\"pass_div\"]/input[3]")).click();
	  Thread.sleep(2000);
	  driver.close();
	  
	 }


}
