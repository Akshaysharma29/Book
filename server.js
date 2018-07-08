const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api', require('./routes/api').route)

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

const server_port = process.env.PORT||2678;

 var EmailGlobal = null;



//user signup table

  const User = require('./db').User

  app.post("/signup",function(req,res){

    // console.log(
    //     req.body.Name,
    //     req.body.Password,
    //     req.body.Email,
    //     req.body.College,
    //     req.body.Address,
    //     req.body.Phone_number);
  if(!auth){
    User.create({
        name: req.body.Name,
        password : req.body.Password,
        email : req.body.Email,
        college : req.body.College,
        address : req.body.Address,
        phone_number : req.body.Phone_number
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new user"
        })
   })
}
else{
    res.json("You are already Sign Up");
} 




  })

//authentication
var auth = false;

  app.post("/login",function(req,res){

    var n = req.body.Name;
    var p = req.body.Password;
    var e = req.body.Email;
    EmailGlobal = e;
    //console.log(req.body.Email);
    //console.log(n,p);
if(!auth){
    function isIdUnique (e) {
        return User.count({ where: {name:n, password: p, email:e} })
          .then(count => {
            if (count != 0) {
              return true;
            }
            return false;
        });
    }

    isIdUnique(e).then(isUnique => {
        if (isUnique) {
            console.log(isUnique);
            res.json('You are login now');
            auth = isUnique;
            //res.status(200).send("person found")
        }
        else{
            res.json('Enter correct name,email and password');
            console.log(p);
        }
    });
}
else{
    res.json("You are already Login");
}   

})


app.get("/logout",function(req,res){

          if(!auth){
            res.json("You have been already logout");
          }
          else{
            auth = false;
            EmailGlobal = null;
            res.json("You have been logout");
          }
          
          //console.log(auth);
})







//Book table

const Book = require('./db').Book;

app.post('/books', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 
 if(auth){
    Book.create({
        name: req.body.Name,
        selleremail:EmailGlobal,
        bookname: req.body.Bookname,
        authorname: req.body.Authorname,
        imageurl: req.body.Imageurl,
        price: req.body.Price,
        condition: req.body.Condition
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new user"
        })
    })
}
else{
    res.json("You are not login");
}

})

//get books

app.get('/books',function(req,res){
   // res.json("its me");

    Book.findAll()
        .then((books) => {
            res.json(books)
        })
        .catch((err) => {
            res.json({
                error: "Could not retrieve products"
            })
        })

})

app.post('/particularbook',function(req,res){
    // res.json("its me");
    console.log(req.body.id);
     Book.findAll({where:{id :req.body.id}})
         .then((books) => {
             res.json(books)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
 
 })



// wishlist table

const Wishlist = require('./db').Wishlist;

app.post('/wishlist',function(req,res){


    // console.log(req.body.Bookid,
    //     EmailGlobal,
    //     req.body.Name,
    //     req.body.Bookname,
    //     req.body.Authorname,
    //     req.body.Imageurl,
    //     req.body.Price,
    //     req.body.Condition)
    //console.log(EmailGlobal);
    if(auth){


         var i =req.body.Bookid;
         var e = EmailGlobal;



        function isIdUnique (e) {
            return Wishlist.count({ where: {bookid: i, email: e} })
              .then(count => {
                if (count != 0) {
                  return true;
                }
                return false;
            });
        }
    
        isIdUnique(e).then(isUnique => {
            if (isUnique) {
                console.log(isUnique);
                res.json('Already added to wishlist');
                //res.status(200).send("person found")
            }
            else{
                res.json('Enter correct name,email and password');
                Wishlist.create({
                    bookid: req.body.Bookid,
                    email: EmailGlobal,
                    name: req.body.Name,
                    bookname: req.body.Bookname,
                    authorname: req.body.Authorname,
                    imageurl: req.body.Imageurl,
                    price: req.body.Price,
                    condition: req.body.Condition
                }).then((user) => {
                    res.status(201).send(user)
                }).catch((err) => {
                    res.status(501).send({
                        error: "Could not add new user"
                    })
                })
            }
        });














        
    }
    else{
        res.json("You are not login");
    }

})

app.get('/wishlist',function(req,res){


    //console.log(EmailGlobal);
    if(auth){
        Wishlist.findAll({where:{email :EmailGlobal}})
         .then((wishlist) => {
             res.json(wishlist)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    }
    else{
        res.json("login First");
    }

})







// messages 

const Message = require('./db').Message;

app.post('/message',function(req,res){
    // res.json("its me");


    // console.log(
    //     EmailGlobal,
    //     req.body.Bookname,
    //     req.body.Message,
    //     req.body.Receiverpassword)


    if(auth){
        Message.create({
            senderemail:EmailGlobal,
            bookname: req.body.Bookname,
            message: req.body.Message,
            receiveremail: req.body.Receiveremail
        }).then((user) => {
            res.status(201).send(user)
        }).catch((err) => {
            res.status(501).send({
                error: "Could not add new user"
            })
        })
    }
    else{
        res.json("login First");
    }
 
 })

 app.get('/getmessage',function(req,res){

    console.log("Its working");

    if(auth){
        Message.findAll({where:{receiveremail :EmailGlobal}})
         .then((messages) => {
             res.json(messages)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    }
    else{
        res.json("login First");
    }

 })






 // Filtering


app.post('/Filtering',function(req,res){

    var temp =req.body.Entered;
    var filter_type = req.body.Filter_type;

    console.log(filter_type);
    if(filter_type=="bookname"){
        Book.findAll({where:{bookname :temp}})
         .then((books) => {
             res.json(books)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    }    
    else if(filter_type=="authorname"){
        Book.findAll({where:{authorname :temp}})
         .then((books) => {
             res.json(books)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    }
    else if(filter_type=="price"){
        Book.findAll({where:{price :{ lte : temp }}})
         .then((books) => {
             res.json(books)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    } 
    else if(filter_type=="condition"){
        Book.findAll({where:{condition : temp}})
         .then((books) => {
             res.json(books)
         })
         .catch((err) => {
             res.json({
                 error: "Could not retrieve products"
             })
         })
    }      

})


app.listen(server_port, () => console.log('Server started at http://localhost:2678'))