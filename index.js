const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dunkLow = require('./models/dunkLow')
const jordan1 = require('./models/jordan1')
const jordan3 = require('./models/jordan3')
const jordan4 = require('./models/jordan4')
const nikeXoff = require('./models/nikeXoff')
const methodOverride = require('method-override')
require('dotenv').config()// ---> Link our ENV variables to our app
// ------------------------------------MIDDLE WARE
app.set('view engine', 'jsx')// ------> Creates Link to JSX
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))//parse req.body
app.use(methodOverride('_method'))
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('once', () => {
    console.log('connected to mongo')
})

// ------------------------------------ROUTES[index]
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/dunkLow', (req, res)=>{
    dunkLow.find({}, (err, alldunkLow) =>{
        console.log(err)

        res.render('DunkLowIndex', {
            dunkLow: alldunkLow
        })
    })
})
app.get('/jordan1', (req, res)=>{
    jordan1.find({}, (err, alljordan1) =>{
        console.log(err)

        res.render('jordan1Index', {
            jordan1: alljordan1
        })
    })
})
app.get('/jordan3', (req, res)=>{
    jordan3.find({}, (err, alljordan3) =>{
        console.log(err)

        res.render('jordan3Index', {
            jordan3: alljordan3
        })
    })
})
app.get('/jordan4', (req, res)=>{
    jordan4.find({}, (err, alljordan4) =>{
        console.log(err)

        res.render('jordan4Index', {
            jordan4: alljordan4
        })
    })
})
app.get('/nikeXoff', (req, res)=>{
    nikeXoff.find({}, (err, allnikeXoff) =>{
        console.log(err)

        res.render('nikeXoffIndex', {
            nikeXoff: allnikeXoff
        })
    })
})


