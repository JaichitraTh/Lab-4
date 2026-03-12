# Test Plan for COBOL Account Management System

This document outlines test cases to validate the business logic of the current COBOL application. Stakeholders can use it to verify expected behavior before migrating to a Node.js implementation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|-----------------------|----------------|------------|-----------------|----------------|--------------------|----------|
| TC-001 | View current balance | Application compiled and running; starting balance is 1000.00 | 1. Start program
2. Enter choice 1 (View Balance) | Current balance displayed as 1000.00 |  |  |  |
| TC-002 | Credit account with valid amount | Application running, starting balance 1000.00 | 1. Start program
2. Enter choice 2 (Credit)
3. Enter amount 250.00 | System reads 1000.00, adds 250.00, writes new balance 1250.00, displays updated balance |  |  |  |
| TC-003 | Debit account with sufficient funds | Application running, balance at least 500.00 | 1. Start program
2. Enter choice 3 (Debit)
3. Enter amount 500.00 | System reads current balance, subtracts 500.00, writes new balance, displays updated balance |  |  |  |
| TC-004 | Debit account with insufficient funds | Application running, balance less than debit amount | 1. Start program
2. Enter choice 3 (Debit)
3. Enter amount greater than current balance | System reads balance, determines insufficient funds, displays "Insufficient funds for this debit." without changing balance |  |  |  |
| TC-005 | Invalid menu choice | Application running | 1. Start program
2. Enter choice 9 (or other invalid) | System displays "Invalid choice, please select 1-4." and returns to menu without action |  |  |  |
| TC-006 | Exit program | Application running | 1. Start program
2. Enter choice 4 | System sets CONTINUE-FLAG to NO, exits loop, displays goodbye message, and terminates |  |  |  |

> Note: Actual Result and Status columns should be filled during execution by the testing team. Comments can capture environment, edge cases, or deviations observed.