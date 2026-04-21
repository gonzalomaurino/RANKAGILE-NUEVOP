import { Lead } from '../models/Lead.js';

const store = [];

export const contactRepository = {
  async save(data) {
    const lead = new Lead({ id: store.length + 1, ...data });
    store.push(lead);
    return lead;
  },
  async list() {
    return [...store];
  },
};
