import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  language: string;
  country: string;
  //   About subscription
  isSubscribed: boolean;
  subscriptionId: string;
  subscriptionPlan: string;
  subscriptionStatus: string;
  subscriptionStart: Date;
  subscriptionEnd: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    //   About subscription
    isSubscribed: {
      type: Boolean,
      required: true,
    },
    subscriptionId: {
      type: String,
    },
    subscriptionPlan: {
      type: String,
    },
    subscriptionStatus: {
      type: String,
    },
    subscriptionStart: {
      type: Date,
    },
    subscriptionEnd: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
