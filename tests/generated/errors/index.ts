/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * NumericalOverflow: 'Numerical overflow'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'NumericalOverflow'
  constructor() {
    super('Numerical overflow')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new NumericalOverflowError())
createErrorFromNameLookup.set(
  'NumericalOverflow',
  () => new NumericalOverflowError()
)

/**
 * LatestProviderNodeReportCannotBeLowerThanPreviousReport: 'Latest Provider Node Report Cannot Be Lower Than Previous Report'
 *
 * @category Errors
 * @category generated
 */
export class LatestProviderNodeReportCannotBeLowerThanPreviousReportError extends Error {
  readonly code: number = 0x1771
  readonly name: string =
    'LatestProviderNodeReportCannotBeLowerThanPreviousReport'
  constructor() {
    super('Latest Provider Node Report Cannot Be Lower Than Previous Report')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(
        this,
        LatestProviderNodeReportCannotBeLowerThanPreviousReportError
      )
    }
  }
}

createErrorFromCodeLookup.set(
  0x1771,
  () => new LatestProviderNodeReportCannotBeLowerThanPreviousReportError()
)
createErrorFromNameLookup.set(
  'LatestProviderNodeReportCannotBeLowerThanPreviousReport',
  () => new LatestProviderNodeReportCannotBeLowerThanPreviousReportError()
)

/**
 * LatestClientReportCannotBeLowerThanPreviousReport: 'Latest Client Report Cannot Be Lower Than Previous Report'
 *
 * @category Errors
 * @category generated
 */
export class LatestClientReportCannotBeLowerThanPreviousReportError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'LatestClientReportCannotBeLowerThanPreviousReport'
  constructor() {
    super('Latest Client Report Cannot Be Lower Than Previous Report')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(
        this,
        LatestClientReportCannotBeLowerThanPreviousReportError
      )
    }
  }
}

createErrorFromCodeLookup.set(
  0x1772,
  () => new LatestClientReportCannotBeLowerThanPreviousReportError()
)
createErrorFromNameLookup.set(
  'LatestClientReportCannotBeLowerThanPreviousReport',
  () => new LatestClientReportCannotBeLowerThanPreviousReportError()
)

/**
 * SignerNotProviderNode: 'Signer Is Not A Valid Provider Node'
 *
 * @category Errors
 * @category generated
 */
export class SignerNotProviderNodeError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'SignerNotProviderNode'
  constructor() {
    super('Signer Is Not A Valid Provider Node')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, SignerNotProviderNodeError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new SignerNotProviderNodeError())
createErrorFromNameLookup.set(
  'SignerNotProviderNode',
  () => new SignerNotProviderNodeError()
)

/**
 * ClientNotProviderNode: 'Signer Is Not A Valid Client'
 *
 * @category Errors
 * @category generated
 */
export class ClientNotProviderNodeError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'ClientNotProviderNode'
  constructor() {
    super('Signer Is Not A Valid Client')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ClientNotProviderNodeError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new ClientNotProviderNodeError())
createErrorFromNameLookup.set(
  'ClientNotProviderNode',
  () => new ClientNotProviderNodeError()
)

/**
 * MismatchOnReportedUsage: 'Mismatch On Reported Usage'
 *
 * @category Errors
 * @category generated
 */
export class MismatchOnReportedUsageError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'MismatchOnReportedUsage'
  constructor() {
    super('Mismatch On Reported Usage')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MismatchOnReportedUsageError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new MismatchOnReportedUsageError())
createErrorFromNameLookup.set(
  'MismatchOnReportedUsage',
  () => new MismatchOnReportedUsageError()
)

/**
 * SignerMismatch: 'Signer mismatch'
 *
 * @category Errors
 * @category generated
 */
export class SignerMismatchError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'SignerMismatch'
  constructor() {
    super('Signer mismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, SignerMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new SignerMismatchError())
createErrorFromNameLookup.set('SignerMismatch', () => new SignerMismatchError())

/**
 * InvalidData: 'Invalid data'
 *
 * @category Errors
 * @category generated
 */
export class InvalidDataError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'InvalidData'
  constructor() {
    super('Invalid data')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidDataError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new InvalidDataError())
createErrorFromNameLookup.set('InvalidData', () => new InvalidDataError())

/**
 * AddressMismatch: 'Address mismatch'
 *
 * @category Errors
 * @category generated
 */
export class AddressMismatchError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'AddressMismatch'
  constructor() {
    super('Address mismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AddressMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new AddressMismatchError())
createErrorFromNameLookup.set(
  'AddressMismatch',
  () => new AddressMismatchError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
