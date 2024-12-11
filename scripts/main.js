// What does createCandy evaluate to when invoked with 'Mars' and 2.5 as arguments?
const createCandy = (name, price) => {
    return {
        name: name,
        price: price
    };
}
const mars = createCandy('Mars', 2.5);
console.log(mars)



// What does sumArray evaluate to when invoked with [1, 2, 3, 4, 5] as an argument?
const sumArray = (numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
}
const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum)



// What does greet evaluate to when invoked with 'Alice' as an argument?
const greet = (name) => {
    return `Hello, ${name}!`;
}
const greeting = greet('Alice');
console.log(greeting)



// What does createCounter evaluate to when invoked?
const createCounter = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter)





























// What does fetchUsersXHR evaluate to when invoked?
const fetchUsersXHR = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        xhr.open('GET', 'http://localhost:8000/users', true);

        // Listen for the onload event, which is triggered when the request completes
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Error: ' + xhr.status);
            }
        }

        // Send the request
        xhr.send();
    });
}


const asyncUsers = async () => {
    const response = await fetch('http://localhost:8000/users')
    const allUsersArray = await response.json()
    return allUsersArray
}



// const usersXHR = fetchUsersXHR();
// usersXHR.then(data => console.log(data));



const fetchUsers = () => {
    return fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then(allUsersArray => {
            return allUsersArray
        });
}

const userFetch = fetchUsers();
console.log(userFetch.then(data => console.log(data)));













// const users = await asyncUsers();
// console.log(users)



































































/*
const fetchUsers = () => {
    return fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then(allUsersArray => {
            return allUsersArray
        });
}

const asyncUsers = async () => {
    const response = await fetch('http://localhost:8000/users')
    const allUsersArray = await response.json()
    return allUsersArray
}
 */