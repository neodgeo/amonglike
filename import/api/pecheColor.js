import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const pecheColorData = new Mongo.Collection('pecheColorData')

const pecheColorSchema = new SimpleSchema({
        activeColor:{
            type:String,
            label:"which color is activated",
            allowedValues:['red','yellow']
        },
        red:{
            type:String,
            label:"red image",
        },
        yellow:{
            type:String,
            label:"yellow image"
        }
})

pecheColorData.attachSchema(pecheColorSchema)

export {
    pecheColorData,
}