import { Category } from "../model/category.js";
import { Product } from "../model/product.js";

export const AddCategory = async (req, res) => {
    try {
        const data = await Category.create(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);

    }
};

export const GetAllProduct = async (req, res) => {
    try {
        const data = await Product.find(req.query).populate({ path: "category", select: "name" });
        res.send(data);
    } catch (error) {
        res.status(500).json(error);

    }
};

export const GetOneProduct = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id).populate({ path: "category", select: "name" });
        res.send(data);
    } catch (error) {
        res.status(500).json(error);

    }
};

export const AddProduct = async (req, res) => {
    try {
        const data = await Product.create(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);

    }
};

export const EditProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
