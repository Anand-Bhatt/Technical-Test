$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Error message for Login page.",
  "description": "As a user, I want to verify that the error message appears and is displayed correctly with invalid credentials.",
  "id": "verify-error-message-for-login-page.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should receive appropriate error message with invalid credentials.",
  "description": "",
  "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid \"\u003cname\u003e\" into Username/email field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid \"\u003cpassword\u003e\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should not login successfully with appropriate \"\u003cerror\u003e\" message.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "error"
      ],
      "line": 12,
      "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;1"
    },
    {
      "cells": [
        "test05",
        "testpassword",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 13,
      "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;2"
    },
    {
      "cells": [
        "",
        "",
        "Both your username and password are required"
      ],
      "line": 14,
      "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;3"
    },
    {
      "cells": [
        "ab",
        "testpassword",
        "Your username/email must be 4 to 60 characters long"
      ],
      "line": 15,
      "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19262753400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should receive appropriate error message with invalid credentials.",
  "description": "",
  "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid \"test05\" into Username/email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid \"testpassword\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should not login successfully with appropriate \"Please try again, your username/email or password has not been recognised\" message.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 1316191400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1750712800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test05",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoUsernameEmailField(String)"
});
formatter.result({
  "duration": 224348500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoPasswordField(String)"
});
formatter.result({
  "duration": 269953300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 159167800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.iShouldNotLoginSuccessfullyWithAppropriateMessage(String)"
});
formatter.result({
  "duration": 220426600,
  "status": "passed"
});
formatter.after({
  "duration": 1033654900,
  "status": "passed"
});
formatter.before({
  "duration": 11542291200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should receive appropriate error message with invalid credentials.",
  "description": "",
  "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid \"\" into Username/email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid \"\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should not login successfully with appropriate \"Both your username and password are required\" message.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 175770600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2271021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoUsernameEmailField(String)"
});
formatter.result({
  "duration": 93222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoPasswordField(String)"
});
formatter.result({
  "duration": 104694800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 147843000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.iShouldNotLoginSuccessfullyWithAppropriateMessage(String)"
});
formatter.result({
  "duration": 159873200,
  "status": "passed"
});
formatter.after({
  "duration": 988528200,
  "status": "passed"
});
formatter.before({
  "duration": 12173937900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should receive appropriate error message with invalid credentials.",
  "description": "",
  "id": "verify-error-message-for-login-page.;user-should-receive-appropriate-error-message-with-invalid-credentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter invalid \"ab\" into Username/email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter invalid \"testpassword\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should not login successfully with appropriate \"Your username/email must be 4 to 60 characters long\" message.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 80544700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2254681200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoUsernameEmailField(String)"
});
formatter.result({
  "duration": 120879600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iEnterInvalidIntoPasswordField(String)"
});
formatter.result({
  "duration": 260038600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 134070800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username/email must be 4 to 60 characters long",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.iShouldNotLoginSuccessfullyWithAppropriateMessage(String)"
});
formatter.result({
  "duration": 118516600,
  "status": "passed"
});
formatter.after({
  "duration": 886278400,
  "status": "passed"
});
});