import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  fullName: string,
  username: string;
  password: string;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  mobileNumber?: string;
  role: string;
  gender: string;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {type: String, required: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: {
      type: String,
      required: false,
      unique: true,
      match: [/^\d{10}$/, 'Mobile number must be exactly 10 digits'],
    },
    role: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["teacher", "student", "other", "admin"],
    },
    gender: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["m", "f"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
