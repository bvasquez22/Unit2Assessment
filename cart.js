///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal * (tax + 1) - couponValue).toFixed(2)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    A customer object should have the following properties:
    1. Name, 2. Dietary restrictions, 3. Frequency of attendance,
    4. Date of last attendance, 5. Favorite orders, 6. Kindness score (1-10)

    Name is obviously important because a restaurant should know the names of those
    who frequent their restaurant. Dietary restrictions would be good to know that
    way they can recommend menu items or possibly even provide special menus if for
    example that person is a vegetarian, or maybe allergic to dairy. Frequency of
    attendance is good to know, that way a restaurant can know about how often this
    customer comes and if they should potentially prepare any special accomodations in
    advance. Date of last attendance helps give a general idea of when this person will likely
    come back next. Favorite orders would be good to know that way, if they're one of those,
    "usually orders the same thing" kind of person, they can make the dining experience a lot more 
    efficient for the customer. And finally, a kindness score could help a waiter or waitress
    know what to expect and be prepared to handle a less friendly customer.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer1 = {
    name: 'Mark',
    diet: 'Vegetarian',
    frequency: 'Monthly',
    lastAttendance: 'May 15, 2023',
    favoriteOrders: ["Chef's salad", 'French onion soup'],
    kindnessScore: 8
}
