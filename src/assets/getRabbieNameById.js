const getRabbieNameById = (id) => {
  let rabbieName = "";

  switch (id) {
    case 13:
      rabbieName = "הרב ישי ויצמן";
      break;
    case 14:
      rabbieName = "הרב מנחם ויצמן";
      break;
    case 30:
      rabbieName = "הרב יהושע ויצמן";
      break;
    case 104:
      rabbieName = "הרב שמעון הרבסט";
      break;
    case 108:
      rabbieName = "הרב אלעזר אהרנסון ";
      break;
    case 110:
      rabbieName = "כל הרבנים";
      break;

    default:
      rabbieName = "חסר שם רב";
  }
  return rabbieName;
};

export default getRabbieNameById;
