const userData = '{"fullName": "Ansharlene Crystal Balagosa", "userAge": 21, "hobbies":["Reading","Listening to Music"]}';
const userObject = JSON.parse(userData);

console.log(userObject.fullName);
console.log(userObject.userAge);

const newUserData = JSON.stringify(userObject);
console.log(newUserData);

document.getElementById("fullName").innerHTML = `<b>Name</b>: ${userObject.fullName}`;
document.getElementById("userAge").innerHTML = `<b>Age</b>: ${userObject.userAge}`;

const hobbyList = document.getElementById("hobbyList");
userObject.hobbies.forEach(hobby => {
    hobbyList.innerHTML += `<li>${hobby}</li>`;
});