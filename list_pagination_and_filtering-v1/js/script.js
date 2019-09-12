//Gloabal variables that stores DOM element
const listItem = document.getElementsByClassName('student-item');
const studentsPerPage = 10;

//created a showPage function that hides all students except the 10 studentson each page
function showPage(list, page) {
   //Created two variables to store the start index and the end index 
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage) - 1;

   //loops over the list parameters
   for(let i = 0; i < list.length; i += 1) {
      //displays any list item with an index that is >= to start index var and <= end index var
      if ((i >= startIndex) && (i <= endIndex)) {
         list[i].style.display = '';
      }
      else {
         list[i].style.display = 'none';
      }
   }
};
   showPage(listItem, 1);


//created appendPageLinks function
function appendPageLinks(list) {
   const numberOfPages = Math.round((list.length / studentsPerPage) + 1);
   const container = document.querySelector('.page');
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const ul = document.createElement('ul');

      for (let i = 1; i <= numberOfPages; i += 1) {
         const li = document.createElement('li');
         const a = document.createElement('a');
         a.textContent = i;
         a.href = '#';
         li.appendChild(a);
         ul.appendChild(li);

         if (i === 1) {
            a.className = 'active';
         }

         // click event listener for each A element
         li.addEventListener('click', (event) => {
            const clickLinks = document.querySelectorAll('a');
            const isClicked = event.target;

            showPage(listItem, isClicked.textContent);
               for (let i = 0; i < clickLinks.length; i++) {
                  clickLinks[i].classList.remove('active');
                     if (isClicked){
                        isClicked.className = 'active';
                     }
               }
         });
      }
      paginationDiv.appendChild(ul);
      container.appendChild(paginationDiv);
};

appendPageLinks(listItem);

