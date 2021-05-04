package com.thesis.innmanagement;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestRunner {

    @Test
    void testParallelRoles() {
        Results results = Runner.path("classpath:roles/roles.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelRules() {
        Results results = Runner.path("classpath:rules/rules.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
    @Test
    void testParallelBranches() {
        Results results = Runner.path("classpath:branches/branches.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelContracts() {
        Results results = Runner.path("classpath:contracts/contracts.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelElectricityWater() {
        Results results = Runner.path("classpath:electricity-water/electricity-water.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelFacilities() {
        Results results = Runner.path("classpath:facilities/facilities.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelMonthlyIncomes() {
        Results results = Runner.path("classpath:monthly-incomes/monthly-incomes.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelMonthlyPayments() {
        Results results = Runner.path("classpath:monthly-payments/monthly-payments.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelNotifications() {
        Results results = Runner.path("classpath:notifications/notifications.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelReportedIssues() {
        Results results = Runner.path("classpath:reported-issues/reported-issues.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelRooms() {
        Results results = Runner.path("classpath:rooms/rooms.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

    @Test
    void testParallelUsers() {
        Results results = Runner.path("classpath:users/users.feature").parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}
