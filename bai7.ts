const xuLyDauVao = (input: string | number | boolean): void => {
  if (typeof input === 'string') {
    let isAllDigits = true;
    let demChuCai = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char >= '0' && char <= '9') {
        continue;
      } else {
        isAllDigits = false;
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
          demChuCai++;
        }
      }
    }

    if (isAllDigits) {
      const so = Number(input);
      console.log(so * so);
    } else {
      console.log(`${demChuCai} ky tu chu cai`);
    }
  }

  else if (typeof input === 'number') {
    if (input < 2) {
      console.log("khong phai so nguyen to");
      return;
    }

    let laNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i === 0) {
        laNguyenTo = false;
        break;
      }
    }

    console.log(laNguyenTo ? "la so nguyen to" : "khong phai so nguyen to");
  }

  else if (typeof input === 'boolean') {
    console.log(input ? "gia tri la true - tien hanh xu ly" : "gia tri la false - dung xu ly");
  }
};
