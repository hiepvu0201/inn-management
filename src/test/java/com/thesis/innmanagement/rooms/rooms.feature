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
      "facilityIds": [1],
      "branchId": 1
    }
    """
    Given path 'api/v1/rooms/'
    And request roomInfo
    When method POST
    Then status 200
    And match $.roomNo == "E1-001"

  Scenario: get room by branch location
    Given path 'api/v1/rooms/search-by-branch-location/'
    And param branchLocation = "TP.Thu Duc"
    When method GET
    Then status 200
