const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

const updateButtonHandler = (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        document.location.replace(`/update/${id}`);
    }
};

const delButtonHandler = async (event) => {
    console.log(event.target);
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

if (document.querySelector("#update-button")) {
    document
        .querySelector('#update-button')
        .addEventListener('click', updateButtonHandler);

    document
        .querySelector('#delete-button')
        .addEventListener('click', delButtonHandler);
}