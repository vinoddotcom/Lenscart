import mongoose from 'mongoose';

const productschema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: Object,
  title: Object,
  price: String,
  description: Object,
});

const Product =  mongoose.model("product", productschema);

export default Product;