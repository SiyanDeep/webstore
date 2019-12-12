function menuDisplay() {
  var y = document.getElementById("myLinks");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const settings = {
  notifySeatsRemaining: 5,
  coursesPerPage: 3,
  imagePath: 'img/'
}

const shoppingCart = [
  {courseid: 101, qty: 1}
];

const allCourses = [
  { // 0
    id: 101, 
    name: `Macbook Pro 16 (2019)`,
    brand: `Apple`,
    price: `3999.99`,
    start: { term: `Fall`, year: 2019 },
    return: true,
    category: `laptop`,
    available: 6,
    image: 'img/macbook16.png'
  },{  // 1
    id: 102, 
    name: `XPS 15 7590 (2019)`,
    brand: `Dell`,
    price: `4399.99`,
    start: { term: `Winter`, year: 2020 },
    return: true,
    category: `desktop`,
    available: 0,
    image: 'img/macbook16.png',
  },{ // 2
    id: 103, 
    name: `Pavilion Notebook`,
    brand: `HP`,
    price: `4750.99`,
    start: { term: `winter`, year: 2020 },
    return: false,
    category: `laptop`,
    image: 'img/macbook16.png',
    available: 2
  },{ // 3
    id: 104, 
    name: `ideapad`,
    brand: `Lenovo`,
    price: `5699.99`,
    start: { term: `Fall`, year: 2019 },
    return: true,
    category: `laptop`,
    image: 'img/macbook16.png',
    available: 12
  },{ // 4
    id: 105, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 5
    id: 106, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 6
    id: 107, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 7
    id: 108, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 08
    id: 109, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 9
    id: 110, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 10
    id: 111, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 11
    id: 112, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 12
    id: 113, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 13
    id: 114, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 14
    id: 115, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  }
  ,{ // 15
    id: 116, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 16
    id: 117, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 17
    id: 118, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 18
    id: 119, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  },{ // 19
    id: 120, 
    name: `aspire`,
    brand: `Acer`,
    price: `3199.99`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    return: true,
    category: `desktop`,
    image: 'img/macbook16.png',
    available: 10
  }
];


const addItemToCart = courseid => {
  // [ {courseid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.courseid == courseid);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
  } else {
    shoppingCart.push({courseid: courseid, qty: 1});
  }
  
  // if (this id already exist in the Array) {
  //   Update the quantity of the item
  // } else if (it does not exist) {
  //   Add a new item to the shoppingCart
  // }

  // Is it important to return a value here? 
  //    Why would we? Why not?
  // What else might we need/want this function to do? 
  //    If anything, weigh the pros/cons of doing it here vs elsewhere
}

// Sorting order function
const loadCoursesByOrder = (arrToSort, criteria) => {

  const sortedCourses = arrToSort.slice(); // clone the array

  if (criteria == 'weeksAsc') {
    // Smallest to largest
    sortedCourses.sort((a, b) => a.price - b.price);
  } else if (criteria == 'weeksDesc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => b.price - a.price);
  } else if (criteria == 'nameAsc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria == 'nameDesc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedCourses; // new array
}

// Filter
const runTheFilter = theForm => {

  const categoryToSearch = theForm.elements.categoryName.value;
  const nameToSearch = theForm.elements.courseName.value;
  const semesterToSearch = theForm.elements.semester.value;

  console.log(theForm.elements)

  // Filter all courses in multiple
  const filteredCourses = allCourses
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.category == categoryToSearch || categoryToSearch == "all")         // filter by category
    .filter(c => `${c.start.term } ${c.start.year}` == semesterToSearch || semesterToSearch == "all");        // filter by semester

  renderCoursesFromArray(filteredCourses);
}



// EVENT HANDLER FUNCTIONS **************

// Change the course layout from grid to rows 
const toggleCourseView = event => {
  document.getElementById('courses').classList.toggle('grid-view');
}

// If a course button was pressed
const loadCoursesFromTerm = event => {
  // const inStock = allCourses.filter(c => c.start.term == `Winter` && c.start.year == 2020);
  const inStock = allCourses.filter(c => c.available > "0");

  renderCoursesFromArray(inStock);
}

// If a "register" button is clicked
const handleClickOfCourses = event => {
  if (!event.target.matches('button.course-register')) {
    return;
  }
  const courseid = parseInt(event.target.dataset.courseid);
  addItemToCart(courseid);
}

// When the filter form itself is submit...
const filterTheCourses = event => {
  event.preventDefault(); // Prevent the submit form refreshing
  runTheFilter(event.target);
}

// When a filter form component is submit...
const submitTheFilterForm = event => {
  //document.getElementById('filtersForm').submit();
  runTheFilter(event.target.form);
}

// When sorting, ensure the filters run first (which leads to a render)
const sortTheCourses = event => {
  runTheFilter(document.getElementById('filtersForm'));
}


// NOTE, COULD ALSO RUN THE FILTER FROM THE RENDER IF THE RENDER KNOWS WHICH FORM IT SHOULD CHECK FIRST
// OR, COULD HAVE THE FORM SUBMIT AUTOMATICALLY WITH A SORT, WHICH IS POSSIBLY CLEANER



// FUNCTIONS THAT BUILD OUR VIEW **************

/*  Function: getCourseAsHtmlString
    Parameters: course:Object
    Return: String of HTML (<article>)
    Description: Allows our courses to be built using a template (for map())  */
const getCourseAsHtmlString = course => {

  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="course-register" data-courseid="${course.id}">Register</button>`;
  if (course.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (course.available < settings.notifySeatsRemaining) {
    callout = `<small class="callout urgent">Limited seats remaining</small>`;
  }

  return `
    <article class="course ${(course.category) ? `cat-${course.category}` : ''} ${soldout}">
      <h3 id="name">${course.name} ${callout}</h3>
      <img src="${course.image}" alt="${course.name}">
      <ul class="course-info">
        <li>Price (CAD $): <strong>${course.price}</strong></li>
        <li>Brand: <strong>${course.brand}</strong></li>
        <li>Return: <strong>${(course.return) ? 'Yes' : 'No'}</strong></li>
      </ul>
      ${register}
    </article>`;
}

const renderCoursesFromArray = arr => {

  // 1. SORT!!!
  const sortBy = document.getElementById('sortOrder').value;    // dropdown value
  arr = loadCoursesByOrder(arr, sortBy);  // sort the courses, reassign the new Array

  // 3. BUILD OUTPUT
  if (arr.length > 0) {
    document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n'); // Print courses  
  } else {
    document.getElementById('courses').innerHTML = 'Sorry, no matching results.' // Woops!
  }

  document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
  
}


/************* EXECUTABLE *************/

window.addEventListener('load', () => {

  // The course elements
  renderCoursesFromArray(allCourses);

  // UI elements
  document.getElementById('courseView').addEventListener('click', toggleCourseView);
  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
  document.getElementById('courses').addEventListener('click', handleClickOfCourses);
  document.getElementById('sortOrder').addEventListener('change', sortTheCourses);

  // The filter form
  document.getElementById('filtersForm').addEventListener('submit', filterTheCourses);

  // The filter form components
  document.getElementById('courseName').addEventListener('input', submitTheFilterForm);
  document.getElementById('categoryName').addEventListener('change', submitTheFilterForm);
  document.querySelectorAll('[name="semester"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));

});