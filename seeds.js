const models = require('./models')

const Rider = models.Rider
const Team = models.Team

Team.deleteMany({}, (err) => {
  if (err) {
    console.log(err);
  }
})

let team1 = new Team({
  team: 'Honda Racing',
  manager: 'Michael Scott',
  manufacturer: 'Honda'
})

let team2 = new Team({
  team: 'Kawasaki Racing',
  manager: 'Jack Donaghy',
  manufacturer: 'Kawasaki'
})

let team3 = new Team({
  team: 'Yamaha Racing',
  manager: 'Lucille Bluth',
  manufacturer: 'Yamaha'
})

let team4 = new Team({
  team: 'Suzuki Racing',
  manager: 'Homer Simpson',
  manufacturer: 'Suzuki'
})

let rider1 = new Rider({
  rider: 'Dwight Schrute',
  number: 1,
  country: 'USA',
  mechanic: 'Angela Martin'
})

let rider2 = new Rider({
  rider: 'Jim Halpert',
  number: 2,
  country: 'USA',
  mechanic: 'Pam Beesly'
})

let rider3 = new Rider({
  rider: 'Liz Lemon',
  number: 3,
  country: 'USA',
  mechanic: 'Kenneth Parcell'
})

let rider4 = new Rider({
  rider: 'Tracy Jordan',
  number: 4,
  country: 'USA',
  mechanic: 'Jenna Maroney'
})

let rider5 = new Rider({
  rider: 'Michael Bluth',
  number: 5,
  country: 'USA',
  mechanic: 'Tobias Funke'
})

let rider6 = new Rider({
  rider: 'Buster Bluth',
  number: 6,
  country: 'USA',
  mechanic: 'Gob Bluth'
})

let rider7 = new Rider({
  rider: 'Bart Simpson',
  number: 7,
  country: 'USA',
  mechanic: 'Moe Szyslak'
})

let rider8 = new Rider({
  rider: 'Lisa Simpson',
  number: 8,
  country: 'USA',
  mechanic: 'Ned Flanders'
})

let teams = [team1, team2, team3, team4]

let riders = [[rider1, rider2], [rider3, rider4], [rider5, rider6], [rider7, rider8]]

teams.forEach((team, i) => {
  team.riders.push(riders[i][0], riders[i][1])
  team.save((err) => {
    console.log(err);
  })
});
