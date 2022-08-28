const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const usersContainer = document.getElementById("users-container");
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
            <h3>User name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>Gender: ${user.gender}</p>
            <button onclick=loadDetails('${user.nat}')>Details</button>
        `;
    usersContainer.appendChild(userDiv);
  });
};

const loadDetails = (code) => {
  console.log("details btn clicked", code);
};
loadUsers();
