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
      "signDate": "",
      "tenantIds": [2],
      "ownerIds": [1],
      "numberOfRooms": "",
      "numberOfStage": "",
      "voucher": "",
    }
    """
    Given path 'api/v1/contracts/'
    And request contractInfo
    When method POST
    Then status 200
    And match $.details == "This is the details of the contract"

  Scenario: get all by owner name
    Given path 'api/v1/contracts/search-by-owner-name'
    And param ownername = "default user"
    When method GET
    Then status 200

  Scenario: get all by tenant name
    Given path 'api/v1/contracts/search-by-tenant-name/'
    And param tenantname = "default user"
    When method GET
    Then status 200
