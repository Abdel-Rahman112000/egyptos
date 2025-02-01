function isRtl(lang: string): boolean {
  let isRtl = false;
  switch (lang) {
    // if another rtl language added add another case to this specific language
    case "ar":
      isRtl = true;
      break;
  }
  return isRtl;
}

export default isRtl;
