import {ApiRequest} from "./types";
import {AuthRequest} from "./types/requests/auth";
import {RequestMessage} from "./types/base/message";
import {json} from "stream/consumers";
import {nanoid} from "nanoid";

/**
 * Client websocket
 *
 */
class Client<ApiRequest extends RequestMessage<unknown>> {
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
      const obj = { token: '123' }
      const data = { payload: obj
                      } as AuthRequest
      this.send('authorize', {token: '123'});
    };

    /**
    * constructor description
    * @param  {Event} e [description]
    */
    this.socket.onmessage = function(e) {
      console.log(e.data);
    };

    this.socket.onclose = function(e) {
      console.log('Connection closed!');
    };
  }

  /**
  * constructor description
  * @param  {ApiRequest['type']} type - request type
  * @param  {ApiRequest['payload']} payload - request payload
  */
  public send(type: ApiRequest['type'], payload: ApiRequest['payload']) {
    const message = JSON.stringify({
      messageId: Client.generateId(),
      type,
      payload,
    } as ApiRequest)
    this.socket.send(message);
  }

  public static generateId() {
    return nanoid(10);
  }
}

const client = new Client<ApiRequest>('ws://localhost:8000/');

export default client;
