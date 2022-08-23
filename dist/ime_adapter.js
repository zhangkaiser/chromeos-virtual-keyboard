// Adapte shuangpin ime ui.

// When Virtual Keyboard loading, connect shuangpin ime.

let imePort = null;


export class IMEAdapter {
  
  #port;
  #handleMessageCb;
  #handleDisconnectCb;

  constructor() {
    this.#init();

    this.#handleDisconnectCb = this.onDisconnect.bind(this);
    this.#handleMessageCb = this.onMessage.bind(this);
  }

  #init() {
    // this.#port = chrome.runtime.connect("enmcjlgogceppnhfkaimbjlcmcnmihbo");
    // this.#port.onMessage(this.#handleMessageCb);
    // this.#port.onDiconnect(this.#handleDisconnectCb);
  }

  onMessage(message, port) {
    switch(message['type']) {
      case "refresh": // Show candidates and composition.
        let { data } = message['data'];
        

    }
  }

  getMessage(type) {
    return new Promise((resolve, reject) => {
      window.sendExternalMessage && sendExternalMessage("enmcjlgogceppnhfkaimbjlcmcnmihbo", {
        type
      }, resolve);
    });
  }


  onDisconnect(port) {

  }

}

