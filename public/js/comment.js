async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-body').value.trim();
    const rating = document.querySelector('input[name="rate"]:checked').value;
  
    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    if (comment_text && rating) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                recipe_id,
                comment_text,
                rating
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
  
        if (response.ok) {
            document.location.reload();
  
        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);