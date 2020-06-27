const hostname="localhost"
const port=44374
const register=require('./Services/Authentication/authentication.service')
//to solve the crs error 
app.use(function(req, res, next) {
    console.log('kkkkkkkkkkkkkkkkkkk');
    res.setHeader('Access-Control-Allow-Origin','*'); 
  
      res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
    if('OPTIONS'==req.method)
    {
  res.sendStatus(200);
  
    }
    else
    {
  console.log('error in header ')
    }
    next();
  });


  app.use('/api/user/Register',userpage)

  app.listen(port,()=>{
    console.log('listen to port ')
})