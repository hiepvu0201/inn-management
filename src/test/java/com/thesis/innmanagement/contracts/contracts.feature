Feature: contract test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/contracts/'
    When method GET
    Then status 200

  Scenario: create
    And def contractInfo =
    """
    {
      "details": "This is the details of the contract",
      "signDate": "2021-01-13T17:09:42.411",
      "endDate": "2021-05-13T17:09:42.411",
      "tenantId": 2,
      "ownerId": 1,
      "numberOfRooms": "10",
      "numberOfStage": "3",
      "voucher": "",
      "year": "2021"
    }
    """
    Given path 'api/v1/contracts/'
    And request contractInfo
    When method POST
    Then status 200
    And match $.details == "This is the details of the contract"

  Scenario: get all by owner name
    Given path 'api/v1/contracts/search-by-owner-name'
    And param ownerName = "user"
    When method GET
    Then status 200

  Scenario: get all by tenant name
    Given path 'api/v1/contracts/search-by-tenant-name/'
    And param tenantName = "user"
    When method GET
    Then status 200
