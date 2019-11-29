package com.virgingames.pages;

import com.virgingames.utility.Utils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utils {
    @FindBy(xpath = "//div[@class='logo-container']//a//img")
    WebElement _verifyHomePage;

    @FindBy(linkText = "Login")
    WebElement _loginLink;

    @FindBy(id = "field-username")
    WebElement _userNameField;

    @FindBy(id = "field-password")
    WebElement _passwordField;

    @FindBy(xpath = "//span[contains(text(),'Login')]")
    WebElement _loginButton;

    @FindBy(xpath = "//div[@class='output']")
    WebElement _outPutErrorMsg;




    public boolean homePageVerification() {
        verifyThatElementIsDisplayed(_verifyHomePage);
        return true;
    }
    public void clickOnLoginLink() {
        clickOnElement(_loginLink);
    }
    public void enterEmail(String name) {
        sendTextToElement(_userNameField, name);
    }

    public void clickOnLoginButton(){
        clickOnElement(_loginButton);
    }
    public void enterPassword(String password) {
        sendTextToElement(_passwordField, password);
    }
    public String outPutError() {
        return getTextFromElement(_outPutErrorMsg);
    }
}
