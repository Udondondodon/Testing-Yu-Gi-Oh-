/* eslint-disable no-console */
const Dashboard = {
  async render() {
    return `
        <h2>Selamat datang di Website Gacha</h2>
        <div class="card-list" id="card-list"></div>
        <a href="/#/gacha"><button>Gacha</button></a>
    `;
  },

  async afterRender() {
    console.log('hello');
  },
};

export default Dashboard;
