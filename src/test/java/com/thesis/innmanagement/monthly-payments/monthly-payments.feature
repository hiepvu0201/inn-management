Feature: monthly-payments test

  Background:
    * url baseUrl

  Scenario: get all
    Given path 'api/v1/monthly-payments/'
    When method GET
    Then status 200

  Scenario: create
    And def monthlyPaymentInfo =
    """
    {
      "itemName": "first quarter",
      "cost": "10000",
      "branchId": 1
    }
    """
    Given path 'api/v1/monthly-payments/'
    And request monthlyPaymentInfo
    When method POST
    Then status 200
    And match $.itemName == "first quarter"

  Scenario: get by branch
    Given path 'api/v1/monthly-payments/search-by-branch/'
    And param branchLocation = "TP.Thu Duc"
    When method GET
    Then status 200