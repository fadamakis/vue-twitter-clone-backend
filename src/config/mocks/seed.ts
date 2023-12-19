import mongoose from "mongoose";
import { faker } from '@faker-js/faker';
import User from "../../features/users/user.model";
import Tweet from "../../features/tweets/tweet.model";
import connectDB from "../db";

connectDB()

clearDatabase().then(seedDatabase).then(() => {
  console.log('Seeded Succesfully!')
  process.exit();
})

async function seedDatabase() {

  const USERS_TO_CREATE = 3
  const TWEETS_PER_USER = 5

  for (let i = 0; i < USERS_TO_CREATE; i++) {
    const user = await new User({
      name: faker.person.fullName(),
      username: faker.internet.displayName()
    }).save()

    for (let i = 0; i < TWEETS_PER_USER; i++) {
      await new Tweet({
        text: faker.lorem.text(),
        owner: user._id
      }).save()
    }
  }
}


async function clearDatabase() {
  const collections = await mongoose.connection.collections;
  for (let collection in collections) {
    await collections[collection].deleteMany({});
  }
}