document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friennd');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightgreen';
    }
});

document.getElementById('center-third').addEventListener('click', function(){
    const friendName = document.getElementById('friend-name');
    friendName.style.textAlign = 'center';
});

document.getElementById('add-new').addEventListener('click', function(){
    const friendContainer = document.getElementById('freind-container');
    const friend = document.createElement('div');
    friend.classList.add('friennd');
    friend.innerHTML = `<h3 class="friend-name">New Friend</h3>
    <p>Id facere nemo asperiores perspiciatis.</p>`;

    friendContainer.appendChild(friend);
});