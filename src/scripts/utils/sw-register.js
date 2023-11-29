/* eslint-disable no-empty */
import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
  }
};

export default swRegister;
