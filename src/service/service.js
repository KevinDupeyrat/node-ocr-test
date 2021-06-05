const Thing = require('./../model/thing');

exports.createThing = (req, res, next) => {
    console.log('Creating new Thing');

    delete req.body._id;
    const thing = new Thing({ ...req.body });

    thing.save()
    .then(() => {res.status(201).json({message : 'Thing created'});})
    .catch((error) => { res.status(400).json({ error }); });
}

exports.getAllThings = (req, res, next) => {
    console.log('Get all things')

    Thing.find()
    .then((result) => { res.status(200).json(result); })
    .catch((error) => { res.status(400).json({ error }); });
}

exports.getOneThing = (req, res, next) => {
    console.log('Get thing')

    Thing.findOne({ _id: req.params.id })
    .then((thing) => { res.status(200).json(thing); })
    .catch((error) => { res.status(404).json({ error }); } );
}

exports.modifyThing = (req, res, next) => {
    console.log('Modify Thing')

    const thing = new Thing({ ...req.body });

    Thing.updateOne({_id: req.params.id}, thing)
    .then(() => { res.status(201).json({message: 'Thing updated successfully!'}); })
    .catch((error) => { res.status(400).json({ error: error }); });
}

exports.deleteThing = (req, res, next) => {
    console.log('Deleting Thing')

    Thing.deleteOne({_id: req.params.id})
    .then((result) => { res.status(200).json({message : 'Thing deleted'}); })
    .catch((e) => { res.status(400).json({error : e}); });

    res.status(200).json({message : 'Thing deleted'});
}