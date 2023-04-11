function setHeroHeight() {
    let nav = document.querySelector("#navigation");
    if (nav) {
      this.navHeight = nav.offsetHeight;
    } else {
      this.navHeight = 0;
    }
  }