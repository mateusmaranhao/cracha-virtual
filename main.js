const linksSocialMedia = {
  github: 'mateusmaranhao',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'mateuscesar_',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks()