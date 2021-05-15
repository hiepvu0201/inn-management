Feature: monthly-incomes test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/monthly-incomes/'
    When method GET
    Then status 200

  Scenario: create
    And def monthlyIncomeInfo =
    """
    {
      "itemName": "first quarter",
      "earn": "10000",
      "branchId": 1
    }
    """
    Given path 'api/v1/monthly-incomes/'
    And request monthlyIncomeInfo
    When method POST
    Then status 200
    And match response.itemName == "first quarter"