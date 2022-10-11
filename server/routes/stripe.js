const {} = require('../controllers/stripe');
const stripe = require("stripe")(process.env.STRIPE_KEY)

module.exports = (router) => {
    router.post("/payment", (req, res) => {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "inr"
        }, (stripeErrors, stripeResponse) => {
            if(err){
                return res.status(400).json(stripeErrors);
            }

            return res.status(200).json(stripeResponse);

        })
    })
}