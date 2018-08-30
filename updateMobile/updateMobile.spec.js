import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { UPDATE_MOBILENUMBER_SUCCESS, UPDATE_MOBILENUMBER_FAILURE } from '../../reducers/updateMobileNumberReducer'

import * as updateMobileNumber from './index'

const successResponse = {
  data: {},
}
const errorResponse = {
  error: {},
}
const requestParams = {
  payload: {
    requestParam: {},
  },
}

const updateMobileNumberGenerator = updateMobileNumber.updateMobile(requestParams)
const expectedHeaders = {
  headers: {
    Authorization: '',
    PersonID: null,
    RequestID: expect.any(String),
    TransactionId: expect.any(String),
  },
}

describe('Update mobile number API Config', () => {
  test('Check update mobile number API Call', () => {
    expect(updateMobileNumberGenerator.next().value)
      .toEqual(call(
        updateMobileNumber.updateMobileNumberAction,
        requestParams.payload.requestParam,
      ))
  })

  test('Check for reducer call of api response', () => {
    expect(updateMobileNumberGenerator.next(successResponse).value).toEqual(put({
      payload: { data: true },
      type: UPDATE_MOBILENUMBER_SUCCESS,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(updateMobileNumberGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse,
      type: UPDATE_MOBILENUMBER_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    ApiConfig.getUUIDTimeBased = jest.fn()
    const mockGetFunction = { put: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockGetFunction)
    updateMobileNumber.updateMobileNumberAction(requestParams)
    expect(mockGetFunction.put).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.updateMobile,
      { ...requestParams },
      expectedHeaders,
    )
  })
})