// ------------------------------------ROUTES[new]
app.get('/dunkLow/new', (req,res) =>{
    res.render('DunkLowNew', {})
})
app.get('/jordan1/new', (req,res) =>{
    res.render('jordan1New', {})
})
app.get('/jordan3/new', (req,res) =>{
    res.render('jordan3New', {})
})
app.get('/jordan4/new', (req,res) =>{
    res.render('jordan4New', {})
})
app.get('/nikeXoff/new', (req,res) =>{
    res.render('nikeXoffNew', {})
})
// ------------------------------------ROUTES[post]
app.post('/dunkLow', (req,res)=>{
    if (req.body.isDeadStock === 'on'){
        req.body.isDeadStock = true
    } else {
        req.body.isDeadStock = false
    }

    dunkLow.create(req.body, (err, createdDunkLow) => {
        console.log(err)
        console.log('Just Added : ', createdDunkLow)
    })
    res.redirect('/dunkLow')
})
app.post('/jordan1', (req,res)=>{
    if (req.body.isDeadStock === 'on'){
        req.body.isDeadStock = true
    } else {
        req.body.isDeadStock = false
    }

    jordan1.create(req.body, (err, createdjordans) => {
        console.log(err)
        console.log('Just Added : ', createdjordans)
    })
    res.redirect('/jordan1')
})
app.post('/jordan3', (req,res)=>{
    if (req.body.isDeadStock === 'on'){
        req.body.isDeadStock = true
    } else {
        req.body.isDeadStock = false
    }

    jordan3.create(req.body, (err, createdjordans) => {
        console.log(err)
        console.log('Just Added : ', createdjordans)
    })
    res.redirect('/jordan3')
})
app.post('/jordan4', (req,res)=>{
    if (req.body.isDeadStock === 'on'){
        req.body.isDeadStock = true
    } else {
        req.body.isDeadStock = false
    }

    jordan4.create(req.body, (err, createdjordans) => {
        console.log(err)
        console.log('Just Added : ', createdjordans)
    })
    res.redirect('/jordan4')
})
app.post('/nikeXoff', (req,res)=>{
    if (req.body.isDeadStock === 'on'){
        req.body.isDeadStock = true
    } else {
        req.body.isDeadStock = false
    }

    nikeXoff.create(req.body, (err, creatednikes) => {
        console.log(err)
        console.log('Just Added : ', creatednikes)
    })
    res.redirect('/nikeXoff')
})
// ------------------------------------ROUTES[edit]
app.get("/dunkLow/:id/edit", (req, res) => {
    dunkLow.findById(req.params.id, (err, founddunkLow) => {
        //finddunkLow
        console.log(err)
        if (!err) {
            res.render("DunkLowEdit", {
                dunkLow: founddunkLow,
                //pass in the founddunkLow so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
app.get("/jordan1/:id/edit", (req, res) => {
    jordan1.findById(req.params.id, (err, foundjordan1) => {
        //findjordan1
        console.log(err)
        if (!err) {
            res.render("jordan1Edit", {
                jordan1: foundjordan1,
                //pass in the foundjordan1 so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
app.get("/jordan3/:id/edit", (req, res) => {
    jordan3.findById(req.params.id, (err, foundjordan3) => {
        //findjordan3
        console.log(err)
        if (!err) {
            res.render("jordan3Edit", {
                jordan3: foundjordan3,
                //pass in the foundjordan3 so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
app.get("/jordan4/:id/edit", (req, res) => {
    jordan4.findById(req.params.id, (err, foundjordan4) => {
        //findjordan4
        console.log(err)
        if (!err) {
            res.render("jordan4Edit", {
                jordan4: foundjordan4,
                //pass in the foundjordan3 so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
app.get("/nikeXoff/:id/edit", (req, res) => {
    nikeXoff.findById(req.params.id, (err, foundnikeXoff) => {
        //findnikeXoff
        console.log(err)
        if (!err) {
            res.render("nikeXoffEdit", {
                nikeXoff: foundnikeXoff,
                //pass in the foundnikeXoff so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// ------------------------------------ROUTES[Update | Put and Patch]
app.put("/dunkLow/:id", (req, res) => {
    if (req.body.isDeadStock === "on") {
        req.body.isDeadStock = true;
    } else {
        req.body.isDeadStock = false;
    }
    dunkLow.findByIdAndUpdate(req.params.id, req.body, (err, updateddunkLow) => {
        console.log(err)
        console.log(updateddunkLow);
        res.redirect(`/dunkLow/${req.params.id}`);
    });
});
app.put("/jordan1/:id", (req, res) => {
    if (req.body.isDeadStock === "on") {
        req.body.isDeadStock = true;
    } else {
        req.body.isDeadStock = false;
    }
    jordan1.findByIdAndUpdate(req.params.id, req.body, (err, updatedjordan1) => {
        console.log(err)
        console.log(updatedjordan1);
        res.redirect(`/jordan1/${req.params.id}`);
    });
});
app.put("/jordan3/:id", (req, res) => {
    if (req.body.isDeadStock === "on") {
        req.body.isDeadStock = true;
    } else {
        req.body.isDeadStock = false;
    }
    jordan3.findByIdAndUpdate(req.params.id, req.body, (err, updatedjordan3) => {
        console.log(err)
        console.log(updatedjordan3);
        res.redirect(`/jordan3/${req.params.id}`);
    });
});
app.put("/jordan4/:id", (req, res) => {
    if (req.body.isDeadStock === "on") {
        req.body.isDeadStock = true;
    } else {
        req.body.isDeadStock = false;
    }
    jordan4.findByIdAndUpdate(req.params.id, req.body, (err, updatedjordan4) => {
        console.log(err)
        console.log(updatedjordan4);
        res.redirect(`/jordan4/${req.params.id}`);
    });
});
app.put("/nikeXoff/:id", (req, res) => {
    if (req.body.isDeadStock === "on") {
        req.body.isDeadStock = true;
    } else {
        req.body.isDeadStock = false;
    }
    nikeXoff.findByIdAndUpdate(req.params.id, req.body, (err, updatednikeXoff) => {
        console.log(err)
        console.log(updatednikeXoff);
        res.redirect(`/nikeXoff/${req.params.id}`);
    });
});
// ------------------------------------ROUTES[delete]
app.delete("/dunkLow/:id", (req, res) => {
    dunkLow.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/dunkLow");
    });
});
app.delete("/jordan1/:id", (req, res) => {
    jordan1.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/jordan1");
    });
});
app.delete("/jordan3/:id", (req, res) => {
    jordan3.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/jordan3");
    });
});
app.delete("/jordan4/:id", (req, res) => {
    jordan4.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/jordan4");
    });
});
app.delete("/nikeXoff/:id", (req, res) => {
    nikeXoff.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/nikeXoff");
    });
});

// ------------------------------------ROUTES[seeds]
app.get('/dunkLow/seed', (req, res) => {
    dunkLow.create([
        {
            colorWay: 'Nike Dunk Low Jackie Robinson',
            price: '$130',
            isDeadStock: true
         },
         {
            colorWay: 'Nike Dunk Low UNC',
            price: '$100',
            isDeadStock: true
         },
         {
            colorWay: 'Nike Dunk Low Syracuse',
            price: '$100',
            isDeadStock: true
         }
    ], (err, data) => {
        res.redirect('/dunkLow')
    })
})
app.get('/jordan1/seed', (req, res) => {
    jordan1.create([
        {
            colorWay: 'Jordan 1 High Dark Mocha',
            price: '$170',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 1 High White University',
            price: '$170',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 1 Dior',
            price: '$2000',
            isDeadStock: true
         }
    ], (err, data) => {
        res.redirect('/jordan1')
    })
})
app.get('/jordan3/seed', (req, res) => {
    jordan3.create([
        {
            colorWay: 'Jordan 3 Fire Red',
            price: '$210',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 3 White Cement',
            price: '$150',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 3 True Blue',
            price: '$220',
            isDeadStock: true
         }
    ], (err, data) => {
        res.redirect('/jordan3')
    })
})
app.get('/jordan4/seed', (req, res) => {
    jordan4.create([
        {
            colorWay: 'Jordan 4 Military Black',
            price: '$210',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 4 Midnight Navy',
            price: '$210',
            isDeadStock: true
         },
         {
            colorWay: 'Jordan 4 Bred',
            price: '$200',
            isDeadStock: true
         }
    ], (err, data) => {
        res.redirect('/jordan4')
    })
})
app.get('/nikeXoff/seed', (req, res) => {
    nikeXoff.create([
        {
            colorWay: 'MCA University Blue',
            price: '$150',
            isDeadStock: true
         },
         {
            colorWay: 'Nike Air Force 1 Low Off-White',
            price: '$170',
            isDeadStock: true
         },
         {
            colorWay: 'Off-White Brooklyn',
            price: '$160',
            isDeadStock: true
         }
    ], (err, data) => {
        res.redirect('/nikeXoff')
    })
})
// ------------------------------------ROUTES[show]
app.get('/dunkLow/:id', (req,res)=>{
    dunkLow.findById(req.params.id, (err, foundDunk)=>{
        console.log(err)
        console.log(`Found: `, foundDunk)
        res.render('DunkLowShow', {
            dunkLow: foundDunk
        })
    })
})
app.get('/jordan1/:id', (req,res)=>{
    jordan1.findById(req.params.id, (err, foundJordan)=>{
        console.log(err)
        console.log(`Found: `, foundJordan)
        res.render('jordan1Show', {
            jordan1: foundJordan
        })
    })
})
app.get('/jordan3/:id', (req,res)=>{
    jordan3.findById(req.params.id, (err, foundJordan)=>{
        console.log(err)
        console.log(`Found: `, foundJordan)
        res.render('jordan3Show', {
            jordan3: foundJordan
        })
    })
})
app.get('/jordan4/:id', (req,res)=>{
    jordan4.findById(req.params.id, (err, foundJordan)=>{
        console.log(err)
        console.log(`Found: `, foundJordan)
        res.render('jordan4Show', {
            jordan4: foundJordan
        })
    })
})
app.get('/nikeXoff/:id', (req,res)=>{
    nikeXoff.findById(req.params.id, (err, foundNikes)=>{
        console.log(err)
        console.log(`Found: `, foundNikes)
        res.render('nikeXoffShow', {
            nikeXoff: foundNikes
        })
    })
})

app.listen('3000', ()=>{
    console.log('The app is listening!')
})