// Days of the week exercise
// Create a variable with the input day
let day=prompt("Please Enter a Day of the Week");
// We validate if the day is business or weekend
day=day.toLowerCase();
if (day=="monday"||day=="tuesday"||day=="wednesday"||day=="thursday"||day=="friday") {
    alert("It's a Business Day!");
} else {
    if (day=="saturday"||day=="sunday") {
        alert("It's the Weekend!");
    } else {
        alert("Please Enter a Day of the Week");
    }
}
/*
1. What happens if there is no input?
2. What happens if the case is changed?
3. What happens if they write something unrelated to algorithm
 */