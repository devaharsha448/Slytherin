let members = [
    { name: "John Doe", email: "john.doe@example.com", role: "Member" },
    { name: "Jane Smith", email: "jane.smith@example.com", role: "Admin" }
];

function displayMembers() {
    const tbody = document.getElementById("memberTableBody");
    tbody.innerHTML = "";
    members.forEach((member, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.role}</td>
            <td>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

const addMemberButton = document.getElementById("addMemberButton");
const addMemberForm = document.getElementById("addMemberForm");
addMemberButton.addEventListener("click", () => {
    addMemberForm.style.display = "block";
});

const memberForm = document.getElementById("memberForm");
memberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(memberForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");

    if (!name || !email || !role) {
        console.error("All fields are required.");
        return;
    }

    members.push({ name, email, role });
    displayMembers();
    addMemberForm.style.display = "none";
    memberForm.reset();
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit")) {
        const index = event.target.getAttribute("data-index");
        const member = members[index];
        showPrompt("Enter new name:", member.name).then(newName => {
            showPrompt("Enter new email:", member.email).then(newEmail => {
                showPrompt("Enter new role:", member.role).then(newRole => {
                    if (newName && newEmail && newRole) {
                        members[index] = { name: newName, email: newEmail, role: newRole };
                        displayMembers();
                    }
                });
            });
        });
    } else if (event.target.classList.contains("delete")) {
        const index = event.target.getAttribute("data-index");
        members.splice(index, 1);
        displayMembers();
    }
});

function showPrompt(message, defaultValue) {
    return new Promise((resolve, reject) => {
        const promptContainer = document.createElement("div");
        promptContainer.classList.add("prompt-container");

        const promptInput = document.createElement("input");
        promptInput.classList.add("prompt-input");
        promptInput.value = defaultValue || "";
        promptContainer.appendChild(promptInput);

        const promptButton = document.createElement("button");
        promptButton.classList.add("prompt-button");
        promptButton.innerText = "Submit";
        promptButton.addEventListener("click", () => {
            resolve(promptInput.value);
            document.body.removeChild(promptContainer);
        });
        promptContainer.appendChild(promptButton);

        document.body.appendChild(promptContainer);
    });
}

// Display initial members
displayMembers();
// Firebase setup
const db = firebase.firestore();

// Function to assign a task to a member
function assignTaskToMember(taskId, memberId) {
    // Check if the member exists
    db.collection('members').doc(memberId).get()
        .then((doc) => {
            if (doc.exists) {
                // Member exists, update the task assignment
                const taskRef = db.collection('tasks').doc(taskId);
                taskRef.update({
                    assignedTo: memberId,
                    status: 'assigned',
                    assignedDate: new Date()
                }).then(() => {
                    console.log('Task assigned successfully.');
                }).catch((error) => {
                    console.error('Error assigning task:', error);
                });
            } else {
                console.error('Member does not exist.');
            }
        }).catch((error) => {
            console.error('Error getting member:', error);
        });
}