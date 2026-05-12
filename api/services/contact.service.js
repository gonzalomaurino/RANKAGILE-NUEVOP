import { contactRepository } from '../repositories/contact.repository.js';
import { sendLeadNotification } from './mail.service.js';

export async function createLead(input) {
  const lead = await contactRepository.save({
    ...input,
    createdAt: new Date().toISOString(),
  });
  sendLeadNotification({ ...lead, apellido: input.apellido }, { source: input.source })
    .catch((err) => console.error('[contact] notification error:', err.message));
  return lead;
}
