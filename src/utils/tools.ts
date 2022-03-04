import { utils } from 'ethers'

export const isAddress = (address: string): boolean => {
  try {
    utils.getAddress(address)
  } catch (e) {
    return false
  }
  return true
}

export const isContract = async (
  provider: any,
  address: string
): Promise<boolean> => {
  const code = await provider.getCode(address)
  return code && code !== '0x'
}
