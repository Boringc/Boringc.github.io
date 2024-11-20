var posts=["2024/11/20/hello-world/","2024/11/20/world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };