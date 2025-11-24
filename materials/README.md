# Simulation of JavaScript Program Behavior

## Objective

You are tasked with simulating the behavior of a given JavaScript program without actually running the code. The goal is to trace how data moves through the functions, how values change, and what the final output displayed to the user would be. This simulation helps in understanding logic flow, debugging, and predicting program results.

---

## Problem 1: Store Purchase Calculation

### Functions

- **AddQuantity(quantity)**: Utility Function that adds 1 more item to the current quantity.
- **GetPrice(quantity, itemPrice)**: Utility Function that calculates the price based on the given quantity.
- **CalculateTotal(quantityPrice, total)**: Utility Function that computes the updated total by adding the current quantityPrice to the running total.
- **DisplayResult(total)**: Void display function that shows the final total.

### Initial Variables
- **itemPrice = 10**: The price of one item (in dollars).
- **quantity = 0**: The initial quantity of items purchased (starts at 0).
- **quantityPrice = 0**: The price based on the current quantity (starts at 0).
- **total = 0**: The running total price of the purchase (starts at 0).

### Problem Description

A small store wants you to calculate the final total for a customer’s purchase. The store only sells one item. The system uses a series of utility functions to calculate the total cost.

1. The program starts with the initial values of the variables: `itemPrice = 10`, `quantity = 0`, `quantityPrice = 0`, and `total = 0`.
2. The system uses the utility functions to:
   - **Adjust the quantity** using the `AddQuantity(quantity)` function.
   - **Calculate the price** for the adjusted quantity using `GetPrice(quantity, itemPrice)`.
   - **Update the total** using `CalculateTotal(quantityPrice, total)`.
3. Finally, the `DisplayResult(total)` function displays the total cost to the user.

### Simulations

#### Scenario 1
1. A customer goes to the shop, adds **1 item**, and sees the total price.
2. The customer then adds **2 more items** and sees the updated total price.

#### Scenario 2
1. A customer goes to the shop, adds **5 items**, and sees the total price.
2. The customer then adds **3 more items**, sees the updated total, and finally adds **1 more item** to see the final total price.

#### Scenario 3
1. A customer goes to the shop, adds **1 item**, sees the total price, adds **another item**, sees the updated total, and repeats this process for **5 times**.

---

### Extra Challenge

- What would happen if the customer is allowed to **reset the quantity back to 0**? How would the simulation change if the scenario is like this:
  
  **Scenario**:
  1. A customer goes to the shop, adds **5 items**, and sees the total price.
  2. The customer decides to **reset** the quantity back to 0, then adds **3 items**, and sees the new total price.

---

## Problem 2: Fitness Tracking System

### Functions

- **ChooseExercise(num)**: Utility function to select the exercise type.
- **AddRep(reps)**: Utility function that adds the number of repetitions (reps) completed.
- **GetCalories(reps, exercise)**: Utility function to calculate the calories burned based on the number of reps and the type of exercise.
- **CalculateTotal(exerciseCalories, total)**: Utility function to update the total calories burned.
- **DisplayExerciseStats(exerciseCalories, reps, exercise)**: Displays the statistics of the exercise.
- **DisplayResult(total)**: Displays the final total calories burned.

### Initial Variables
- **exercise = "none"**: The initial exercise type (either running or walking).
- **reps = 0**: The number of repetitions completed (starts at 0).
- **exerciseCalories = 0**: The total calories burned for the current exercise.
- **total = 0**: The cumulative total calories burned.

### Problem Description

The fitness-tracking system calculates the total calories burned during a workout based on selected exercises. There are only **two types of exercises** available:

1. **Running** 
2. **Walking**

The system calculates how many calories are burned based on the reps completed and the chosen exercise.

1. The program starts with the initial values of the variables: `exercise = "none"`, `reps = 0`, `exerciseCalories = 0`, and `total = 0`.
2. The system uses the following utility functions to:
   - **Choose the exercise** using `ChooseExercise(num)` (either running or walking).
   - **Add repetitions** using `AddRep(reps)`.
   - **Calculate the calories** burned based on the repetitions and the chosen exercise using `GetCalories(reps, exercise)`.
   - **Update the total calories burned** using `CalculateTotal(exerciseCalories, total)`.
   - **Display the exercise stats** using `DisplayExerciseStats(exerciseCalories, reps, exercise)`.
   - **Display the total calories burned** using `DisplayResult(total)`.

### Simulations

#### Scenario 1: Running Exercise
1. The user selects **Running** and completes **5 reps**.
2. The system calculates the total calories burned and displays the result.

#### Scenario 2: Walking Exercise
1. The user selects **Walking** and completes **10 reps**.
2. The system calculates the total calories burned and displays the result.

#### Scenario 3: Mixed Exercises
1. The user selects **Running** and completes **5 reps**.
2. The user then selects **Walking** and completes **5 reps**.
3. The system calculates the total calories burned for both exercises and displays the final result.
