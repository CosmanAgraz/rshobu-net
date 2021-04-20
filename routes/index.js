const express = require('express');
const router = express.Router();
const path = require( "path" );

const { entryPoint } = require( "../config.js" );

//begin routes

router.get('/', (req, res) => {
    res.sendFile(path.resolve( entryPoint ));
});

module.exports = router;