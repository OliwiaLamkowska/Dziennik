function addComment() {
  const username = document.getElementById('username').value;
  const commentText = document.getElementById('comment-text').value;
  if (username && commentText) {
    const commentList = document.getElementById('comments-list');
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = `<strong>${username}</strong><p>${commentText}</p>`;
    commentList.appendChild(comment);
    document.getElementById('username').value = '';
    document.getElementById('comment-text').value = '';
  }
}
