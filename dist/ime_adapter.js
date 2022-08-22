// Adapte shuangpin ime ui.

// When Virtual Keyboard loading, connect shuangpin ime.

let imePort = null;


class IMEAdapter {
  
  #port;
  #handleMessageCb;
  #handleDisconnectCb;

  constructor() {
    this.#init();
    this.#handleDisconnectCb = this.onDisconnect.bind(this);
    this.#handleMessageCb = this.onMessage.bind(this);
  }

  #init() {
    this.#port = chrome.runtime.connect("enmcjlgogceppnhfkaimbjlcmcnmihbo");
    this.#port.onMessage(this.#handleMessageCb);
    this.#port.onDiconnect(this.#handleDisconnectCb);
  }

  onMessage(message, port) {
    switch(message['type']) {
      case "refresh":
        let { data } = message['data'];
        data

    }
  }

  onDisconnect(port) {

  }

}

