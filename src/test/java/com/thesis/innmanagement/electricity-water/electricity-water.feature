Feature: electricity test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/electricity-water/'
    When method GET
    Then status 200

  Scenario: create
    And def electricityWaterInfo =
    """
    {
      "roomId": "1",
      "numElectricOld": "100",
      "numElectricNew": "120",
      "numElectricConsump": "100",
      "numWaterOld": "95",
      "numWaterNew": "140",
      "numWaterConsump": "25",
      "isChecked": "true",
      "month": "1"
    }
    """
    Given path 'api/v1/electricity-water/'
    And request electricityWaterInfo
    When method POST
    Then status 200
    And match $.numElectricOld == 100