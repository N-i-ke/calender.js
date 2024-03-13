function generateCalendar(year, month) {
  year = year || new Date().getFullYear();
  month = month || new Date().getMonth() + 1;

  const monthNames = [
    "",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  console.log("   " + year + "年 " + monthNames[month]);
  console.log(" 日 月 火 水 木 金 土");

  let week = "";
  for (let i = 0; i < firstDayOfMonth; i++) {
    week += "   ";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if ((day + firstDayOfMonth - 1) % 7 === 0) {
      console.log(week.trimRight());
      week = "";
    }
    week += (day < 10 ? " " : "") + day + " ";
  }

  if (week.trim() !== "") {
    console.log(week.trimRight());
  }
}

// コマンドライン引数から年と月を取得
const args = process.argv.slice(2);
let year, month;
if (args.length === 0) {
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
} else if (args.length === 1) {
  if (args[0] === "-m") {
    console.error("Error: 月の値がありません。");
    process.exit(1);
  }
  year = new Date().getFullYear();
  month = parseInt(args[0]);
} else if (args.length === 2) {
  if (args[0] !== "-m") {
    console.error("Error: 無効なオプションです。");
    process.exit(1);
  }
  year = new Date().getFullYear();
  month = parseInt(args[1]);
}

if (month < 1 || month > 12 || isNaN(month)) {
  console.error("Error: 無効な月の値です。");
  process.exit(1);
}

generateCalendar(year, month);
