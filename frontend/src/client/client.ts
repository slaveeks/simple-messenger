import {ApiRequest} from './types';
import {RequestMessage} from './types/base/message';
import {nanoid} from 'nanoid';

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
    * Connection opening handler
    * @param  {Event} e [description]
    */
    this.socket.onopen = (e) => {
      console.log('[open] Connection with server opened');
      this.send('authorize', {token: '321'});
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
  * Send message
  *
  * @template ApiRequest
  * @param {ApiRequest} type - request type
  * @param {ApiRequest} payload - request payload
  */
  public send(type: ApiRequest['type'], payload: ApiRequest['payload']) {
    const message = JSON.stringify({
      messageId: Client.generateId(),
      type,
      payload,
    } as ApiRequest);
    this.socket.send(message);
  }

  /**
   * Generate id
   *
   * @return {string} - generated id
   */
  public static generateId() {
    return nanoid(10);
  }
}

const client = new Client<ApiRequest>('ws://localhost:8000/');

export default client;
