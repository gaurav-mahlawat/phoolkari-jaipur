import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({name:String,slug:{type:String,unique:true},category:String,images:[String],price:Number,compareAtPrice:Number,sizes:[{size:String,stock:Number}],fabric:String,washCare:String,description:String,careInstructions:String,deliveryInfo:String,details:Object,rating:Number,reviewsCount:Number,flags:{isNew:Boolean,isBestseller:Boolean,onSale:Boolean}},{timestamps:true});
export const Product=mongoose.models.Product||mongoose.model('Product',productSchema);
const categorySchema=new mongoose.Schema({name:String,slug:{type:String,unique:true},image:String,gender:String,order:Number});
export const Category=mongoose.models.Category||mongoose.model('Category',categorySchema);
const couponSchema=new mongoose.Schema({code:{type:String,unique:true},type:String,value:Number,active:Boolean});
export const Coupon=mongoose.models.Coupon||mongoose.model('Coupon',couponSchema);
