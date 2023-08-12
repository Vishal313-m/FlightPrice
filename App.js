const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;

// define middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
var FlightDetails=[
    {
    FlightName:"Indigo",
    Source:"Delhi",
    Destination:"Jaipur"
    },
    {
    FlightName:"AirAsia",    
    Source:"Delhi",
    Destination:"Banglore"
    },
    {
    FlightName:"Emirates",
    Source:"Delhi",
    Destination:"Mumbai"
    }
    
    
    ]
    app.post('/api/getFlightsByLocation',(req,res)=>{
    console.log(req.query.Source)
    var searchedFlight=[]
    FlightDetails.forEach(element=>{
    if(element.Source==req.query.Source && element.Destination==req.query.Destination){
    searchedFlight.push(element)
    }
    })
    res.status(200).json(searchedFlight)
    })

app.listen(port, () => {
console.log('server is running on port'+port);
}); 

