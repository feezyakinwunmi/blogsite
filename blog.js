const express = require("express");
const https = require("https")
const bodyparser = require("body-parser");
const { title } = require("process");
const app = express()

const homestartingpage = "Just One Passion, One Purpose To Know You more and More When I Know You, I’ll find Me Just One Passion, One Purpose To Know You more and More When I Know You, I’ll find Me"
    const aboutpage ="my name is Akinwunmi femi and am the creator of this web application,am a programmer  and graduated from lasu(Lagos State University),and this webapp is designed to take in blogs and post them, and it eazy to do just in one click, hope you really enjoy the webapp   Thanks for visiting"
    
const contactpage ="No Life Outside YouNo One Besides YouLet me Know You more and more When I Know You, I’ll find Me"

let posts=[]








app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')

/* ---------to check if a topic is available or to search----*/
app.get("/posts/:postname", function(req,res){
 //   const reqtitle = _.lowercase(req.params.postname);

    posts.forEach(function(bpost){
//const savedtitle = _.lowercase(bpost.blogt);
    
    if(reqtitle === savedtitle) {
res.render("post",{
    title:bpost.blogt,
    content:bpost.blogp
    })

}
})
})

app.get("/", function (req, res) {
    res.render( "index",{ pa:homestartingpage, posts:posts});

})

//server for about
app.get("/about", function(req,res){
    res.render("about",{ ab:aboutpage})
})
//server for contact

app.get("/contact", function(req,res){
    res.render("contact",{ ct:contactpage})
})

//server for compose

app.get("/compose", function(req,res){
  
    res.render("compose")
})
app.post("/compose",function(req,res){
    const post={
        blogt:req.body.blogtitle,
        blogp:req.body.blogpost,
        }
        posts.push(post)
res.redirect("/")
 
    })
app.listen(5000, function(){
    console.log(" your server is now running port 5000");
})