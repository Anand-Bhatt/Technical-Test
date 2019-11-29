package com.virgingames;

import com.virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        new LoginPage().homePageVerification();
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new LoginPage().clickOnLoginLink();
    }

    @And("^I enter invalid \"([^\"]*)\" into Username/email field$")
    public void iEnterInvalidIntoUsernameEmailField(String name) {
        new LoginPage().enterEmail(name);
    }

    @And("^I enter invalid \"([^\"]*)\" into password field$")
    public void iEnterInvalidIntoPasswordField(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should not login successfully with appropriate \"([^\"]*)\" message\\.$")
    public void iShouldNotLoginSuccessfullyWithAppropriateMessage(String error) {
        Assert.assertEquals(error, new LoginPage().outPutError());
    }
}
