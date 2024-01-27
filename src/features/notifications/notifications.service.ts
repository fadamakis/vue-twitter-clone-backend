import Notification, {NotificationTypes} from "./notification.model";

async function getAll() {
  return await Notification.find({}).populate("tweet");
}

async function createOne() {
  return new Notification({ 
    type: NotificationTypes.Like
   }).save();
}

export default {
  getAll,
  createOne,
};
