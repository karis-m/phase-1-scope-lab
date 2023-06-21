// Write your solution in this file!
var customerName = 'bob';
var bestCustomer = undefined;
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = 'not bob'; 
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
function changeLeastFavoriteCustomer(){
    throw new Error('Assignment to constant variable.');
}