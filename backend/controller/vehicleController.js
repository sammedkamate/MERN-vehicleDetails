const Vehicle = require('../models/vehicle');

const read = (req, res) => {
    Vehicle.find().sort({ createdAt: -1 }).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json({
                status: false,
                error: 'err: ' + err
            });
        }
        res.json({ status: true, data: data });
    });
};

const create = (req, res) => {
    const vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(result => {
            console.log('data: ' + result);
            res.json({ status: true, data: vehicle });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ status: false, error: 'Vehicle Not Registered!' })
        });
}

const readOne = (req, res) => {
    Vehicle.findById(req.params.id, function (err, data) {
        if (err) {
            console.log('err: ' + err);
            res.json({ status: false })
        } else {
            console.log(data);
            res.json({ status: true, data: data });
        }
    });
}

const editOne = (req, res) => {
    Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, data) {
        if (err) {
            console.log('err:' + err);
            res.json({ status: false });
        } else {
            res.json({ status: true, data: data })
        }
    });
}

const deleteOne = (req, res) => {
    Vehicle.findByIdAndDelete(req.params.id, function (err, data) {
        if (err) {
            console.log('err: ' + err);
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
}

module.exports = {
    read,
    create,
    readOne,
    editOne,
    deleteOne
}