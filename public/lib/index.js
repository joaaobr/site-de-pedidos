function POSThttp(url, OBJbody) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(OBJbody),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        return resolve(res.text());
        console.log(res);
        return res.text();
      }
      reject(res);
      console.log(reject);
    });
  });
}
