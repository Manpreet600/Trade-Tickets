import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastname: String,
    userName: String,
    email: String,
    city: String,
    password: String,
    number: String,
    avgPrice: { type: Number, default: 0 },
    image:{type:String,default:"https://www.shutterstock.com/shutterstock/photos/2556935065/display_1500/stock-vector-avatar-photo-default-user-icon-picture-face-social-2556935065.jpg"},
    sold: { type: Number, default: 0 },
    bought: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() },
    cardNumber: {type:String,default:""},
    expiryDate: {type:String,default:""},
    cvv: {type:String,default:""},
    paypal: {type:String,default:""},
    bankNumber: {type:String,default:""},
    ifsc: {type:String,default:""},
}, { timestamps: true });


const ticketsSchema = new Schema({
    ticketId: { type: String, unique: true },
    title : String,
    location : String,
    cost : Number,
    userName: String,
    email: String,
    type: String,
    number: String,
    description: String,
    date: { type: Date },
    image: { type: String , default: "https://images.pexels.com/photos/18515130/pexels-photo-18515130.jpeg"},
    status: { type: String, default: "pending" },
    purchaserUsername: String,
    createdAt: { type: Date, default: Date.now() },
}, {
    timestamps: true
})

const eventSchema = new Schema({
    name: String,
    description: String,
    date: { type: Date },
    time: String,
    location: String,
    image: String
})


const userModel = mongoose.model('User', userSchema);
const ticketsModel = mongoose.model('Tickets', ticketsSchema);
const eventModel = mongoose.model('Event', eventSchema);


export {
    userModel,
    ticketsModel,
    eventModel
}