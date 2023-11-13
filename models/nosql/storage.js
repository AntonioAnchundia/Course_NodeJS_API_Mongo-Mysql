const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{type:String},
        filename:{type:Number},
    },
    {
        timestamps: true, //register createdAT, updateAT
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StorageScheme)