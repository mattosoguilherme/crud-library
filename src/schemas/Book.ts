import {Document, Schema, Model, model} from 'mongoose'


const BookSchema = new Schema ({
    title: String,
    publishing_company: String,
    authors: Array,
},{
    timestamps:true
})

export default model('Book',BookSchema)