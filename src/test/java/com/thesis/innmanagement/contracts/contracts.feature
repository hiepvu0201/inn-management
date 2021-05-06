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
      "tenantIds": [1],
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
    And match response.details == "This is the details of the contract"