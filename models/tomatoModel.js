import mongoose from 'mongoose';

const tomatoSchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tomato = mongoose.model('Tomato', tomatoSchema, 'Tomato');

export default Tomato;
