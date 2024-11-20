var posts=["2024/11/20/测试博文/","2024/11/20/world/","2024/11/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };