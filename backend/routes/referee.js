const router = require('express').Router();
let Referee = require('../models/referee.model');

router.route('/').get((req, res) => {
    Referee.find()
        .then(referees => res.json(referees))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

router.route('/add').post((req, res) => {
    
        const name = req.body.name;
        const club = req.body.club;
    
        const newReferee = new Referee({
            name,
            club,
        });
    
        newReferee.save()
            .then(() => res.json('Referee added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
);

router.route('/:id').get((req, res) => {
    Referee.findById(req.params.id)
        .then(referee => res.json(referee))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

router.route('/:id').delete((req, res) => {
    Referee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Referee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

module.exports = router;