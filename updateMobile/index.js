import { call, put } from 'redux-saga/effects'

import {
  updatemobilenumbersuccess,
  updatemobilenumberfailure,
} from '../../reducers/updateMobileNumberReducer'
import { getTransactionID } from '../../utils/utils'
import { mapErrorData } from '../../utils/errorMapping'
import * as ApiConfig from '../../utils/apiConfig'
import createApiHeaders from '../../apis/api-headers'

export const updateMobileNumberAction = (requestParam) => {
  const updateMobileService = ApiConfig.getApiConfig()
  return updateMobileService.put(
    ApiConfig.apiUriConfig.updateMobile,
    { ...requestParam },
    {
      headers: createApiHeaders(
        ApiConfig.apiUriConfig.updateMobile,
        {
          TransactionId: getTransactionID(),
        },
      ),
    },
  )
}

export function* updateMobile(action) {
  try {
    const response = yield call(updateMobileNumberAction, action.payload.requestParam)
    yield put(updatemobilenumbersuccess(response.data))
  } catch (error) {
    yield put(updatemobilenumberfailure(mapErrorData(error)))
  }
}

