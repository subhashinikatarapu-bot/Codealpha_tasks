let followers = 0;

function followUser() {
    followers++;

    document.getElementById("followText").innerText =
        followers + " Followers";
}

function likePost(button) {
    let count = button.querySelector("span");

    let likes = parseInt(count.innerText);

    likes++;

    count.innerText = likes;
}

function addComment(event, input) {

    if (event.key === "Enter") {

        let commentText = input.value.trim();

        if (commentText === "") {
            return;
        }

        let comment = document.createElement("div");

        comment.className = "comment";

        comment.innerText = "💬 " + commentText;

        input.parentElement
            .querySelector(".comments")
            .appendChild(comment);

        input.value = "";
    }
}

function createPost() {

    let text = document.getElementById("postText").value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    let post = document.createElement("div");

    post.className = "post";

    post.innerHTML = `
        <h3>👤 Subhashini</h3>
        <p>${text}</p>

        <button onclick="likePost(this)">
            ❤️ Like <span>0</span>
        </button>

        <input type="text"
               placeholder="Write a comment..."
               onkeydown="addComment(event, this)">

        <div class="comments"></div>
    `;

    document.getElementById("posts").prepend(post);

    document.getElementById("postText").value = "";
}