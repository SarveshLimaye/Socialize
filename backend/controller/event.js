const Event = require('../models/event')
const asyncHandler = require('express-async-handler')

const getEvents = async (req, res) => {
  res.status(200).json(await Event.find())
}

const indivisualEvent = async (req,res) => {
    let filterData = await Event.findOne({_id:req.params.id})
    res.status(200).send(filterData)
}

const filterMode = async (req,res) => {
    let filterData = await Event.find({mode:req.query.mode})
    res.status(200).send(filterData)
}

const filtertheme = async (req,res) => {
    let filterData = await Event.find({theme:req.query.theme})
    res.status(200).send(filterData)
}
const addEvent = asyncHandler(async(req,res) => {
    const {title, description, date, time, location, totalAttendees, price,mode ,theme,image ,createdBy} = req.body
    const eventExist = await Event.findOne({title})
    if(eventExist){
        res.status(400)
        throw new Error('Event already exist')
    }
    const event = await Event.create({title, description, date, time, location, totalAttendees, price,mode,theme,image,createdBy})

    if(event){
        res.status(201).json({
            _id: event._id,
            title: event.title,
            description: event.description,
            // date: event.date,
            // time: event.time,
            mode: event.mode,
            // location: event.location,
            // totalAttendees: event.totalAttendees,
            // price: event.price,
            theme: event.theme,
            // image: event.image,
            createdBy: event.createdBy
        })
    } else{
        res.status(400)
        throw new Error('Event not created')
    }
})

module.exports = {getEvents,addEvent ,filterMode ,filtertheme , indivisualEvent};