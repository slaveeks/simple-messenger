/**
 * Client websocket
 *
 */
class Client {
  socket: WebSocket;

  /**
  * constructor description
  * @param  {string} url [description]
  */
  constructor(url: string) {
    this.socket = new WebSocket(url);

    /**
    * constructor description
    * @param  {Event} e [description]
    */
    this.socket.onopen = (e) => {
      console.log('[open] Connection with server opened');
      this.socket.send('Hello server');
    };

    /**
    * constructor description
    * @param  {Event} e [description]
    */
    this.socket.onmessage = function(e) {
      console.log(e.data);
    };
  }

  /**
  * constructor description
  * @param  {string} data [description]
  */
  public send(data: string) {
    this.socket.send(data);
  }
}

const client = new Client('ws://localhost:8000/ws');

export default client;
