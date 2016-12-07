var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    date: Date
});

// Duplicate the ID field.
projectSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
projectSchema.set('toJSON', {
    virtuals: true
});

projectSchema.pre('save', function(next){
    var date = new Date();
    if ( !this.date ) {
        this.date = date;
    }
    next();
});

mongoose.model('Project', projectSchema);