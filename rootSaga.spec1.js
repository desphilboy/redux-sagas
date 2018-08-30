import { rootSaga } from './index'

import { getProfile } from './getProfile'
import { PROFILE_REQUEST } from '../reducers/profileDetailsReducer'

import { updatePreferredName } from './preferredNameUpdate'
import { PREFERRED_NAME_UPDATE_REQUEST } from '../reducers/preferredNameReducer'

import { getOtherContacts } from './otherContacts'
import { OTHERCONTACTS_REQUEST } from '../reducers/otherContactsReducer'

import { updateOtherContacts } from './updateOtherContacts'
import { UPDATE_OTHERCONTACTS_REQUEST } from '../reducers/updateOtherContactsReducer'

import { getTrustedDevices } from './getTrustedDevices'
import { TRUSTED_DEVICES_REQUEST } from '../reducers/getTrustedDevices'

import { getAreaCode } from './getAreaCode'
import { AREACODE_REQUEST } from '../reducers/getAreaCode'

import { removeTrustedDevice } from './removeTrustedDevice'
import { REMOVE_TRUSTED_DEVICE } from '../reducers/removeTrustedDeviceReducer'

import { updatePassword } from './updatePassword'
import { UPDATE_PASSWORD_REQUEST } from '../reducers/updatePasswordReducer'

import { updatePin } from './updatePin'
import { UPDATE_PIN_REQUEST } from '../reducers/updatePinReducer'

import { logOut } from './logOut'
import { LOGOUT_REQUEST } from '../reducers/logOutReducer'

import { checkChallenge } from './updatePersonDetails/checkChallenge'
import { CHECK_CHALLENGE_REQUEST } from '../reducers/updatePersonDetails/checkChallengeReducer'

import { verifyChallenge } from './updatePersonDetails/verifyChallenge'
import { VERIFY_CHALLENGE_REQUEST } from '../reducers/updatePersonDetails/verifyChallengeReducer'

import { checkEligibility } from './checkEligibility'
import { CHECK_ELIGIBILITY } from '../reducers/checkEligibilityReducer'

import { createIdentifier } from './createIdentifier'
import { CREATE_IDENTIFIER } from '../reducers/createIdentifierReducer'

import { updatesAndOffers } from './updatesAndOffers/'
import { UPDATES_AND_OFFERS_REQUEST } from '../reducers/updatesAndOffersReducer'

import { getEmail } from './getEmail'
import { GET_EMAIL_REQUEST } from '../reducers/getEmail'

import { getCountryList } from './getCountryList'
import { COUNTRYLIST_REQUEST } from '../reducers/getCountryList'

import { updateMobile } from './updateMobile'
import { UPDATE_MOBILENUMBER_REQUEST } from '../reducers/updateMobileNumberReducer'

import { updateEmail } from './updateEmail'
import { UPDATE_EMAIL_REQUEST } from '../reducers/updateEmailReducer'

import { tokenExchangeToAMToken, tokenExchangeToIDToken } from './tokenExchange'
import { TOKEN_EXCHANGE_TO_AM_TOKEN, TOKEN_EXCHANGE_TO_ID_TOKEN } from '../reducers/tokenExchange'

const rootSagaGenerator = rootSaga()
const rootSagaResult = rootSagaGenerator.next().value

