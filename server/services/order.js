const Order = require('../models/Order')
const stripe = require('stripe')('sk_test_51Lrla9SDouCeI2CDkpnm0GXskoe752q3aiNvbB0O9pEoGrv5r7hkGSBlLR3JyxpMQSvBakSYVpciFIaY5Gdm6EXI00kgqB8J9v')

const save = async (payload) => {
    try {
        const newOrder = new Order({ ...payload });

        await newOrder.save();

        return { doc: 'Order successfully saved' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const patch = async (payload) => {
    try {

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            {
                $set: data,
            },
            { new: true }
        )

        return { doc: 'Order successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const remove = async (payload) => {
    try {
        const { id } = payload;

        await Order.findByIdAndDelete(id)

        return { doc: 'Order successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getByUserId = async (payload) => {
    try {
        const { userId } = payload;

        const doc = await Orders.findOne({
            userId
        });

        const { _doc } = doc;

        return { doc: _doc }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getAll = async (payload) => {
    try {
        const doc = await Order.find()

        const newDoc = doc.map((element) => {
            const { _doc } = element;

            return { ..._doc }
        })

        return { doc: newDoc }

    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getIncome = async (payload) => {
    try {
        const date = new Date();

        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));

        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

        const doc = await Order.aggregate([
            {
                $match: { createdAt: { $gte: previousMonth } }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                },
            },
        ])

        // const newDoc = doc.map((element) => {
        //     const { _doc } = element;

        //     return { ..._doc }
        // })

        // return { doc: newDoc }

    }
    catch (error) {
        throw ('transaction failed')
    }
}

const payment = async (payload) => {
    try {
        const { tokenId, amount} = payload

        // const res = await stripe.paymentIntents.create(
        //     {
        //         source: tokenId,
        //         amount,
        //         currency: "inr",
        //         payment_method_types: ['card'],
        //     })

        const session = await stripe.checkout.sessions.create({
            line_items: [
              {
                price_data: {
                  currency: 'inr',
                  product_data: {
                    name: 'T-shirt',
                  },
                  unit_amount: 2000,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/payment-success',
            cancel_url: 'http://localhost:3000/payment-cancel',
          });

        return {doc: session}


    }
    catch (error) {
        throw ('transaction failed')
    }
}

module.exports = {
    save,
    patch,
    remove,
    getAll,
    getByUserId,
    getIncome,
    payment
}