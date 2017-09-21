const client = new ZetaPush.WeakClient({
  apiUrl: 'https://demo-2.zpush.io/zbo/pub/business/',
  sandboxId: 'Q8RxNfar',
});

const service = client.createService({
  Type: ZetaPush.services.Macro,
});

function inject() {
  const li = document.createElement('li');
  const temperature = Math.round(1000 * Math.random());
  li.textContent = Date.now() + '==>' + temperature;
  document.querySelector('ul').appendChild(li);
  service.call({
    name: 'pushRigoleTemperature',
    parameters: {
      temperature: temperature,
    },
  });
}

client.onConnectionEstablished(() => {
  document.querySelector('main').textContent = 'onConnectionEstablished';
  let delay = 1000;
  setTimeout(function loop() {
    inject();
    setTimeout(loop, delay);
  }, delay);
});

client.connect();
