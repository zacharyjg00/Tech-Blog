const newCommentHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        if (event.target.hasAttribute('data-id')) {
            const post_id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/post`, {
                method: 'POST',
                body: JSON.stringify({ content, post_id }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace(`/post/${post_id}`);
            } else {
                alert('Failed to create post');
            }
        }
    }
};

if (document.querySelector("#submit-comment")) {
    document
        .querySelector('#submit-comment')
        .addEventListener('click', newCommentHandler);
}