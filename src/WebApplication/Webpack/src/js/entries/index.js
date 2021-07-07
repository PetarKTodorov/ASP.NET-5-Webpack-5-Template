import 'jquery';
import 'jquery-validation';
import 'jquery-validation-unobtrusive';

import 'bootstrap';

const user = {
    "name": "Adam",
    "age": 20,
    "gender": "Male",
    "country": "BG",
};

const user1 = {
    ...user,
    name: "Eva",
    "gender": "Female",
}

console.log(user);
console.log(user1);