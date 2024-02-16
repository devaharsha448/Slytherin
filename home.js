const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// // Get the todo list container
// const todoList = document.querySelector('.todo-list');

// // Get the create icon
// const createIcon = document.querySelector('.todo .head .bx-plus');

// // Add event listener to the create icon
// createIcon.addEventListener('click', () => {
//     // Prompt the user to enter a new task
//     const newTaskText = prompt('Enter a new task:');
    
//     if (newTaskText) {
//         // Create a new list item
//         const newTaskItem = document.createElement('li');
// 		newTaskItem.classList.add('not-completed');
//         newTaskItem.innerHTML = `
//             <p>${newTaskText}</p>
//             <div class="actions">
//                 <i class='bx bx-pencil modify'></i>
//                 <i class='bx bx-trash delete'></i>
//             </div>
//         `;
        
//         // Append the new list item to the todo list container
//         todoList.appendChild(newTaskItem);
//     }
// });

// // Example of modifying and deleting tasks
// todoList.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target.classList.contains('delete')) {
//         target.parentElement.parentElement.remove();
//     } else if (target.classList.contains('modify')) {
//         const newText = prompt('Enter new text:');
//         if (newText) {
//             target.parentElement.previousElementSibling.textContent = newText;
//         }
//     }
// });

// Get the todo list container
const todoList = document.querySelector('.todo-list');

// Add event listener to the create icon
const createIcon = document.querySelector('.todo .head .bx-plus');
createIcon.addEventListener('click', () => {
    const newTaskText = prompt('Enter a new task:');
    if (newTaskText) {
        addTaskToList(newTaskText);
    }
});

// Function to add a task to the list
function addTaskToList(taskText) {
    const newTaskItem = document.createElement('li');
    newTaskItem.classList.add('not-completed');
    newTaskItem.innerHTML = `
        <p>${taskText}</p>
        <div class="actions">
            <button class="assign-button">Assign</button>
            <i class='bx bx-pencil modify'></i>
            <i class='bx bx-trash delete'></i>
        </div>
    `;
    todoList.appendChild(newTaskItem);

    // Add event listener to the assign button
    const assignButton = newTaskItem.querySelector('.assign-button');
    assignButton.addEventListener('click', () => {
        assignTask(newTaskItem);
    });
}

// // Function to assign a task
// function assignTask(taskItem) {
//     // Get the task text
//     const taskText = taskItem.querySelector('p').textContent;
    
//     // Create a new list item with the assigned task
//     const assignedTaskItem = document.createElement('li');
//     assignedTaskItem.innerHTML = `
//         <img src="admin-avatar.png">
//         <p>Admin</p>
//         <p>${taskText}</p>
//         <p>${new Date().toLocaleDateString()}</p>
//         <span class="status not-completed">Not Completed</span>
//     `;
    
//     // Append the new list item to the task list container
//     const taskStatusList = document.querySelector('.task-status-list');
//     taskStatusList.appendChild(assignedTaskItem);
// }
// Function to assign a task
// Function to assign a task
// Function to assign a task
function assignTask(taskItem) {
    // Get the task text
    const taskText = taskItem.querySelector('p').textContent;
    
    // Prompt for member's name
    const memberName = prompt('Enter member\'s name:');
    if (!memberName) return; // Exit if member's name is not provided

    // Create a new table row with the assigned task
    const assignedTaskItem = document.createElement('tr');
    assignedTaskItem.innerHTML = `
        <td>
            <img src="people.png.jpg">
            <p>${memberName}</p>
        </td>
        <td>${new Date().toLocaleDateString()}</td>
        <td><span class="status pending">pending</span></td>
    `;

    // Append the assigned task to the task status table
    const taskStatusTable = document.querySelector('.table-data table tbody');
    taskStatusTable.appendChild(assignedTaskItem);
}


// Example of modifying and deleting tasks
todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    } else if (target.classList.contains('modify')) {
        const newText = prompt('Enter new text:');
        if (newText) {
            target.parentElement.previousElementSibling.textContent = newText;
        }
    }
});
// js of info page