const router = require('express').Router();
let Debater = require('../models/debater.model');

router.route('/').get((req, res) => {
    Debater.find()
        .then(debaters => res.json(debaters))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
        
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const club = req.body.club;
        const cvpoints = Number(req.body.cvpoints);
        const game1 = Number(req.body.game1);
        const game2 = Number(req.body.game2);
        const game3 = Number(req.body.game3);
        const game4 = Number(req.body.game4);
    
        const newDebater = new Debater({
            firstname,
            lastname,
            club,
            cvpoints,
            game1,
            game2,
            game3,
            game4,
        });
    
        newDebater.save()
            .then(() => res.json('Debater added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').get((req, res) => {
    Debater.findById(req.params.id)
        .then(debater => res.json(debater))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

router.route('/delete/:id').delete((req, res) => {
    Debater.findByIdAndDelete(req.params.id)
        .then(() => res.json('Debater deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

router.route('/update/:id').post((req, res) => {
    Debater.findById(req.params.id)
        .then(debater => {
            debater.firstname = req.body.firstname;
            debater.lastname = req.body.lastname;
            debater.club = req.body.club;
            debater.cvpoints = Number(req.body.cvpoints);
            debater.game1 = Number(req.body.game1);
            debater.game2 = Number(req.body.game2);
            debater.game3 = Number(req.body.game3);
            debater.game4 = Number(req.body.game4);

            debater.save()
                .then(() => res.json('Debater updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
}
);

module.exports = router;

