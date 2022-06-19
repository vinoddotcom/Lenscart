import { products  } from './constants/data.js';
import Product from './model/product-schema.js';

const DefaultData = () => {
    try {
        Product.insertMany(products);
        console.log('Inserted ' + products.length + ' products');
    } catch (error) {
        console.log("Error while loading DefaultData" , error.message);
    }
};

export default DefaultData;