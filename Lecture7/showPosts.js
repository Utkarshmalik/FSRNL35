
const postsSection = document.querySelector("#posts");

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    return res.json()
})
.then((posts)=>{

    posts.forEach((post)=>{
        const postDiv = createPost(post);
        postsSection.appendChild(postDiv);
    })
})
.catch((err)=>{
    console.log("promise is rejected with err ",err)
})


const createPost=(postData)=>{

    const div= document.createElement('div');
    div.className="post";
    const h3=document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent=postData.title;
    p.textContent=postData.body;

    div.appendChild(h3);
    div.appendChild(p);

    return div;

}



{/* <div class="post">
<h3> Learning Promises </h3>
<p>Promises is a great way to handle async code </p>
</div> */}