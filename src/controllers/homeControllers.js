const getHomepage = (req, res) =>{
     res.send('Hello World! lo cc')
}

const getABC = (req, res) =>{
     res.send('Check ABC')
}

const test = (req, res) =>{
     res.render('sample.ejs')
}
module.exports = {
     getHomepage,getABC, test
}