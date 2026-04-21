export class Lead {
  constructor({ id, nombre, email, empresa, url, createdAt }) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.empresa = empresa ?? null;
    this.url = url ?? null;
    this.createdAt = createdAt;
  }
}
