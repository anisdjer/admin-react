const userRepo = require('../app/repositories/user');
const tweetRepo = require('../app/repositories/tweet');

tweetRepo.sync({force: true})
.then(() => {

  userRepo.sync({force: true})
  .then(() => {
    for(let i = 1; i <= 20; i += 1) {
      userRepo.create({
        username: `anis_${i}`,
        password: `pass_${i}`,
        firstName: `Anis ${i}`,
        lastName: `Bouhachem ${i}`
      })
      .then(() => {
        for(let j = 1; j <= 20; j += 1) {
          tweetRepo.create({
            userId: 1,
            body: `Tweet ${j} of user Anis ${i}`
          });
        }
      });
    }
  });
})
