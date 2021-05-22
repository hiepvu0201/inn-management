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
      "userName": "user",
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
      "roomId": ,
    }
    """
    Given path 'api/v1/users/'
    And request userInfo
    When method POST
    Then status 200
    And match $.userName == "user"

  Scenario: check in
    Given path 'api/v1/users/checkin'
    And param userName = 'user'
    And param roomNo = 'E1-001'
    When method GET
    Then status 200

  Scenario: check out
    Given path 'api/v1/users/checkout'
    And param userName = 'user'
    When method GET
    Then status 200