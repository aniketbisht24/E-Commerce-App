const Product = require('../models/Product')

const save = async (payload) => {
    try {

        const newProduct = new Product({ ...payload });

        await newProduct.save();

        return { doc: 'product successfully saved' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const patch = async (payload) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: data,
            },
            { new: true }
        )

        return { doc: 'product successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const remove = async (payload) => {
    try {
        const {id} = payload;

        await Product.findByIdAndDelete(id)

        return { doc: 'product successfully updated' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getById = async (payload) => {
    try {
        const { id } = payload

        const doc = await Product.findById(id)

        const {_doc} = doc
    
        return { doc: _doc }

    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getAllProducts = async (payload) => {
    try {
        const { category, latest } = payload

        if(latest){
            const doc = data = await Product.find().sort({createdAt: -1}).limit(5);
            
            const newDoc = doc.map((element) => {
                const {_doc} = element;

                return {..._doc}
            })
    
            return { doc: newDoc }
        }

        if(category){

            const doc = await Product.find({
                $and: [
                    {
                        categories: {
                            $in: [category],
                        },
                    }
                ]
            });
            const newDoc = doc.map((element) => {
                const {_doc} = element;

                return {..._doc}
            })
    
            return { doc: newDoc }
        }
    
        const doc = await Product.find();

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
    getById,
    getAllProducts
}