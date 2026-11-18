const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");




app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



const MONGO_URL = "mongodb://127.0.0.1:27017/roomio";
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("DB connection error", err);
    });

async function main() {
  await mongoose.connect(MONGO_URL);
};



// app.get("/test", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My room",
//         description: "A nice room to live in",
//         price: 1000,
//         image:" ",
//         location: "muzaffarnagar",
//         state: "up",
//         image: ""
//     });

//     await sampleListing.save();
//     console.log("Sample listing saved to DB");
//     res.send("test route is working");
// });



// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Hello World");
});




// INDEX ROUTE
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("./listings/index.ejs", {allListings : allListings});
        console.log("listing fatch successfully");
    }
    catch (err) {
        console.error("Error fetching listings:", err);
    }
});

app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

   

// SHOW ROUT
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    try {
        const listing = await Listing.findById((id));
        res.render("./listings/show.ejs", {listing});
    }
    catch(err) {
        console.error("Error fetching listing by ID:", err);
    }
});


// CREATE ROUTE
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// EDIT ROUTE
app.get("/listings/:id/edit", async (req,res) => {
    const { id } = req.params;
    const listing  = await Listing.findById(id);
    res.render("./listings/edit.ejs", {listing});
});

// UPDATE ROUTE
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);

});

// DELETE ROUTE
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});


// PORT
app.listen(8080, () => {
    console.log("Server is working on port 8080");
})