const express=require('express');
const route=express.Router();
const Person=require('../models/Person.js');

// To show Persons
route.get('/',async(req,res)=>{
    try {
        const person=await Person.find();
        res.status(200).json(person);
        console.log("Person list Fetched");
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})
// Add new Person/User
route.post('/',async(req,res)=>{
    try {
        const newperson=new Person(req.body);
        const savePerson=await newperson.save();
        res.status(200).json(savePerson);
        console.log("New Person Added");
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

// To update Person Data
route.put('/:id',async(req,res)=>{
    try {
        const updatePerson=await Person.findByIdAndUpdate(req.params.id,req.body, {new: true,runValidators: true,});
        if(updatePerson){
            res.status(200).json(updatePerson);
            console.log("Data Updated");
        } else{
            res.status(404).json('User not found');
            console.log("Failed to update data");
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

// To Delete Person
route.delete('/:id',async(req,res)=>{
    try {
        const deletePerson=await Person.findByIdAndDelete(req.params.id);
        if(deletePerson){
            res.status(200).json(deletePerson);
            console.log("Person deleted");
        } else{
            res.status(404).json('User not found');
            console.log("Failed to delete person");
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

module.exports=route;