export const viewHeader = `
    <article class="container-header">
        <h1>Travelers</h1>
        <i class="fas fa-bars"></i>
        <nav class="hide">
        <ul>
            <li><a href="#/timeline">Home</a></li>
            <li><a href="#/profile">Profile</a></li>
            <li><a href="#/">Log out</a></li>
        </ul>
        </nav>
    </article>`;

export const viewUser = `
<article class="container-post">
    <div class="user-info">
      <img class="image-circle" alt="userimage">
      <h2 class="user-name">user</h2>
    </div>
</article>`;

export const viewCreatePost = `
<article class="create-post">
    <textarea name="post" class="input-post" cols="30" rows="10" placeholder=" What's the new? "></textarea>
    <div class="container-submit">
        <i class="far fa-image"></i>
        <button class="button-small">publish</button>
    </div>
</article>   
`;

export const viewUsersPosts = `
<article class="post-info">
    <div>
        <p>diva regia empoderada patrona de mi destino </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBtF5fnm5knTM69pdtFzMJ8Wq4KqAyzxo-A&usqp=CAU"
            alt="img" class="image-post">
    </div>
    <div class="container-submit">
        <i class="fas fa-star">5</i>
        <i class="fas fa-share-square"></i>
    </div>
</article>
`;
