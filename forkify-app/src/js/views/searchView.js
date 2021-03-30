class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parentElement.querySelector('input').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  #clearInput() {
    this.#parentElement.querySelector('input').value = '';
  }
}

export default new SearchView();
