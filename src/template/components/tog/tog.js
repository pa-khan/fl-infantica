class Tog {
  constructor(element) {
    this.element = element;

    this.classOpen = '--open';
    this.speed = 2000;
    this.isOpen = false;
    this.interval = null;

    this.head = this.element.querySelector('.tog__head');
    this.body = this.element.querySelector('.tog__body');

    // this.body.style.transition = this.speed + 'ms';

    // if (this.element.classList.contains(this.classOpen)) {
    //   this.body.style.display = 'block';
    // } else {
    //   this.body.style.display = 'none';
    //   this.body.style.maxHeight = 0 + 'px';
    // }

    this.head.addEventListener('click', () => {

      this.element.classList.toggle(this.classOpen);
      this.isOpen = !this.isOpen;

      // if (this.isOpen) {
      //   this.body.style.display = 'block';
      //   this.body.style.maxHeight = this.body.scrollHeight + 'px';

      //   setTimeout(() => {
      //     this.body.removeAttribute('style');
      //     this.body.style.transition = this.speed + 'ms';
      //   }, this.speed);
      // } else {
      //   this.body.style.maxHeight = 0 + 'px';
      //   setTimeout(() => {
      //     this.body.style.display = 'none';
      //     this.body.style.transition = this.speed + 'ms';
      //   }, this.speed);
      // }


      // console.log(this.body);
    });
  }
}