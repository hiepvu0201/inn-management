Feature: users test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/users/'
    When method GET
    Then status 200

  Scenario: create
    And def userInfo =
    """
    {
      "username": "default user",
      "passwordHash": "",
      "email": "default@gmail.com",
      "fullName": "default user name",
      "idNo": "123456789",
      "sex": "male",
      "job": "IT",
      "address": "unknown",
      "phoneNo": "0123456789",
      "checkinDate": "",
      "checkoutDate": "",
      "downPayment": "",
      "roleIds": [1],
      "reportedIssueIds": [],
      "branchId": [1]
    }
    """
    Given path 'api/v1/users/'
    And request userInfo
    When method POST
    Then status 200
    And match response.username == "default user"