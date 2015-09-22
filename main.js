function SelectCamp(klassetrin) {
  for (i = 0; i < campList.length; i++) {
    if (campList[i].klassetrin === klassetrin || campList[i].klassetrin === 3) {
      if (new Date(campList[i].dateTo) - new Date() >= 0) {
        selectedCamp = i;
        UpdateCrontrolInfo();
        UpdateControlButtons();
        break;
      }
      if (i === campList.length-1) {
        selectedCamp = "";
        UpdateCrontrolInfo();
        UpdateControlButtons();
        alert("nooo");
      }
    }
  }
}