// --- Clock ---
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- Greeting (Swedish, auto time-of-day) ---
function setGreeting() {
  const hour = new Date().getHours();
  let salut;
  if      (hour >=6  && hour < 10) salut = 'Godmorgon';
  else if (hour >= 10 && hour < 12) salut = 'God förmiddag';
  else if (hour >= 12 && hour < 13) salut = 'Nu är det lunch';
  else if (hour >= 13 && hour < 17) salut = 'God eftermiddag';
  else if (hour >= 17 && hour < 23) salut = 'God kväll';
  else                              salut = 'God natt';
  document.getElementById('greeting').textContent = `${salut}, Tom`;
}
setGreeting();

// --- Background image (random photo, fade in on load) ---
const bgEl = document.getElementById('bg');
const bgImg = new Image();
bgImg.onload = () => {
  bgEl.style.backgroundImage = `url(${bgImg.src})`;
  bgEl.classList.add('loaded');
};
bgImg.src = `https://picsum.photos/1920/1080?random=${Date.now()}`;

// --- Quick links (sorted by order from bonjourr_config.json) ---
const links = [
  {title: 'Entra ID Home', url: 'https://entra.microsoft.com/?culture=en-us&country=us#home', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Microsoft_Entra_ID_color_icon.svg'},
  {title: 'Entra Users', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers/menuId/', icon: 'https://az-icons.com/export/icons/06c2a09f4135f9abddcf315efd9b90ef.svg'},
  {title: 'Entra Groups', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups/menuId/Overview', icon: 'https://az-icons.com/export/icons/5d26ca8674678da00f04ac96ede8d498.svg'},
  {title: 'Entra EntApps', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview', icon: 'https://az-icons.com/export/icons/e13094e5969e42033230a17a936bf10d.svg'},
  {title: 'Entra AppReg', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM', icon: 'https://az-icons.com/export/icons/996e588fa2b5b4306aa39f64399c74c1.svg'},
  {title: 'Entra CA', url: 'https://entra.microsoft.com/?culture=en-us&country=us#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies/menuId//fromNav/Identity', icon: 'https://az-icons.com/export/icons/232997b804dcb2f462fff392c28d31ca.svg'},
  {title: 'Azure Portal', url: 'https://portal.azure.com/#home', icon: 'https://az-icons.com/export/icons/6ae48fcbb84214de68fcba2540913934.svg'},
  {title: 'M365 Admin', url: 'https://admin.cloud.microsoft/', icon: 'https://play-lh.googleusercontent.com/W3VsSBWwRkgu3VU4vz0AHItfbhGKlYbgqLXJAihtr-QYgMO1A3g9_eyrAbqOxANa7qc'},
  {title: 'Defender', url: 'https://security.microsoft.com/', icon: 'https://play-lh.googleusercontent.com/NPiSdptTujrZYhm_srG6sOJi8LdtTEQtvHwu7InIucHeKSPw9SMsCw-f5v-E2SJ93lriW1wGRMU8Nx0DbkmmaA=w240-h480-rw'},
  {title: 'GitHub (SecID)', url: 'https://github.com/orgs/OnevinnAB/projects/10/views/4?groupedBy%5BcolumnId%5D=Assignees', icon: 'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png', iconBg: '#000000'},
  {title: 'Graph Explorer', url: 'https://developer.microsoft.com/en-us/graph/graph-explorer', icon: 'https://vld-bc.com/uploads/Graph_API_915d631c17.svg'},
  {title: 'Graph Permissions', url: 'https://learn.microsoft.com/en-us/graph/permissions-reference', icon: 'https://www.drupal.org/files/project-images/Graph%20API%20logo.png'},
  {title: 'XL', url: 'https://www.xledger.net/auth/init-signin/azure', icon: 'https://did.tomdemo.se/XLedgerLogo.png'},
  {title: 'PIM', url: 'https://portal.azure.com/#blade/Microsoft_Azure_PIMCommon/ActivationMenuBlade/aadmigratedroles', icon: 'https://did.tomdemo.se/Icons/PIM-Icon.svg'},
];

const linksContainer = document.getElementById('links');

links.forEach(({ title, url, icon, iconBg }) => {
  const a = document.createElement('a');
  a.href = url;
  a.title = title;
  a.className = 'link-item';

  const iconDiv = document.createElement('div');
  iconDiv.className = 'link-icon';
  if (iconBg) {} // iconDiv.style.background = iconBg;

  if (icon) {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = title;
    iconDiv.appendChild(img);
  } else {
    iconDiv.textContent = title[0].toUpperCase();
    iconDiv.classList.add('link-icon-letter');
  }

  a.appendChild(iconDiv);
  linksContainer.appendChild(a);
});
