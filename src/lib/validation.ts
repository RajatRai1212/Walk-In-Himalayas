import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  trek: z.string().min(2),
  dates: z.string().min(2),
  groupSize: z.string().min(1),
  budget: z.enum(['Budget', 'Standard', 'Premium']),
  womenOnly: z.boolean().optional(),
  familyWithKids: z.boolean().optional(),
  message: z.string().min(5),
  honeypot: z.string().optional()
});

export const planTripSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  destination: z.string().min(2),
  dates: z.string().min(2),
  groupSize: z.string().min(1),
  interests: z.string().min(2),
  budget: z.enum(['Budget', 'Standard', 'Premium']),
  message: z.string().min(5),
  honeypot: z.string().optional()
});

export const womenOnlySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  trek: z.string().min(2),
  dates: z.string().min(2),
  groupSize: z.string().min(1),
  comfortNeeds: z.string().min(2),
  message: z.string().min(5),
  honeypot: z.string().optional()
});
