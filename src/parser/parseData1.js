import { getFormattedDate } from "../helpers";

const parseData1 = (list) => {
  if (!(list && list.length)) {
    return null;
  }

  const resultList = [];

  list.forEach((item) => {
    const obj = {
      name: item.name,
      riskRatings: item.ratings || "None",
      count: item.count,
      exposed: item.list3 && item.list3.length ? item.list3 : null,
    };

    const list1 = [];

    (item.list1 || []).forEach((element) => {
      list1.push({
        source: element.breach_source,
        addedDate: element.added_date ? getFormattedDate(element.added_date) : null,
        breachDate: element.breach_date ? getFormattedDate(element.breach_date) : null,
        riskRatings: element.risk_ratings || "None",
      });
    });

    obj.list1 = list1.length ? list1 : null;

    const list2 = [];

    (item.list2 || []).forEach((element) => {
      list2.push({
        source: element.source,
        addedDate: element.added_date ? getFormattedDate(element.added_date) : null,
        breachDate: element.breach_date ? getFormattedDate(element.breach_date) : null,
      });
    });

    obj.list2 = list2.length ? list2 : null;

    resultList.push(obj);
  });

  return resultList;
};

export default parseData1;
