const moongose=require("moongose")

const ordersSchema=new moongose.Schema(
    {
        id:{type:String},
        item_id:{type:String},
        item_name:{type:String},
        item_description:{type:String},
        price:{type:Number}
    }
);
    const Orders = mongoose.model("orders", ordersSchema);
    module.exports = Orders;
