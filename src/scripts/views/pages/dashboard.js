/* eslint-disable no-console */
const Dashboard = {
  async render() {
    return `
        <h2>Selamat datang di Website Gacha</h2>
        <div class="dashboard" id="dashboard">
          <a href="/#/gacha"><button id="gachaButton">Gacha</button></a>
        </div>
    `;
  },

  async afterRender() {
    console.log('hello');
  },
};

export default Dashboard;
