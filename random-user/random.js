// find the name from it
const showARandomPersons = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const containerDiv = document.getElementById('show-random-persons');
    for (const user of users) {

        const onePersonDiv = document.createElement('div');
        onePersonDiv.classList.add('p-4', 'm-4', 'bg-sky-300', 'rounded-lg');
        onePersonDiv.innerHTML = `
            <h3>Full name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <h3>email: ${user.email}</h3>
            <h4>Age: ${user.dob.age} </h4>
        `;
        containerDiv.appendChild(onePersonDiv);
    }
}

showARandomPersons();