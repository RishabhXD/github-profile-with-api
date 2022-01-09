const url = "https://api.github.com/users/";

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

async function getUser(user){
    const res = await fetch(url + user);
    const resData = await res.json();

    createUserProfile(resData);
}

const createUserProfile = (user) => {
    const card =`
    <div class="card">
        <div>
            <img class = "avatar"src = "${user.avatar_url}">
        </div>
        <div class = "user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class = "data">
                <li>Followers <br> ${user.followers}</li>
                <li>Following <br> ${user.following}</li>
                <li>Public Repos <br> ${user.public_repos}</li>
            </ul>
        </div>
    </div>

    `

    main.innerHTML = card;
}



form.addEventListener('submit',e =>{
    e.preventDefault();
    const user = search.value

    if(user){
        getUser(user);
        search.value = '';
    }
})