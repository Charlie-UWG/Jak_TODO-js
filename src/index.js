import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、入力欄を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除する
    deleteFromInconpeleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除する
    deleteFromInconpeleteList(deleteButton.parentNode);
  });
  //divタグの下に要素を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 対象の親タグ（div）を未完了リストから削除する
const deleteFromInconpeleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
