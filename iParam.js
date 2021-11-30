const iParam = (obj, b) => {
  var str = [];
  // nếu b == true thì mới lấy các giá trị phủ định
  for (var p in obj)
    if (obj.hasOwnProperty(p) && (obj[p] || b)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return "?" + str.join("&");
};

export default iParam;