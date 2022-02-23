const express = require('express')
const models = require('./models')
const router = express.Router()

const Team = models.Team
const Rider = models.Rider

router.route('/teams')
  .get((req, res) => {
    Team.find({}, (err, teams) => {
      if (err) {
        res.json(err)
      } else {
        res.json(teams)
      }
    })
  })

  .post((req, res) => {
    const team = new Team({
      team: req.body.team,
      manager: req.body.manager,
      manufacturer: req.body.manufacturer
    })
    team.save(err => {
      if (err) {
        res.json(err)
      } else {
        res.json({
          show: true,
          message: `Team "${team.team}" was successfully created!`
        })
      }
    })
  })

router.route('/teams/:id')
  .get((req, res) => {
    Team.findById(req.params.id, (err, team) => {
      if (err) {
        res.json(err)
      } else {
        res.json(team)
      }
    })
  })

  .put((req, res) => {
    Team.findById(req.params.id, (err, team) => {
      if (err) {
        res.json(err)
      } else {
        team.team = req.body.team
        team.manager = req.body.manager
        team.manufacturer = req.body.manufacturer
        team.save((err) => {
          if (err) {
            res.json(err)
          } else {
            res.json({
              show: true,
              message: `Team "${team.team}" was successfully updated!`
            })
          }
        })
      }
    })
  })

  .delete((req, res) => {
    Team.findByIdAndRemove(req.params.id, (err, team) => {
      if (err) {
        res.json(err)
      } else {
        res.json({
          show: true,
          message: `Team "${team.team}" was successfully deleted!`
        })
      }
    })
  })

router.route('/teams/:teamId/riders/')
  .post((req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      const rider = new Rider({
        rider: req.body.rider,
        number: req.body.number,
        country: req.body.country,
        mechanic: req.body.mechanic
      })
      team.riders.push(rider)
      team.save(err => {
        if (err) {
          res.json(err)
        } else {
          res.json({
            show: true,
            message: `Rider "${rider.rider}" was successfully created!`
          })
        }
      })
    })
  })

router.route('/teams/:teamId/riders/:id')
  .get((req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      let rider = team.riders.id(req.params.id)
      if (err) {
        res.json(err)
      } else {
        res.json(rider)
      }
    })
  })

  .put((req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      let rider = team.riders.id(req.params.id)
      rider.set({
        rider: req.body.rider,
        number: req.body.number,
        country: req.body.country,
        mechanic: req.body.mechanic
      })
      team.save(err => {
        if (err) {
          res.json(err)
        } else {
          res.json({
            show: true,
            message: `Rider "${rider.rider}" was successfully updated!`
          })
        }
      })
    })
  })

  .delete((req, res) => {
    Team.findById(req.params.teamId, (err, team) => {
      let rider = team.riders.id(req.params.id)
      rider.remove()
      team.save(err => {
        if (err) {
          res.json(err)
        } else {
          res.json({
            show: true,
            message: `Rider "${rider.rider}" was successfully deleted!`
          })
        }
      })
    })
  })

module.exports = router
