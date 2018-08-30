import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { mapErrorData } from '../../utils/errorMapping'
import { updateemailsuccess, updateemailfailure } from '../../reducers/updateEmailReducer'
import { getemailrequest } from '../../reducers/getEmail'
import createApiHeaders from '../../apis/api-headers'
import { getTransactionID } from '../../utils/utils'

export const emailUpdateAction = (requestParam) => {
  const updateEmailService = ApiConfig.getApiConfig()
  return updateEmailService.put(
    ApiConfig.apiUriConfig.updateEmail,
    { ...requestParam },
    {
      headers: createAnzApiHeaders(
        ApiConfig.apiUriConfig.updateEmail,
        {
          TransactionId: getTransactionID(),
        },
      ),
    },
  )
}

export function* updateEmail(action) {
  try {
    const response = yield call(emailUpdateAction, action.payload.requestParam)
    yield put(updateemailsuccess(response.data))
    yield put(getemailrequest())
  } catch (error) {
    yield put(updateemailfailure(mapErrorData(error)))
  }
}
