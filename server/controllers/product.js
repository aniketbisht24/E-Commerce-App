const { save: saveSchema, getById: getByIdSchema, patch: patchSchema } = require('../dto-schemas/product')
const { Product: ProductService } = require('../services')
const Validator = require('../utils/validator')

const save = async (req, res) => {
    try {
        const { body } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: body, schema: saveSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await ProductService.save(validData);

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

        const { errors, doc } = await ProductService.patch(validData);

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

        const { errors, doc } = await ProductService.remove(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}

const getById = async (req, res) => {
    try {
        const { params: { id } } = req;

        const { errors: validateErrors, data: validData } = Validator.isSchemaValid({ data: {id}, schema: getByIdSchema })

        if (validateErrors) {
            res.status(400).json(validateErrors);
        }

        const { errors, doc } = await ProductService.getById(validData);

        if (errors) {
            res.status(404).json(errors);
        }

        res.status(201).json(doc)
    } catch (error) {
        res.status(500).json({ errors: error })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const { query: { new: latest, category } } = req;

        const data = {latest, category}

        const { errors, doc } = await ProductService.getAllProducts(data);

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
    getById,
    getAllProducts
}