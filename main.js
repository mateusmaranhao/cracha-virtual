const linksSocialMedia = {
  github: 'mateusmaranhao',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'mateuscesar_',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url;
      userName.textContent = data.name;
      userLogin.textContent = data.login;
      userLink.href = data.html_url;
      userBio.textContent = data.bio;
    })
}

getGitHubProfileInfos()