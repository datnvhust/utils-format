
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const numberWithCommas = (x = "") => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatAddress(string = '') {
	return string?.slice(0, 6) + "..." + string?.slice(-4)
}

export const formatHexAddress = (address) => {
  if (!address)
      return address
  let addressHex = address.slice(2)
  let formatAddressHex = addressHex.replace(/^0+/, '');
  return `0x${formatAddressHex}`
}

export function splitStringByLength(inputString, length) {
  let result = [];
  for (let i = 0; i < inputString.length; i += length) {
    result.push(inputString.slice(i, i + length));
  }
  return result;
}

export function timeSince(date) {

	var seconds = Math.floor((new Date() - date) / 1000);

	var interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + " years ago";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + " months ago";
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + " days ago";
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + " hours ago";
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + " minutes ago";
	}
	return Math.floor(seconds) + " seconds ago";
}

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}


export function roundOrKeep(num) {
  num = +num
  if (num <= 0) return num
  const init = num
  let exponent = 0
  while (num < 0.1 || exponent > 10) {
    exponent += 1;
    num *= 10
  }
  num = Math.floor(num * 100) / 100

  return Math.floor(init * (10 ** (exponent + 2))) / (10 ** (exponent + 2))
}