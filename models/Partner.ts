import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPartner extends Document {
  name: string;
  email: string;
  companyName?: string;
  password?: string; // Optional because initial signups might be OAuth or awaiting password set
  role: 'partner' | 'admin';
  tier: 'referral' | 'agency' | 'enterprise';
  status: 'active' | 'suspended' | 'pending';
  bankDetails?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    sortCode?: string;
    iban?: string;
  };
  stats: {
    totalReferredRevenue: number;
    totalCommissionEarned: number;
    pendingCommission: number;
    paidCommission: number;
  };
  createdAt: Date;
  updatedAt: Date;
  verificationToken?: string;
  verificationTokenExpiry?: Date;
  resetPasswordToken?: string;
  resetPasswordTokenExpiry?: Date;
}

const PartnerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  companyName: { type: String },
  password: { type: String },
  role: { 
    type: String, 
    enum: ['partner', 'admin'],
    default: 'partner' 
  },
  tier: { 
    type: String, 
    enum: ['referral', 'agency', 'enterprise'],
    default: 'referral' 
  },
  status: { 
    type: String, 
    enum: ['active', 'suspended', 'pending'],
    default: 'pending' 
  },
  bankDetails: {
    accountName: String,
    accountNumber: String,
    bankName: String,
    sortCode: String,
    iban: String,
  },
  stats: {
    totalReferredRevenue: { type: Number, default: 0 },
    totalCommissionEarned: { type: Number, default: 0 },
    pendingCommission: { type: Number, default: 0 },
    paidCommission: { type: Number, default: 0 },
  },
  verificationToken: String,
  verificationTokenExpiry: Date,
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date,
}, { timestamps: true });

// Prevent recompilation of model in development
const Partner: Model<IPartner> = mongoose.models.Partner || mongoose.model<IPartner>('Partner', PartnerSchema);

export default Partner;
