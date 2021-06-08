Feature: branches test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/branches/'
    When method GET
    Then status 200

  Scenario: create
    And def branchInfo =
    """
    {
      "location": "TP.HCM",
      "description": "Chi nhanh 1",
      "numberOfStages": "3",
      "numberOfRooms": "10",
      "facilityIds": [1],
      "userName": "user"
    }
    """
    Given path 'api/v1/branches/'
    And request branchInfo
    When method POST
    Then status 200
    And match $.location == "TP.HCM"
