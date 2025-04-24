import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    password: String
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