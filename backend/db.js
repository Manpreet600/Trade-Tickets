import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastname: String,
    userName: String,
    email: String,
    city: String,
    password: String,
    image:{type:String,default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png"},
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
    description: String,
    date: { type: Date },
    image: { type: String , default: "https://www.shutterstock.com/shutterstock/photos/2556935065/display_1500/stock-vector-avatar-photo-default-user-icon-picture-face-social-2556935065.jpg"},
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