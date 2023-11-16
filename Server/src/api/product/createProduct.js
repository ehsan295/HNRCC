const product = require("./../../models/product");
const insertproduct = async () => {
    try{
        const product = await product.create ({
            date:new Date(),
            detail: "product details" ,
            name: "productName",
            unit: 'piece',
            volume: 10,
            price: 20,
            picture: "path to picture",
            projectId: 1 ,
        });
        console.log("product created:", product);

    }catch (error){
        console.error('error creating product:',error);
    }finally{
        sequelize.close();
        }
} 
insertproduct();