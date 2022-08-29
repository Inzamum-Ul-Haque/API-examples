const loadComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComments(data));
};

const displayComments = (comments) => {
  const top20Comments = comments.slice(0, 20);
  //   console.log(top20Comments);
  const commentsContainer = document.getElementById("comments-container");

  top20Comments.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <p>Email: ${comment.email}</p>
        <p>Comment: ${comment.body}</p>
        <button onclick=loadCommentDetails(${comment.id})>Load Details</button>
      `;
    commentsContainer.appendChild(commentDiv);
  });
};

const loadCommentDetails = (id) => {
  const url = `https://jsonplaceholder.typicode.com/comments?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCommentDetails(data[0]));
};

const displayCommentDetails = (userData) => {
  const userDetailsContainer = document.getElementById(
    "user-details-container"
  );
  userDetailsContainer.classList.add("user-details");
  userDetailsContainer.innerHTML = `
        <h4>Name: ${userData.name}</h4>
        <p>Email: ${userData.email}</p>
    `;
};
loadComments();
