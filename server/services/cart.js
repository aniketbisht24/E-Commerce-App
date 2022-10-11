const Cart = require('../models/Cart')

const save = async (payload) => {
    try {
        const newCart = new Cart({ ...payload });

        await newCart.save();

        return { doc: 'Cart successfully saved' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const patch = async (payload) => {
    try {

        const updatedCart = await Cart.findByIdAndUpdate(
            id,
            {
                $set: data,
            },
            { new: true }
        )

        return { doc: 'Cart successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const remove = async (payload) => {
    try {
        const {id} = payload;
         
        await Cart.findByIdAndDelete(id)

        return { doc: 'Cart successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getByUserId = async (payload) => {
    try {
        const {userId} = payload;
        
        const doc = await Carts.findOne({
            userId
        });

        const {_doc} = doc;

        return { doc: _doc }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getAll = async (payload) => {
    try {
        const doc = await Cart.find()

        const newDoc = doc.map((element) => {
            const {_doc} = element;
            
            return {..._doc}
        })

        return { doc: newDoc }

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
    getByUserId
}