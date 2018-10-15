import moment from "moment";

export function PadWithZeros(number, length = 4) {
  var my_string = "" + number;
  while (my_string.length < length) {
    my_string = "0" + my_string;
  }
  return my_string;
}

export function getCurrentTimestamp() {
  const timeStamp = moment();
  const timeOffset = timeStamp.utcOffset();

  return [timeStamp.valueOf(), timeOffset];
}

  // Parses string from contentful videobackground content
  export function parseURL(str, title) {
    return `https:${str[0]}${title.fields.file.url}`;
  }