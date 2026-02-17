import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPayout extends Document {
  partnerId: mongoose.Types.ObjectId;
  amount: number;
  status: 'processing' | 'paid' | 'failed';
  method: string;
  reference?: string; // Transaction ID
  processedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PayoutSchema: Schema = new Schema({
  partnerId: { type: Schema.Types.ObjectId, ref: 'Partner', required: true },
  amount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['processing', 'paid', 'failed'],
    default: 'processing' 
  },
  method: { type: String, required: true },
  reference: { type: String },
  processedAt: { type: Date },
}, { timestamps: true });

const Payout: Model<IPayout> = mongoose.models.Payout || mongoose.model<IPayout>('Payout', PayoutSchema);

export default Payout;
