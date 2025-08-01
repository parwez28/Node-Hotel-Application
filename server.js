const express=require('express');
const app=express();
const connectDB=require('./db.js');

// Connect Database
connectDB();

// Middleware
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router file
const personRoutes=require('./routes/personRoutes.js');
const menuItemRouters=require('./routes/menuItemRoutes.js');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRouters);

app.listen(3000,()=>{
    console.log("Server is running at PORT no 3000");
});