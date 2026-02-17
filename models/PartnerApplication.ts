import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPartnerApplication extends Document {
  name: string;
  email: string;
  companyName: string;
  website?: string;
  partnershipType: 'referral' | 'agency' | 'enterprise';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

const PartnerApplicationSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  website: { type: String },
  partnershipType: { 
    type: String, 
    enum: ['referral', 'agency', 'enterprise'],
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now },
});

const PartnerApplication: Model<IPartnerApplication> = mongoose.models.PartnerApplication || mongoose.model<IPartnerApplication>('PartnerApplication', PartnerApplicationSchema);

export default PartnerApplication;
