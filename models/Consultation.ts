import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IConsultation extends Document {
  name: string;
  email: string;
  topic?: string;
  scheduledDate?: Date;
  status: 'requested' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: Date;
}

const ConsultationSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  topic: { type: String },
  scheduledDate: { type: Date },
  status: { 
    type: String, 
    enum: ['requested', 'scheduled', 'completed', 'cancelled'],
    default: 'requested' 
  },
  createdAt: { type: Date, default: Date.now },
});

const Consultation: Model<IConsultation> = mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', ConsultationSchema);

export default Consultation;
