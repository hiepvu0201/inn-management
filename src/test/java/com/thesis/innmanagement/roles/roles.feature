Feature: roles test

  Background:
    * url baseUrl

    Scenario: get all
      Given path 'api/v1/roles/'
      When method GET
      Then status 200

  Scenario: create
    And def roleInfo =
    """
    {
      "name": "client",
    }
    """
    Given path 'api/v1/roles/'
    And request roleInfo
    When method POST
    Then status 200
    And match response.name == "client"
