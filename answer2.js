/**
 * The goal of this problem is to use prototypal inheritance in Javascript.
Implement inheritance as described below-
Create a function in NodeJS Activity that takes a single parameter amount (Number) and assigns it to member variable 'amount'.
Add the following functions to the Activity prototype -
1. setAmount - This function takes a single parameter,
value.
• If the value is less than or equal to 0, it returns false.
。 Otherwise, it assigns value to the member variable amount and returns true.
2. getAmount - This function returns the member variable amount value.
Create a function Payment that -
1. inherits from parent Activity.
2. takes 2 parameters - amount (Number) and receiver (string). It assigns the parent's member variable 'amount', and self's member variable 'receiver respectively.
Add the following functions to Payment's existing prototype -
1. setReceiver - This function takes a single parameter and assigns it to the member variable 'receiver'.
2. getReceiver - This function returns the member variable 'receiver' value.
Create a function Refund that -
1. inherits from parent Activity.
2. takes 2 parameters - amount (Number) and sender (string) and assigns the parent's member variable, 'amount', and self's member variable, 'sender'.

Add below functions to Refund's existing prototype -
1.setSender - This function takes a single parameter and assigns it to the member variable sender. 2. getSender - This function returns the member variable sender.
Implementation of the function will be tested by the provided code stub using several input files. Each input file contains parameters for the function calls. 
The result of their executions will be printed to the standard output by the provided code. In the case of a setAmount function call, if the value returned is false, the stubbed code prints 'Amount not updated'. If the value returned is true, it prints 'Amount updates to '.
 */

// Define the Activity constructor function
function Activity(amount) {
    this.amount = amount;
  }
  
  // Add functions to the Activity prototype
  Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
      return false;
    }
    this.amount = value;
    return true;
  }
  
  Activity.prototype.getAmount = function() {
    return this.amount;
  }
  
  // Define the Payment constructor function
  function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
  }
  
  // Inherit from Activity
  Payment.prototype = Object.create(Activity.prototype);
  Payment.prototype.constructor = Payment;
  
  // Add functions to the Payment prototype
  Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver;
  }
  
  Payment.prototype.getReceiver = function() {
    return this.receiver;
  }
  
  // Define the Refund constructor function
  function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
  }
  
  // Inherit from Activity
  Refund.prototype = Object.create(Activity.prototype);
  Refund.prototype.constructor = Refund;
  
  // Add functions to the Refund prototype
  Refund.prototype.setSender = function(sender) {
    this.sender = sender;
  }
  
  Refund.prototype.getSender = function() {
    return this.sender;
  }
  