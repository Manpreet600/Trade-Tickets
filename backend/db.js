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
    sold: { type: Int8Array, default: 0 },
    bought: { type: Int8Array, default: 0 },
    createdAt: { type: Date, default: Date.now() },
}, { timestamps: true });


const ticketsSchema = new Schema({
    ticketId: { type: String, unique: true },
    userName: String,
    email: String,
    type: String,
    description: String,
    date: { type: Date },
    image: String,
    status: { type: String, default: "pending" },
    purchaserUsername: String
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