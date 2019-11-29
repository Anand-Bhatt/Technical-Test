package com.virgingames.bingotest;

import com.virgingames.testbase.TestBase;
import io.restassured.response.Response;
import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Title;
import org.junit.Test;
import org.junit.runner.RunWith;

import static io.restassured.RestAssured.given;

@RunWith(SerenityRunner.class)
public class BingoLoginPage extends TestBase {

@Title("'defaultGameFrequency' should always be '300000'")
    @Test
    public void defaultGameFrequency() {
        Response info = given()
                .when()
                .get("/GetBingoLobbyFeed.do");

        info.then().log().all().statusCode(200);
    }


}