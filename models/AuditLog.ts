import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAuditLog extends Document {
  entityType: 'deal' | 'partner' | 'payout';
  entityId: mongoose.Types.ObjectId;
  action: string;
  performedBy: mongoose.Types.ObjectId; // User ID of admin or partner
  metadata?: Record<string, any>; // Flexible JSON for details
  createdAt: Date;
}

const AuditLogSchema: Schema = new Schema({
  entityType: { 
    type: String, 
    enum: ['deal', 'partner', 'payout'],
    required: true 
  },
  entityId: { type: Schema.Types.ObjectId, required: true },
  action: { type: String, required: true },
  performedBy: { type: Schema.Types.ObjectId, ref: 'Partner', required: true },
  metadata: { type: Schema.Types.Mixed },
}, { timestamps: { createdAt: true, updatedAt: false } }); // Only createdAt needed for logs

const AuditLog: Model<IAuditLog> = mongoose.models.AuditLog || mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);

export default AuditLog;