describe('Root Saga', () => {
  test('Check for length of all saga instances', () => {
    expect(rootSagaResult.ALL.length).toBe(19)
  })

  test('Check for get profile saga', () => {
    expect(rootSagaResult.ALL[0].FORK.args[0]).toBe(PROFILE_REQUEST)
    expect(rootSagaResult.ALL[0].FORK.args[1]).toBe(getProfile)
  })

  test('Check for mobile number update saga', () => {
    expect(rootSagaResult.ALL[1].FORK.args[0]).toBe(UPDATE_MOBILENUMBER_REQUEST)
    expect(rootSagaResult.ALL[1].FORK.args[1]).toBe(updateMobile)
  })

  test('Check for preferred name update saga', () => {
    expect(rootSagaResult.ALL[2].FORK.args[0]).toBe(PREFERRED_NAME_UPDATE_REQUEST)
    expect(rootSagaResult.ALL[2].FORK.args[1]).toBe(updatePreferredName)
  })

  test('Check for Other contact get saga', () => {
    expect(rootSagaResult.ALL[3].FORK.args[0]).toBe(OTHERCONTACTS_REQUEST)
    expect(rootSagaResult.ALL[3].FORK.args[1]).toBe(getOtherContacts)
  })

  test('Check for Other contact Update saga', () => {
    expect(rootSagaResult.ALL[4].FORK.args[0]).toBe(UPDATE_OTHERCONTACTS_REQUEST)
    expect(rootSagaResult.ALL[4].FORK.args[1]).toBe(updateOtherContacts)
  })

  test('Check for trusted devices get saga', () => {
    expect(rootSagaResult.ALL[5].FORK.args[0]).toBe(TRUSTED_DEVICES_REQUEST)
    expect(rootSagaResult.ALL[5].FORK.args[1]).toBe(getTrustedDevices)
  })

  test('Check for remove trusted device delete saga', () => {
    expect(rootSagaResult.ALL[6].FORK.args[0]).toBe(REMOVE_TRUSTED_DEVICE)
    expect(rootSagaResult.ALL[6].FORK.args[1]).toBe(removeTrustedDevice)
  })

  test('Check for update password saga', () => {
    expect(rootSagaResult.ALL[7].FORK.args[0]).toBe(UPDATE_PASSWORD_REQUEST)
    expect(rootSagaResult.ALL[7].FORK.args[1]).toBe(updatePassword)
  })

  test('Check for update pin saga', () => {
    expect(rootSagaResult.ALL[8].FORK.args[0]).toBe(UPDATE_PIN_REQUEST)
    expect(rootSagaResult.ALL[8].FORK.args[1]).toBe(updatePin)
  })

  test('Check for logout saga', () => {
    expect(rootSagaResult.ALL[9].FORK.args[0]).toBe(LOGOUT_REQUEST)
    expect(rootSagaResult.ALL[9].FORK.args[1]).toBe(logOut)
  })

  test('Check for get challenge saga', () => {
    expect(rootSagaResult.ALL[10].FORK.args[0]).toBe(CHECK_CHALLENGE_REQUEST)
    expect(rootSagaResult.ALL[10].FORK.args[1]).toBe(checkChallenge)
  })

  test('Check for verify challenge saga', () => {
    expect(rootSagaResult.ALL[11].FORK.args[0]).toBe(VERIFY_CHALLENGE_REQUEST)
    expect(rootSagaResult.ALL[11].FORK.args[1]).toBe(verifyChallenge)
  })

  test('Check for check eligibility saga', () => {
    expect(rootSagaResult.ALL[12].FORK.args[0]).toBe(CHECK_ELIGIBILITY)
    expect(rootSagaResult.ALL[12].FORK.args[1]).toBe(checkEligibility)
  })

  test('Check for create identifier saga', () => {
    expect(rootSagaResult.ALL[13].FORK.args[0]).toBe(CREATE_IDENTIFIER)
    expect(rootSagaResult.ALL[13].FORK.args[1]).toBe(createIdentifier)
  })

  test('get area code list saga', () => {
    expect(rootSagaResult.ALL[14].FORK.args[0]).toBe(AREACODE_REQUEST)
    expect(rootSagaResult.ALL[14].FORK.args[1]).toBe(getAreaCode)
  })

  test('Check for Other contact Update saga', () => {
    expect(rootSagaResult.ALL[15].FORK.args[0]).toBe(UPDATES_AND_OFFERS_REQUEST)
    expect(rootSagaResult.ALL[15].FORK.args[1]).toBe(updatesAndOffers)
  })

  test('get email saga', () => {
    expect(rootSagaResult.ALL[16].FORK.args[0]).toBe(GET_EMAIL_REQUEST)
    expect(rootSagaResult.ALL[16].FORK.args[1]).toBe(getEmail)
  })

  test('get country list saga', () => {
    expect(rootSagaResult.ALL[17].FORK.args[0]).toBe(COUNTRYLIST_REQUEST)
    expect(rootSagaResult.ALL[17].FORK.args[1]).toBe(getCountryList)
  })

  test('update email saga', () => {
    expect(rootSagaResult.ALL[18].FORK.args[0]).toBe(UPDATE_EMAIL_REQUEST)
    expect(rootSagaResult.ALL[18].FORK.args[1]).toBe(updateEmail)
  })

  test('access token exchange saga', () => {
    expect(rootSagaResult.ALL[19].FORK.args[0]).toBe(TOKEN_EXCHANGE_TO_AM_TOKEN)
    expect(rootSagaResult.ALL[19].FORK.args[1]).toBe(tokenExchangeToAMToken)
  })

  test('id token exchange saga', () => {
    expect(rootSagaResult.ALL[19].FORK.args[0]).toBe(TOKEN_EXCHANGE_TO_ID_TOKEN)
    expect(rootSagaResult.ALL[19].FORK.args[1]).toBe(tokenExchangeToIDToken)
  })
})
