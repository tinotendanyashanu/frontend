import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDeal extends Document {
  partnerId: mongoose.Types.ObjectId;
  clientName: string;
  estimatedValue: number;
  finalValue?: number;
  commissionRate: number; // e.g., 0.10 for 10%
  commissionAmount?: number;
  dealStatus: 'registered' | 'under_review' | 'approved' | 'closed' | 'rejected';
  paymentStatus: 'pending' | 'received' | 'commission_paid';
  paymentMethod?: 'cash' | 'bank_transfer' | 'stripe' | 'other';
  notes?: string;
  closedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const DealSchema: Schema = new Schema({
  partnerId: { type: Schema.Types.ObjectId, ref: 'Partner', required: true },
  clientName: { type: String, required: true },
  estimatedValue: { type: Number, required: true },
  finalValue: { type: Number },
  commissionRate: { type: Number, default: 0.10 }, // Default 10% commissioned
  commissionAmount: { type: Number },
  dealStatus: { 
    type: String, 
    enum: ['registered', 'under_review', 'approved', 'closed', 'rejected'],
    default: 'registered' 
  },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'received', 'commission_paid'],
    default: 'pending' 
  },
  paymentMethod: { 
    type: String, 
    enum: ['cash', 'bank_transfer', 'stripe', 'other'] 
  },
  notes: { type: String },
  closedAt: { type: Date },
}, { timestamps: true });

const Deal: Model<IDeal> = mongoose.models.Deal || mongoose.model<IDeal>('Deal', DealSchema);

export default Deal;
