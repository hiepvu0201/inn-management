Feature: facilities test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/facilities/'
    When method GET
    Then status 200

  Scenario: create
    And def facilityInfo =
    """
    {
      "name": "light",
           "quality": "new",
           "quantity": "100",
         }
    """
    Given path 'api/v1/facilities/'
    And request facilityInfo
    When method POST
    Then status 200
    And $.name == "light"