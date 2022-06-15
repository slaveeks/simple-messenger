interface Message {
    type: string;
}

export interface RequestMessage<ApiRequest> extends Message{
    messageId: string;
    payload: ApiRequest;
}

export interface ResponseMessage<ApiResponse> extends RequestMessage<ApiResponse> {
}

