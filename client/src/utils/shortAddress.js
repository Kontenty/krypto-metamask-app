export const shortAddress = (address) =>
  address?.length
    ? `${address.slice(0, 5)}....${address.slice(address.length - 4)}`
    : ' ....';
