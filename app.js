const express=require('express');
const app= new express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/Home',name:'Home'}],
        namee:'Archana P S',
        batch:'FSD OCT Batch ICTAK'});
});
app.get('/Home', function(req, res){
    res.render("Home",
    {
        nav:[{link:'/Home',name:'Home'}],
        namee:'Archana P S',
        batch:'FSD OCT Batch ICTAK'
       
    }
    );

});
app.get('/Email', function(req, res){
    res.render("Email",
    {
        nav:[{link:'/Home',name:'Home'}],
        namee:'Archana P S',
        batch:'FSD OCT Batch ICTAK'
       
    }
    );

});

//app.listen(5000);
//app.listen(process.env.PORT || 5000);
app.listen(5000);
