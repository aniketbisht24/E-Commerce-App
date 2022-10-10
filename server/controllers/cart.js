const { save: saveSchema, getById: getByIdSchema, patch: patchSchema } = require('../dto-schemas/cart')
const { Cart: CartService } = require('../services')
const Validator = require('../utils/validator')

const save = async (req, res) => {
    try {
        const { body } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: body, schema: saveSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await CartService.save(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const patch = async (req, res) => {
    try {
        const { params: { id } } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: body, schema: patchSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await CartService.patch(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const remove = async (req, res) => {
    try {
        const { params: { id } } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: body, schema: getByIdSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await CartService.remove(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const getByUserId = async (req, res) => {
    try {
        const { params: { id } } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: {id}, schema: getByIdSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await CartService.getByUserId(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const getAll = async (req, res) => {
    try {
        const { errors, doc } = await CartService.getAll(data);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

module.exports = {
    save,
    patch,
    remove,
    getByUserId,
    getAll
}