// Passo 2: constructor + prototype
    function Book(title, author, pages, read = false) {
      if (!new.target) throw Error("Use 'new' para criar um Book");
      this.id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      this.title = title;
      this.author = author;
      this.pages = Number(pages);
      this.read = Boolean(read);
    }

    Book.prototype.info = function() {
      const readText = this.read ? "lido" : "não lido";
      return `${this.title} de ${this.author}, ${this.pages} páginas, ${readText}`;
    };

    Book.prototype.toggleRead = function() {
      this.read = !this.read;
      return this.read;
    };

    // Passo 3: data store
    const myLibrary = [];
    function addBookToLibrary({ title, author, pages, read }) {
      const book = new Book(title, author, pages, read);
      myLibrary.push(book);
      return book;
    }

    // Passo 4: render
    const libraryContainer = document.getElementById('library');
    function renderLibrary() {
      libraryContainer.innerHTML = '';
      myLibrary.forEach(book => {
        const card = document.createElement('article');
        card.className = 'book-card';
        card.dataset.id = book.id;

        card.innerHTML = `
          <h4>${book.title}</h4>
          <p>Autor: ${book.author}</p>
          <p>Páginas: ${book.pages}</p>
          <p>Status: <span class="read-status">${book.read ? 'Lido' : 'Não lido'}</span></p>
          <div class="controls">
            <button class="toggle-read">Alternar Leitura</button>
            <button class="remove-book">Remover</button>
          </div>
        `;

        const toggleBtn = card.querySelector('.toggle-read');
        const removeBtn = card.querySelector('.remove-book');

        toggleBtn.addEventListener('click', () => toggleBookRead(book.id));
        removeBtn.addEventListener('click', () => removeBook(book.id));

        libraryContainer.appendChild(card);
      });
    }

    // Passo 5: remove/toggle
    function removeBook(id) {
      const idx = myLibrary.findIndex(b => b.id === id);
      if (idx === -1) return;
      myLibrary.splice(idx, 1);
      renderLibrary();
    }

    function toggleBookRead(id) {
      const book = myLibrary.find(b => b.id === id);
      if (!book) return;
      book.toggleRead();
      renderLibrary();
    }

    // Passo 6: form/dialog handling
    const newBookBtn = document.getElementById('newBookBtn');
    const bookDialog = document.getElementById('bookDialog');
    const bookForm = document.getElementById('bookForm');
    const cancelBtn = document.getElementById('cancelBtn');

    newBookBtn.addEventListener('click', () => bookDialog.showModal());
    cancelBtn.addEventListener('click', () => bookDialog.close());

    bookForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(bookForm);
      const data = {
        title: formData.get('title').trim(),
        author: formData.get('author').trim(),
        pages: formData.get('pages'),
        read: formData.get('read') === 'on'
      };
      addBookToLibrary(data);
      bookForm.reset();
      bookDialog.close();
      renderLibrary();
    });

    // Passo 7: init
    document.addEventListener('DOMContentLoaded', () => {
      addBookToLibrary({ title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: false });
      addBookToLibrary({ title: 'Clean Code', author: 'Robert C. Martin', pages: 464, read: true });
      renderLibrary();
    });