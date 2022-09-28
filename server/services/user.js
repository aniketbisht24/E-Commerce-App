const CryptoJS = require('crypto-js')
const User = require('../models/User')

const patch = async (payload) => {
    const { password, username, id } = payload;

    try {
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

        const doc = await User.findByIdAndUpdate(id, {
            username,
            password: encryptedPassword
        }, { new: true })

        return { doc }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const remove = async (payload) => {
    const { id } = payload;

    try {
        await User.findByIdAndDelete(id);

        return { doc: 'User has been successfully delete' }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

const getById = async (payload) => {
    const { id } = payload;

    try {
        const res = await User.findById(id);

        const {password, ...doc} = res

        return { doc }
    }
    catch (error) {
        throw ('transaction failed')
    }
}


const get = async (payload) => {
    try {
        const users = await User.find();

        const doc = users.map((user) => {
            const {password, ...result} = user;

            return {result};
        })

        return { doc }
    }
    catch (error) {
        throw ('transaction failed')
    }
}

module.exports = {
    patch,
    remove,
    getById,
    get
}