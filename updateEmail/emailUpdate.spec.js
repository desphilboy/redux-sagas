import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { UPDATE_EMAIL_SUCCESS, UPDATE_EMAIL_FAILURE } from '../../reducers/updateEmailReducer'
import { GET_EMAIL_REQUEST } from '../../reducers/getEmail'

import * as emailUpdate from './index'


const successResponse = {
  data: true,
}
const errorResponse = {
  error: {},
}
const requestParams = {
  payload: {
    requestParam: {},
  },
}
const expectedHeaders = {
  headers: {
    PersonID: null,
    RequestID: expect.any(String),
    TransactionId: expect.any(String),
  },
}

const emailUpdateGenerator = emailUpdate.updateEmail(requestParams)

describe('Update email API Config', () => {
  test('Check update email API Call', () => {
    expect(emailUpdateGenerator.next().value)
      .toEqual(call(
        emailUpdate.emailUpdateAction,
        requestParams.payload.requestParam,
      ))
  })

  test('Check for reducer call of api response', () => {
    expect(emailUpdateGenerator.next(successResponse).value).toEqual(put({
      payload: successResponse,
      type: UPDATE_EMAIL_SUCCESS,
    }))
  })

  test('Check for reducer call of get profile', () => {
    expect(emailUpdateGenerator.next().value).toEqual(put({
      payload: { inProgress: true },
      type: GET_EMAIL_REQUEST,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(emailUpdateGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse,
      type: UPDATE_EMAIL_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    ApiConfig.getUUIDTimeBased = jest.fn()
    const mockPostFunction = { put: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockPostFunction)
    emailUpdate.emailUpdateAction(requestParams)
    expect(mockPostFunction.put).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.updateEmail,
      { ...requestParams },
      expectedHeaders,
    )
  })
})
