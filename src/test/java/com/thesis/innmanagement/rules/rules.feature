Feature: rules test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/rules/'
    When method GET
    Then status 200

  Scenario: create
    And def ruleInfo =
    """
    {
      "name": "Door closing time",
      "description": "Closing time is no later than 10 P.M"
    }
    """
    Given path 'api/v1/rules/'
    And request ruleInfo
    When method POST
    Then status 200
    And $.name == "Door closing time"
