const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose
    .connect("mongodb://localhost:27017/daoventure_car", { useNewUrlParser: true })
    .then(() => {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use('/api/v1/cars', require('./routes/api/cars'));


        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

    })


