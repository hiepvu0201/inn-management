Feature: reported-issues test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/reported-issues/'
    When method GET
    Then status 200

  Scenario: create
    And def notificationInfo =
    """
    {
      "title": "rent payment increased",
      "description": "",
      "status": ""
    }
    """
    Given path 'api/v1/reported-issues/'
    And request notificationInfo
    When method POST
    Then status 200
    And match response.title == "rent payment increased"