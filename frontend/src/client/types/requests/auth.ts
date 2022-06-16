import {RequestMessage} from "../base/message";

export interface AuthRequestPayload {
    /**
     * Some authorization token
     */
    token: string;
}

/**
 * Describes the request for authorize
 */
export interface AuthRequest extends RequestMessage<AuthRequestPayload>{
    type: 'authorize'
}
