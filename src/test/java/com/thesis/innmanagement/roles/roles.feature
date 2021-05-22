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
      "name": 0,
    }
    """
    Given path 'api/v1/roles/'
    And request roleInfo
    When method POST
    Then status 200
    And match $.name == "ROLE_USER"
