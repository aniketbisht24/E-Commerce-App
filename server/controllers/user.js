const test = async(req, res) => {
    const{body: {username}} = req
    console.log("hello")
    res.send(username)
}

module.exports = {
    test
}