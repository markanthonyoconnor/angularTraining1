export class ServersDetails {

servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    },
  ];

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
