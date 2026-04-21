import { contactRepository } from '../repositories/contact.repository.js';

export async function createLead(input) {
  return contactRepository.save({
    ...input,
    createdAt: new Date().toISOString(),
  });
}
