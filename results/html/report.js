$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/qa/features1/RediffHomePage1.feature");
formatter.feature({
  "name": "Rediff Login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter email and password on rediffPage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on RediffPage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter EmailID \u0027\u003cid\u003e\u0027 \u0026 Password \u0027\u003cpwd\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "pwd"
      ]
    },
    {
      "cells": [
        "swapna04@gmail.com",
        "abc@123"
      ]
    },
    {
      "cells": [
        "sai@gmail.com",
        "admin@123"
      ]
    },
    {
      "cells": [
        "SaiGuruPriyaReddy@gmail.com",
        "emp@123"
      ]
    },
    {
      "cells": [
        "Padmavathi@gmail.com",
        "paddu@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter email and password on rediffPage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on RediffPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.I_am_on_RediffPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter EmailID \u0027swapna04@gmail.com\u0027 \u0026 Password \u0027abc@123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.i_enter_EmailID_sonal04_gmail_com_Password_abc(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter email and password on rediffPage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on RediffPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.I_am_on_RediffPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter EmailID \u0027sai@gmail.com\u0027 \u0026 Password \u0027admin@123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.i_enter_EmailID_sonal04_gmail_com_Password_abc(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter email and password on rediffPage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on RediffPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.I_am_on_RediffPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter EmailID \u0027SaiGuruPriyaReddy@gmail.com\u0027 \u0026 Password \u0027emp@123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.i_enter_EmailID_sonal04_gmail_com_Password_abc(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter email and password on rediffPage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on RediffPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.I_am_on_RediffPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter EmailID \u0027Padmavathi@gmail.com\u0027 \u0026 Password \u0027paddu@123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.i_enter_EmailID_sonal04_gmail_com_Password_abc(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.steps1.RediffStepDefinition1.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
});