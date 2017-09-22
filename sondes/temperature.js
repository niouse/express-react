const client = new ZetaPush.WeakClient({
  // Url de la l'API de demo, à supprimer pour appeler l'Url de production
  apiUrl: 'https://demo-2.zpush.io/zbo/pub/business/',
  sandboxId: 'Q8RxNfar',
});

// Création d'un service de macro pour appeler le code Zms sur le backend Zetapush
const service = client.createService({
  Type: ZetaPush.services.Macro,
});

function inject() {
  const li = document.createElement('li');
  const temperature = Math.round(1000 * Math.random());
  li.textContent = Date.now() + '==>' + temperature;
  document.querySelector('ul').appendChild(li);
  // Appel de la macro pushRigoleTemperature
  service.call({
    name: 'pushRigoleTemperature',
    parameters: {
      temperature: temperature,
    },
  });
}

// Handler de connection à l'API
client.onConnectionEstablished(() => {
  document.querySelector('main').textContent = 'onConnectionEstablished';
  let delay = 1000;
  setTimeout(function loop() {
    inject();
    setTimeout(loop, delay);
  }, delay);
});

// Connection à l'API ZetPush
client.connect();
