import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "../../features/users/user.model";
import Tweet from "../../features/tweets/tweet.model";
import connectDB from "../db";

connectDB();

clearDatabase()
  .then(seedDatabase)
  .then(() => {
    console.log("Seeded Succesfully!");
    process.exit();
  });

async function seedDatabase() {
  const USERS_TO_CREATE = 16;

  for (let i = 0; i < USERS_TO_CREATE; i++) {
    const user = await new User({
      name: faker.person.fullName(),
      username: faker.internet.displayName(),
      avatar: faker.internet.avatar(),
      banner: faker.image.url(),
      bio: faker.person.bio(),
      location: faker.location.country(),
      website: faker.internet.domainName(),
    }).save();

    const TWEETS_PER_USER = faker.number.int(2);

    for (let i = 0; i < TWEETS_PER_USER; i++) {
      const text = faker.lorem.sentences({ min: 1, max: 4 });
      const hashtags = faker.lorem
        .words({ min: 1, max: 3 })
        .concat(` trend-${faker.number.int(5)}`)
        .split(" ")
        .map((word) => ` #${word}`);
      await new Tweet({
        body: text + hashtags,
        owner: user._id,
      }).save();
    }
  }
}

async function clearDatabase() {
  const collections = await mongoose.connection.collections;
  for (let collection in collections) {
    await collections[collection].deleteMany({});
  }
}
