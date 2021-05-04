Feature: notifications test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/notifications/'
    When method GET
    Then status 200

  Scenario: create
    And def notificationInfo =
    """
    {
      "name": "first quarter",
      "description": "10000"
    }
    """
    Given path 'api/v1/notifications/'
    And request notificationInfo
    When method POST
    Then status 200
    And match response.name == "first quarter"