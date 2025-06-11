 //sessionStorage.setItem("userName","suri");
// sessionStorage.setItem("BankName","SBI");

// sessionStorage.removeItem("userName");
// sessionStorage.removeItem("bankName");

//sessionStorage.clear();
sessionStorage.setItem("userName","suri");

let userName = sessionStorage.getItem("userName");
document.write(`welcome${userName}`);