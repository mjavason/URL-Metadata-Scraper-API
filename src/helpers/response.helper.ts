import { MESSAGES } from '../constants';
import { HttpStatus } from '@nestjs/common';

export function SuccessMsgResponse(message = MESSAGES.SUCCESSFUL) {
  return { status: HttpStatus.OK, message };
}

export function SuccessResponse(data: any, message = MESSAGES.SUCCESSFUL) {
  return { status: HttpStatus.OK, message, data };
}

HttpStatus.CREATED;
