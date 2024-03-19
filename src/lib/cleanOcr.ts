
const cleanText = (voterInfo:string)=>{

const startIndex = voterInfo?.indexOf("NIK :");
const cleanedInfo = voterInfo?.substring(startIndex);

const reg = /[a-zA-Z \s\/]*.[\: \+ \~]/
let arrayInfo = cleanedInfo?.split("\n")

const cleanInfo = (array: string[], regex: RegExp): string[] => {
  return array?.map((x) => x.replace(regex, "").trim());
};

const cleanedArrayInfo: string[] = cleanInfo(arrayInfo, reg)
return cleanedArrayInfo


}

export default cleanText
