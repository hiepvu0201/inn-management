Feature: rooms test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/rooms/'
    When method GET
    Then status 200

  Scenario: create
    And def roomInfo =
    """
    {
      "roomNo": "E1-001",
      "position": "TP.Thu Duc",
      "userIds": [1],
      "facilityIds": [1],
      "electricityWaterIds": [1]
    }
    """
    Given path 'api/v1/rooms/'
    And request roomInfo
    When method POST
    Then status 200
    And match response.roomNo == "E1-001"

  Scenario: find all by user name
    Given path 'api/v1/rooms/search-by-username/'
    And param username = "default user"
    When method GET
    Then status 200