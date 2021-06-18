const data = [
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "buy",
    "options_strategy": ["AAPL"],
    "price": "@ $210.22",
    "strategy_type": ["Momentum", "Lotto", "+7"],
    "open": "Opened 02/22/21",
    "close": null,
    "profit_loss": ["Up", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [37, false]
  },
  {
    "display_name": "Kevin (momentum)",
    "user_name": "kevin",
    "trade_action": "sold",
    "options_strategy": ["SPY", "put", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Day", "Momentum", "+2"],
    "open": "Opened 08/21/21",
    "close": "Closed 8:13 AM",
    "profit_loss": ["Made", "16%"],
    "likes": [37, true],
    "bookmarks": [7, true],
    "comments": [37, false]
  },
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "sold",
    "options_strategy": ["TSLA", "call", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Day", "Lotto", "+3"],
    "open": "Opened Yesterday",
    "close": null,
    "profit_loss": ["Down", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [0, false]
  },
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "Tesla",
    "options_strategy": ["iron condor", "08/18/21"],
    "price": "Credit $35",
    "strategy_type": ["Day"],
    "open": "Opened Yesterday",
    "close": null,
    "profit_loss": ["Up", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [37, false]
  },
  {
    "display_name": "Kevin (momentum)",
    "user_name": "kevin",
    "trade_action": "sold",
    "options_strategy": ["SPY", "put", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Day", "Vertical spread", "+2"],
    "open": "Opened Yesterday",
    "close": "Closed 8:13 AM",
    "profit_loss": ["Made", "16%"],
    "likes": [37, true],
    "bookmarks": [7, true],
    "comments": [37, false]
  },
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "sold",
    "options_strategy": ["TSLA", "call", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Long", "Diagonal put", "+7"],
    "open": "Opened Yesterday",
    "close": "Closed 8:13 AM",
    "profit_loss": ["Lost", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [37, false]
  },
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "AMZN",
    "options_strategy": ["iron condor", "08/18/21"],
    "price": "Debit $35",
    "strategy_type": ["Swing"],
    "open": "Opened Yesterday",
    "close": null,
    "profit_loss": ["Up", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [37, false]
  },
  {
    "display_name": "Kevin (momentum)",
    "user_name": "kevin",
    "trade_action": "sold",
    "options_strategy": ["SPY", "put", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Day", "Momentum", "+2"],
    "open": "Opened Yesterday",
    "close": "Closed 8:13 AM",
    "profit_loss": ["Made", "16%"],
    "likes": [37, true],
    "bookmarks": [7, true],
    "comments": [37, false]
  },
  {
    "display_name": "CKadera",
    "user_name": "ckadera",
    "trade_action": "sold",
    "options_strategy": ["TSLA", "call", "08/18/21"],
    "price": "@ $210.22",
    "strategy_type": ["Day", "Penny stocks"],
    "open": "Opened Yesterday",
    "close": null,
    "profit_loss": ["Up", "4%"],
    "likes": [24, false],
    "bookmarks": [7, false],
    "comments": [37, false]
  }
]
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')
const buttonCollapse = document.getElementById("collapseButton");
const navList = document.getElementsByClassName("nav-links");
const logo = document.getElementsByClassName("logo");
const middleButton = document.getElementsByClassName("middle-button");
const person_1 = "Ellipse 7.png";
const person_2 = "Ellipse 116.png";
const person_3 = "Ellipse 128.png";

const company_1 = "Tesla.svg";
const company_2 = "Vector.svg";  //Apple
const company_3 = "image 81.svg" //SPY
const company_4 = "Amazon.svg"

let imageSource = "";
let companySource = "";
let profitLossColor = ""
let open = true;

let result = '';
data.forEach((point) => {
  const { display_name, user_name, trade_action, options_strategy, price, strategy_type, open, close, profit_loss, likes, bookmarks, comments } = point;
  switch (user_name) {
    case "CKadera":
      imageSource = person_2;
      break;
    case "kevin":
      imageSource = person_3;
      break;
    default:
      imageSource = person_1;
  }
  switch (options_strategy[0]) {
    case "SPY":
      companySource = company_3;
      break;
    case "TSLA":
      companySource = company_1;
      break;
    case "AAPL":
      companySource = company_2;
      break;
    default:
      if (trade_action === "Tesla") {
        companySource = company_1;
      } else {
        companySource = company_4;
      }
  }
  switch (profit_loss[0]){
    case "Made":
      profitLossColor = "made";
      break;
    case "Down":
      profitLossColor = "down";
      break;
    case "Lost":
      profitLossColor = "lost";
      break;
    default:
      profitLossColor = "rip";
  }
  result = `
        <div class="alert-content ${(trade_action === "sold") ? "colors" : ""}" data-popup-trigger="one">
            <div class="alert-div">
              <div class="user-info">
              <div class="profile-pic">
                <img src="./assets/${imageSource}" />
              </div>
              <div>
                <h4>${display_name}</h4>
                <p>${user_name}</p>
              </div>
              </div>
            </div>
            <div class="alert-div">
              <div class="wrapper">
              <div class="company-logo">
                <img src="assets/${companySource}" />
              </div>
              ${(trade_action === "buy") ? `<p class="heading">Bought ${options_strategy[0]} shares <br /> <span>${price}</span></p>` :
      (trade_action === "sold") ? `<p class="heading">Sold ${options_strategy[0]} ${options_strategy[1]} ${options_strategy[2]} <br /> <span>${price}</span></p>` :
        `<p class="heading">${trade_action} ${options_strategy[0]} ${options_strategy[1]} <br /> <span>${price}</span></p>`
    }
            </div>
            </div>
            <div class="alert-div style-row">
              <div class="trade-style-row">
              <div class="trade-style-detail">${strategy_type[0]}</div>
              ${(strategy_type[1]) ? `<div class="trade-style-detail">${strategy_type[1]}</div>` : ""}
              ${(strategy_type[2]) ? `<div class="trade-style-detail">${strategy_type[2]}</div>` : ""}
            </div>
            </div>
            <div class="alert-div">
              <div>
                <span>${open}</span>
              </div>
              ${(close !== null ? `<div><span class="closed">${close}</span></div>` : "")}
            </div>
            <div class="alert-div">
              <div class="gain-loss ${profitLossColor}">${profit_loss[0]} ${profit_loss[1]}</div>
            </div>
            <div class="alert-div">
              <div class="action-buttons">
              <div><img src="assets/Like-2.svg" /><span>${likes[0]}</span></div>
              <div><img src="assets/Bookmark.svg" /><span>${bookmarks[0]}</span></div>
              <div><img src="assets/Comment-1.svg" /><span>${comments[0]}</span></div>
              </div>
            </div>
          </div>
        
        `
  document.getElementById("trade-alerts").innerHTML += result;
  imageSource = "";
  companySource = "";
});

buttonCollapse.addEventListener("click", function () {
  if (open === true) {
    const sidebar = document.getElementById("xtrade-sidebar");

    sidebar.style.width = "5%";
    logo[0].innerHTML = `<img src="assets/Group 882.svg" alt="logo">`;
    navList[0].innerHTML = `
    <li><a class="nav-buttons" href="#"> <img src="assets/Group 7137.svg" alt="icon"></a></li>
        <li><a class="nav-buttons" href="#"><img src="assets/trophy.svg" alt="icon"></a></li>
        <li><a class="nav-buttons" href="#"><img src="assets/hat-3 1.svg" alt="icon"></a></li>
    `;
    navList[0].style.textAlign = "center";
    middleButton[0].style.display = 'none';
    buttonCollapse.innerHTML = `<img class="flipped" src="assets/Collapse.svg" alt="icon">`
    open = false;
  } else {
    open = true;
    const sidebar = document.getElementById("xtrade-sidebar");

    sidebar.style.width = "50%";
    logo[0].innerHTML = `<img src="assets/Group 882.svg" alt="logo"> Xtrades`;
    navList[0].innerHTML = `
      <li><a class="nav-buttons" href="#"> <img src="assets/Group 7137.svg" alt="icon"> Alerts</a><span class="alert-no">32</span></li>
      <li><a class="nav-buttons" href="#"><img src="assets/trophy.svg" alt="icon"> Leaderboard</a></li>
      <li><a class="nav-buttons" href="#"><img src="assets/hat-3 1.svg" alt="icon"> Xhub</a></li>
    `;
    navList[0].style.textAlign = "left";
    middleButton[0].style.display = 'flex';
    buttonCollapse.innerHTML = `<img src="assets/Collapse.svg" alt="icon"> Collapse`
  }
})


document.getElementById("trade-alerts").addEventListener('click', () => {
    const popupModal = document.querySelector(`[data-popup-modal="one"]`)

    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    document.getElementById("1-popup-modal__close").addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
    })
    
    bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })
  })