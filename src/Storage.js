// store folders in LocalStorage
class Storage {
  constructor() {
    this.folders = JSON.parse(localStorage.getItem("folders")) || [];
  }

  save() {
    localStorage.setItem("folders", JSON.stringify(this.folders));
  }

  add(folder) {
    this.folders.push(folder);
    this.save();
  }

  remove(folder) {
    this.folders = this.folders.filter((f) => f !== folder);
    this.save();
  }
}
